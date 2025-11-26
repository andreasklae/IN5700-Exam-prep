import { ArrowLeft, TrendingUp, Target, Brain, Trophy, Calendar } from 'lucide-react';
import { topics } from '../data/studyContent';

function ProgressView({ progress, onBack }) {
  const stats = [
    {
      label: 'Total Points',
      value: progress.totalPoints || 0,
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      label: 'Study Streak',
      value: `${progress.streak || 0} days`,
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
    },
    {
      label: 'Topics Completed',
      value: `${Object.keys(progress.topicsStudied || {}).length}/7`,
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Flashcards Reviewed',
      value: new Set(progress.flashcardsReviewed || []).size,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const avgQuizScore = progress.quizScores?.length > 0
    ? Math.round(progress.quizScores.reduce((sum, s) => sum + s.percentage, 0) / progress.quizScores.length)
    : 0;

  const topicProgressData = topics.map(topic => {
    const studied = progress.topicsStudied?.[topic.id] || [];
    const percentage = Math.round((studied.length / topic.subtopics.length) * 100);
    return {
      ...topic,
      studied: studied.length,
      total: topic.subtopics.length,
      percentage,
    };
  });

  const recentQuizzes = [...(progress.quizScores || [])].reverse().slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <button
          onClick={onBack}
          className="flex items-center text-indigo-600 hover:text-indigo-700 mb-4 font-medium"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Dashboard
        </button>
        
        <h2 className="text-3xl font-bold gradient-text mb-2">Your Progress</h2>
        <p className="text-gray-600">Track your learning journey</p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
            </div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Topic Progress */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Topic Mastery</h3>
        
        <div className="space-y-4">
          {topicProgressData.map((topic) => (
            <div key={topic.id} className="border-b pb-4 last:border-b-0">
              <div className="flex items-center space-x-4 mb-2">
                <div className={`w-10 h-10 bg-gradient-to-br ${topic.color} rounded-lg flex items-center justify-center text-xl`}>
                  {topic.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-800">{topic.title}</h4>
                    <span className="text-sm font-semibold text-indigo-600">
                      {topic.percentage}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{topic.studied} / {topic.total} subtopics</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-full h-2 ml-14">
                <div
                  className={`bg-gradient-to-r ${topic.color} rounded-full h-2 transition-all`}
                  style={{ width: `${topic.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz Performance */}
      {progress.quizScores?.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quiz Performance</h3>
            
            <div className="text-center mb-6">
              <div className="text-6xl font-bold gradient-text mb-2">{avgQuizScore}%</div>
              <p className="text-gray-600">Average Score</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total Quizzes</span>
                <span className="font-semibold text-gray-800">{progress.quizScores.length}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Perfect Scores</span>
                <span className="font-semibold text-gray-800">
                  {progress.quizScores.filter(s => s.percentage === 100).length}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Questions Answered</span>
                <span className="font-semibold text-gray-800">
                  {progress.quizScores.reduce((sum, s) => sum + s.questionsCount, 0)}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Quizzes</h3>
            
            <div className="space-y-3">
              {recentQuizzes.map((quiz, index) => {
                const topic = topics.find(t => t.id === quiz.topicId);
                const date = new Date(quiz.date);
                
                return (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {topic && (
                        <div className={`w-8 h-8 bg-gradient-to-br ${topic.color} rounded-lg flex items-center justify-center text-sm`}>
                          {topic.icon}
                        </div>
                      )}
                      <div>
                        <div className="font-medium text-gray-800">
                          {quiz.questionsCount} questions
                        </div>
                        <div className="text-xs text-gray-500">
                          {date.toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className={`text-lg font-bold ${
                      quiz.percentage >= 80 ? 'text-green-600' :
                      quiz.percentage >= 60 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {quiz.percentage}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Study Activity */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Calendar className="mr-2" size={24} />
          Study Activity
        </h3>
        
        <div className="grid grid-cols-7 gap-2">
          {[...Array(28)].map((_, index) => {
            const date = new Date();
            date.setDate(date.getDate() - (27 - index));
            const dateStr = date.toDateString();
            const hasStudied = progress.studyDays?.includes(dateStr);
            
            return (
              <div
                key={index}
                className={`aspect-square rounded-lg ${
                  hasStudied
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
                    : 'bg-gray-200'
                }`}
                title={dateStr}
              />
            );
          })}
        </div>
        <p className="text-sm text-gray-600 mt-3">Last 28 days of activity</p>
      </div>

      {/* Motivational Section */}
      <div className={`rounded-xl p-6 text-white shadow-lg ${
        avgQuizScore >= 80
          ? 'bg-gradient-to-r from-green-500 to-emerald-500'
          : 'bg-gradient-to-r from-indigo-500 to-purple-600'
      }`}>
        <h3 className="text-2xl font-bold mb-2">
          {avgQuizScore >= 80 ? '🌟 Outstanding Progress!' : '💪 Keep Going!'}
        </h3>
        <p className="text-lg">
          {avgQuizScore >= 80
            ? "You're mastering the material! Keep up the excellent work."
            : "You're making great progress. Keep practicing and you'll ace that exam!"}
        </p>
      </div>
    </div>
  );
}

export default ProgressView;

