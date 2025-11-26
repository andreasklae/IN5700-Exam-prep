import { BookOpen, Brain, Trophy, TrendingUp, Award, Zap, Shuffle } from 'lucide-react';
import { quizQuestions, flashcards } from '../data/studyContent';

function Dashboard({ progress, onNavigate }) {
  // Quick random quiz - selects random questions from different topics
  const startRandomQuiz = () => {
    // Get questions from all topics, shuffle, take 10
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    const randomQuestions = shuffled.slice(0, 10);
    
    // Store in sessionStorage to pass to quiz mode
    sessionStorage.setItem('randomQuiz', JSON.stringify(randomQuestions));
    onNavigate('quiz');
  };

  // Quick random flashcards - selects random flashcards from different topics
  const startRandomFlashcards = () => {
    // Get flashcards from all topics, shuffle
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    
    // Store in sessionStorage to pass to flashcard mode
    sessionStorage.setItem('randomFlashcards', JSON.stringify(shuffled));
    onNavigate('flashcards');
  };
  const stats = [
    {
      label: 'Topics Studied',
      value: Object.keys(progress.topicsStudied || {}).length,
      total: 7,
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Flashcards Reviewed',
      value: new Set(progress.flashcardsReviewed || []).size,
      total: flashcards.length,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
    },
    {
      label: 'Quizzes Completed',
      value: (progress.quizzesCompleted || []).length,
      total: Math.ceil(quizQuestions.length / 10), // Total possible quizzes (10 questions each)
      icon: Trophy,
      color: 'from-green-500 to-emerald-500',
    },
    {
      label: 'Achievements',
      value: (progress.achievements || []).length,
      total: 8,
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const quickActions = [
    {
      title: 'Continue Learning',
      description: 'Explore topics in depth',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      action: () => onNavigate('topics'),
    },
    {
      title: 'Practice Flashcards',
      description: 'Quick review session',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      action: () => onNavigate('flashcards'),
    },
    {
      title: 'Take a Quiz',
      description: 'Test your knowledge',
      icon: Trophy,
      color: 'from-green-500 to-emerald-500',
      action: () => onNavigate('quiz'),
    },
    {
      title: 'View Progress',
      description: 'See your statistics',
      icon: TrendingUp,
      color: 'from-indigo-500 to-purple-500',
      action: () => onNavigate('progress'),
    },
  ];

  const avgScore = progress.quizScores?.length > 0
    ? Math.round(progress.quizScores.reduce((sum, s) => sum + s.percentage, 0) / progress.quizScores.length)
    : 0;

  return (
    <div className="space-y-4 sm:space-y-6 pb-6">
      {/* Welcome Section - Mobile Optimized */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back!</h2>
        <p className="text-sm sm:text-base text-indigo-100 mb-4 sm:mb-6">Ready to master Fog and Cloud Computing?</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <stat.icon size={18} className="sm:w-5 sm:h-5" />
                <span className="text-xl sm:text-2xl font-bold">{stat.value}</span>
              </div>
              <div className="text-xs sm:text-sm text-indigo-100">{stat.label}</div>
              <div className="mt-2 bg-white/30 rounded-full h-1.5 sm:h-2">
                <div
                  className="bg-white rounded-full h-1.5 sm:h-2 transition-all"
                  style={{ width: `${(stat.value / stat.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Random Practice - Mobile First */}
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 px-1">Quick Practice</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <button
            onClick={startRandomQuiz}
            className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-5 sm:p-6 text-white shadow-lg card-hover text-left group active:scale-95 transition-transform"
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-lg flex items-center justify-center">
                <Shuffle className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-1">Random Quiz</h4>
                <p className="text-sm text-green-100">10 random questions</p>
              </div>
            </div>
            <p className="text-sm text-green-50">Test yourself with questions from all topics</p>
          </button>

          <button
            onClick={startRandomFlashcards}
            className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-5 sm:p-6 text-white shadow-lg card-hover text-left group active:scale-95 transition-transform"
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-lg flex items-center justify-center">
                <Shuffle className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-1">Random Flashcards</h4>
                <p className="text-sm text-purple-100">Mixed review</p>
              </div>
            </div>
            <p className="text-sm text-purple-50">Review flashcards from all topics</p>
          </button>
        </div>
      </div>

      {/* Study Insights - Mobile Optimized */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg card-hover">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">Study Streak</h3>
            <span className="text-2xl sm:text-3xl">🔥</span>
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
            {progress.streak || 0} days
          </div>
          <p className="text-gray-600 text-xs sm:text-sm">Keep it up! Consistency is key.</p>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg card-hover">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">Avg Quiz Score</h3>
            <Trophy className="text-green-500" size={28} />
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-green-500 mb-2">
            {avgScore}%
          </div>
          <p className="text-gray-600 text-xs sm:text-sm">
            {avgScore >= 80 ? 'Excellent work!' : 'Keep practicing!'}
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg card-hover">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">Total Points</h3>
            <Zap className="text-yellow-500" size={28} />
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">
            {progress.totalPoints || 0}
          </div>
          <p className="text-gray-600 text-xs sm:text-sm">Earn more by studying!</p>
        </div>
      </div>

      {/* Quick Actions - Mobile Optimized */}
      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 px-1">Study Options</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg card-hover text-left group active:scale-95 transition-transform touch-manipulation"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                <action.icon className="text-white" size={20} />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">{action.title}</h4>
              <p className="text-gray-600 text-xs sm:text-sm">{action.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Motivational Quote - Mobile Optimized */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 sm:p-6 text-white text-center shadow-lg">
        <p className="text-base sm:text-lg md:text-xl font-medium italic mb-2">
          "The expert in anything was once a beginner."
        </p>
        <p className="text-sm sm:text-base text-purple-100">Keep learning, you've got this! 💪</p>
      </div>
    </div>
  );
}

export default Dashboard;

