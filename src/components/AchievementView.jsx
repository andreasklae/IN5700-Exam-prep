import { useState, useEffect } from 'react';
import { ArrowLeft, Lock, Award, Sparkles } from 'lucide-react';
import { achievements } from '../data/studyContent';
import { checkAchievements } from '../utils/storage';

function AchievementView({ progress, onBack }) {
  const [newAchievements, setNewAchievements] = useState([]);

  useEffect(() => {
    const earned = checkAchievements(progress, achievements);
    if (earned.length > 0) {
      setNewAchievements(earned);
      // Could trigger a notification/animation here
    }
  }, [progress]);

  const earned = progress.achievements || [];
  const totalPoints = achievements
    .filter(a => earned.includes(a.id))
    .reduce((sum, a) => sum + a.points, 0);
  const possiblePoints = achievements.reduce((sum, a) => sum + a.points, 0);

  const categories = [
    {
      name: 'Getting Started',
      achievements: achievements.filter(a => ['first_study'].includes(a.id)),
    },
    {
      name: 'Study Mastery',
      achievements: achievements.filter(a => 
        ['flashcard_10', 'all_topics', 'knowledge_seeker'].includes(a.id)
      ),
    },
    {
      name: 'Quiz Excellence',
      achievements: achievements.filter(a => 
        ['quiz_perfect', 'quiz_master', 'speed_demon'].includes(a.id)
      ),
    },
    {
      name: 'Consistency',
      achievements: achievements.filter(a => ['streak_3'].includes(a.id)),
    },
  ];

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
        
        <h2 className="text-3xl font-bold gradient-text mb-2">Achievements</h2>
        <p className="text-gray-600">Unlock achievements by studying and completing challenges</p>
      </div>

      {/* Achievement Stats */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 text-white shadow-lg">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <Award size={48} className="mx-auto mb-3" />
            <div className="text-4xl font-bold mb-2">{earned.length}</div>
            <div className="text-indigo-100">Achievements Unlocked</div>
          </div>
          <div className="text-center">
            <Sparkles size={48} className="mx-auto mb-3" />
            <div className="text-4xl font-bold mb-2">{totalPoints}</div>
            <div className="text-indigo-100">Achievement Points</div>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-3">🏆</div>
            <div className="text-4xl font-bold mb-2">
              {Math.round((earned.length / achievements.length) * 100)}%
            </div>
            <div className="text-indigo-100">Completion</div>
          </div>
        </div>
        
        <div className="mt-6 bg-white/20 rounded-full h-3">
          <div
            className="bg-white rounded-full h-3 transition-all"
            style={{ width: `${(earned.length / achievements.length) * 100}%` }}
          />
        </div>
      </div>

      {/* New Achievements Alert */}
      {newAchievements.length > 0 && (
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 text-white shadow-lg animate-bounce-soft">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">🎉</div>
            <div>
              <h3 className="text-xl font-bold mb-2">New Achievement{newAchievements.length > 1 ? 's' : ''} Unlocked!</h3>
              {newAchievements.map(achievement => (
                <div key={achievement.id} className="mb-2">
                  <span className="text-2xl mr-2">{achievement.icon}</span>
                  <span className="font-semibold">{achievement.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Achievement Categories */}
      {categories.map((category, catIndex) => (
        <div key={catIndex} className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.name}</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {category.achievements.map((achievement) => {
              const isUnlocked = earned.includes(achievement.id);
              
              return (
                <div
                  key={achievement.id}
                  className={`rounded-xl p-6 transition-all ${
                    isUnlocked
                      ? 'bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-300 shadow-md'
                      : 'bg-gray-50 border-2 border-gray-200 opacity-60'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 ${
                      isUnlocked
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
                        : 'bg-gray-300'
                    }`}>
                      {isUnlocked ? achievement.icon : <Lock className="text-gray-500" size={24} />}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`text-lg font-bold ${
                          isUnlocked ? 'text-gray-800' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </h4>
                        {isUnlocked && (
                          <span className="px-3 py-1 bg-indigo-500 text-white text-sm font-semibold rounded-full">
                            +{achievement.points}
                          </span>
                        )}
                      </div>
                      
                      <p className={`text-sm mb-3 ${
                        isUnlocked ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {achievement.description}
                      </p>
                      
                      {isUnlocked ? (
                        <div className="flex items-center space-x-2 text-green-600 font-medium text-sm">
                          <Award size={16} />
                          <span>Unlocked!</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2 text-gray-500 font-medium text-sm">
                          <Lock size={16} />
                          <span>Locked</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Motivational Section */}
      {earned.length < achievements.length && (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white text-center shadow-lg">
          <p className="text-xl font-medium mb-2">
            {achievements.length - earned.length} more achievement{achievements.length - earned.length !== 1 ? 's' : ''} to unlock!
          </p>
          <p className="text-purple-100">Keep studying to earn them all! 🚀</p>
        </div>
      )}

      {earned.length === achievements.length && (
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-8 text-white text-center shadow-lg">
          <div className="text-6xl mb-4">👑</div>
          <h3 className="text-3xl font-bold mb-2">Achievement Master!</h3>
          <p className="text-xl">You've unlocked all achievements! Outstanding work! 🎉</p>
        </div>
      )}
    </div>
  );
}

export default AchievementView;

