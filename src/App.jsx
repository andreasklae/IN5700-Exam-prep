import { useState, useEffect } from 'react';
import { BookOpen, Brain, Trophy, Target, TrendingUp, Award } from 'lucide-react';
import Dashboard from './components/Dashboard';
import TopicExplorer from './components/TopicExplorer';
import FlashcardMode from './components/FlashcardMode';
import QuizMode from './components/QuizMode';
import ProgressView from './components/ProgressView';
import AchievementView from './components/AchievementView';
import { loadProgress, saveProgress } from './utils/storage';
import { autoSync, loadFromCloud } from './utils/sync';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [progress, setProgress] = useState(loadProgress());

  // Load from cloud on mount and merge with local
  useEffect(() => {
    const loadCloudProgress = async () => {
      const cloudData = await loadFromCloud();
      if (cloudData) {
        const merged = mergeProgress(progress, cloudData);
        setProgress(merged);
        saveProgress(merged);
      }
    };
    loadCloudProgress();
  }, []);

  useEffect(() => {
    saveProgress(progress);
    
    // Auto-sync to cloud every 30 seconds
    const syncInterval = setInterval(() => {
      autoSync(progress);
    }, 30 * 1000);
    
    return () => clearInterval(syncInterval);
  }, [progress]);

  const updateProgress = (updates) => {
    setProgress(prev => {
      const newProgress = { ...prev, ...updates };
      
      // Update last study date
      newProgress.lastStudyDate = new Date().toISOString();
      
      // Check for streak
      const today = new Date().toDateString();
      const lastDate = prev.lastStudyDate ? new Date(prev.lastStudyDate).toDateString() : null;
      
      if (lastDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastDate === yesterday.toDateString()) {
          newProgress.streak = (prev.streak || 0) + 1;
        } else if (lastDate !== today) {
          newProgress.streak = 1;
        }
      }
      
      // Update study days
      const studyDays = new Set(prev.studyDays || []);
      studyDays.add(today);
      newProgress.studyDays = Array.from(studyDays);
      
      return newProgress;
    });
  };

  // Merge progress from two sources (local and cloud)
  const mergeProgress = (local, cloud) => {
    if (!cloud) return local;
    return {
      totalPoints: Math.max(local.totalPoints || 0, cloud.totalPoints || 0),
      streak: Math.max(local.streak || 0, cloud.streak || 0),
      lastStudyDate: (local.lastStudyDate && cloud.lastStudyDate) 
        ? (local.lastStudyDate > cloud.lastStudyDate ? local.lastStudyDate : cloud.lastStudyDate)
        : (local.lastStudyDate || cloud.lastStudyDate),
      studyDays: [...new Set([...(local.studyDays || []), ...(cloud.studyDays || [])])],
      topicsStudied: {
        ...(cloud.topicsStudied || {}),
        ...(local.topicsStudied || {}),
        ...Object.keys(local.topicsStudied || {}).reduce((acc, key) => {
          acc[key] = [...new Set([
            ...(cloud.topicsStudied?.[key] || []),
            ...(local.topicsStudied?.[key] || [])
          ])];
          return acc;
        }, {})
      },
      flashcardsReviewed: [...new Set([
        ...(local.flashcardsReviewed || []),
        ...(cloud.flashcardsReviewed || [])
      ])],
      quizzesCompleted: [...new Set([
        ...(local.quizzesCompleted || []),
        ...(cloud.quizzesCompleted || [])
      ])],
      achievements: [...new Set([
        ...(local.achievements || []),
        ...(cloud.achievements || [])
      ])],
      topicProgress: {
        ...(cloud.topicProgress || {}),
        ...(local.topicProgress || {}),
      },
      quizScores: [...(cloud.quizScores || []), ...(local.quizScores || [])],
      studySessions: Math.max(local.studySessions || 0, cloud.studySessions || 0),
    };
  };

  const views = {
    dashboard: <Dashboard progress={progress} onNavigate={setCurrentView} />,
    topics: <TopicExplorer progress={progress} updateProgress={updateProgress} />,
    flashcards: <FlashcardMode progress={progress} updateProgress={updateProgress} onBack={() => setCurrentView('dashboard')} />,
    quiz: <QuizMode progress={progress} updateProgress={updateProgress} onBack={() => setCurrentView('dashboard')} />,
    progress: <ProgressView progress={progress} onBack={() => setCurrentView('dashboard')} />,
    achievements: <AchievementView progress={progress} onBack={() => setCurrentView('dashboard')} />,
  };

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: Target },
    { id: 'topics', label: 'Topics', icon: BookOpen },
    { id: 'flashcards', label: 'Flashcards', icon: Brain },
    { id: 'quiz', label: 'Quiz', icon: Trophy },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
    { id: 'achievements', label: 'Achievements', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">☁️</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">IN5700 Exam Prep</h1>
                <p className="text-sm text-gray-600">Fog & Cloud Computing</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-sm text-gray-600">Total Points</div>
                <div className="text-xl font-bold text-indigo-600">{progress.totalPoints || 0}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Streak</div>
                <div className="text-xl font-bold text-orange-500 flex items-center">
                  🔥 {progress.streak || 0}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="mt-4 flex space-x-2 overflow-x-auto pb-2">
            {navigation.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setCurrentView(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  currentView === id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-fade-in">
          {views[currentView]}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 pb-8 text-center text-gray-600">
        <p className="text-sm">Good luck with your exam! 🎓</p>
      </footer>
    </div>
  );
}

export default App;

