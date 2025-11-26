// Local storage utilities for progress tracking

const STORAGE_KEY = 'fog_computing_exam_prep';

const defaultProgress = {
  totalPoints: 0,
  streak: 0,
  lastStudyDate: null,
  studyDays: [],
  topicsStudied: {},
  flashcardsReviewed: [],
  quizzesCompleted: [],
  achievements: [],
  topicProgress: {},
  quizScores: [],
  studySessions: 0,
};

export const loadProgress = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...defaultProgress, ...JSON.parse(saved) };
    }
  } catch (error) {
    console.error('Error loading progress:', error);
  }
  return defaultProgress;
};

export const saveProgress = (progress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

export const resetProgress = () => {
  localStorage.removeItem(STORAGE_KEY);
  return defaultProgress;
};

export const checkAchievements = (progress, achievements) => {
  const earned = [];
  
  achievements.forEach(achievement => {
    // Skip if already earned
    if (progress.achievements?.includes(achievement.id)) {
      return;
    }
    
    let unlock = false;
    
    switch (achievement.id) {
      case 'first_study':
        unlock = progress.studySessions >= 1;
        break;
      case 'flashcard_10':
        unlock = (progress.flashcardsReviewed?.length || 0) >= 10;
        break;
      case 'quiz_perfect':
        unlock = progress.quizScores?.some(score => score.percentage === 100);
        break;
      case 'all_topics':
        unlock = Object.keys(progress.topicsStudied || {}).length >= 7;
        break;
      case 'streak_3':
        unlock = (progress.streak || 0) >= 3;
        break;
      case 'quiz_master':
        unlock = (progress.quizzesCompleted?.length || 0) >= 10;
        break;
      case 'speed_demon':
        unlock = progress.quizScores?.some(score => 
          score.questionsCount >= 10 && score.timeSpent < 120
        );
        break;
      case 'knowledge_seeker':
        unlock = Object.values(progress.topicProgress || {}).some(
          topic => topic.subtopicsRead >= topic.totalSubtopics
        );
        break;
    }
    
    if (unlock) {
      earned.push(achievement);
    }
  });
  
  return earned;
};

