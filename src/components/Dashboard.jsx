import { BookOpen, Brain, Trophy, TrendingUp, Award, Zap } from 'lucide-react';

function Dashboard({ progress, onNavigate }) {
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
      total: 30,
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
    },
    {
      label: 'Quizzes Completed',
      value: (progress.quizzesCompleted || []).length,
      total: 10,
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
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
        <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
        <p className="text-indigo-100 mb-6">Ready to master Fog and Cloud Computing?</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <stat.icon size={20} />
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              <div className="text-sm text-indigo-100">{stat.label}</div>
              <div className="mt-2 bg-white/30 rounded-full h-2">
                <div
                  className="bg-white rounded-full h-2 transition-all"
                  style={{ width: `${(stat.value / stat.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Study Insights */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Study Streak</h3>
            <span className="text-3xl">🔥</span>
          </div>
          <div className="text-4xl font-bold text-orange-500 mb-2">
            {progress.streak || 0} days
          </div>
          <p className="text-gray-600 text-sm">Keep it up! Consistency is key.</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Avg Quiz Score</h3>
            <Trophy className="text-green-500" size={32} />
          </div>
          <div className="text-4xl font-bold text-green-500 mb-2">
            {avgScore}%
          </div>
          <p className="text-gray-600 text-sm">
            {avgScore >= 80 ? 'Excellent work!' : 'Keep practicing!'}
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Total Points</h3>
            <Zap className="text-yellow-500" size={32} />
          </div>
          <div className="text-4xl font-bold text-indigo-600 mb-2">
            {progress.totalPoints || 0}
          </div>
          <p className="text-gray-600 text-sm">Earn more by studying!</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="bg-white rounded-xl p-6 shadow-lg card-hover text-left group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <action.icon className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{action.title}</h4>
              <p className="text-gray-600 text-sm">{action.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Motivational Quote */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white text-center shadow-lg">
        <p className="text-xl font-medium italic mb-2">
          "The expert in anything was once a beginner."
        </p>
        <p className="text-purple-100">Keep learning, you've got this! 💪</p>
      </div>
    </div>
  );
}

export default Dashboard;

