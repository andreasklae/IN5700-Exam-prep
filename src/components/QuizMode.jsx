import { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, XCircle, Trophy, Clock } from 'lucide-react';
import { quizQuestions, topics } from '../data/studyContent';

function QuizMode({ progress, updateProgress, onBack }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [quizState, setQuizState] = useState('setup'); // setup, active, results
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [startTime, setStartTime] = useState(null);
  const [timeSpent, setTimeSpent] = useState(0);

  // Check for random quiz from dashboard
  useEffect(() => {
    const randomQuiz = sessionStorage.getItem('randomQuiz');
    if (randomQuiz) {
      const randomQuestions = JSON.parse(randomQuiz);
      setQuestions(randomQuestions);
      setSelectedTopic('all');
      setQuizState('active');
      setStartTime(Date.now());
      sessionStorage.removeItem('randomQuiz');
    }
  }, []);

  const startQuiz = (topicId, numQuestions = 5) => {
    const topicQuestions = topicId === 'all'
      ? quizQuestions
      : quizQuestions.filter(q => q.topic === topicId);
    
    const shuffled = [...topicQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(numQuestions, shuffled.length));
    
    setQuestions(selected);
    setAnswers({});
    setCurrentQuestion(0);
    setQuizState('active');
    setStartTime(Date.now());
  };

  const selectAnswer = (questionId, answerIndex) => {
    setAnswers({
      ...answers,
      [questionId]: answerIndex,
    });
  };

  const submitQuiz = () => {
    const endTime = Date.now();
    const spent = Math.round((endTime - startTime) / 1000);
    setTimeSpent(spent);
    
    const correct = questions.filter(q => answers[q.id] === q.correct).length;
    const percentage = Math.round((correct / questions.length) * 100);
    
    const quizScore = {
      topicId: selectedTopic,
      questionsCount: questions.length,
      correct,
      percentage,
      timeSpent: spent,
      date: new Date().toISOString(),
    };
    
    const quizId = `quiz_${Date.now()}`;
    const completedQuizzes = [...(progress.quizzesCompleted || []), quizId];
    const quizScores = [...(progress.quizScores || []), quizScore];
    
    let points = correct * 10;
    if (percentage === 100) points += 50; // Bonus for perfect score
    
    updateProgress({
      quizzesCompleted: completedQuizzes,
      quizScores,
      totalPoints: (progress.totalPoints || 0) + points,
    });
    
    setQuizState('results');
  };

  // Setup View (skip if random quiz loaded)
  if (quizState === 'setup' && questions.length === 0) {
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
          
          <h2 className="text-3xl font-bold gradient-text mb-2">Quiz Time!</h2>
          <p className="text-gray-600">Test your knowledge and earn points</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* All Topics Quiz */}
          <button
            onClick={() => {
              setSelectedTopic('all');
              startQuiz('all', 10);
            }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-8 shadow-lg card-hover text-left text-white group"
          >
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-2">Mixed Quiz</h3>
            <p className="text-indigo-100 mb-4">
              10 questions from all topics
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm">Comprehensive test</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </button>

          {/* Quick Quiz */}
          <button
            onClick={() => {
              setSelectedTopic('all');
              startQuiz('all', 5);
            }}
            className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-8 shadow-lg card-hover text-left text-white group"
          >
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-2">Quick Quiz</h3>
            <p className="text-green-100 mb-4">
              5 random questions
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm">Fast practice</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </button>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Or choose a specific topic:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {topics.map((topic) => {
              const topicQuestions = quizQuestions.filter(q => q.topic === topic.id);
              
              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    setSelectedTopic(topic.id);
                    startQuiz(topic.id, 5);
                  }}
                  className="bg-white rounded-xl p-4 shadow-lg card-hover text-left group flex items-center space-x-4"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${topic.color} rounded-lg flex items-center justify-center text-2xl flex-shrink-0`}>
                    {topic.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                      {topic.title}
                    </h4>
                    <p className="text-sm text-gray-600">{topicQuestions.length} questions</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Active Quiz View
  if (quizState === 'active') {
    const question = questions[currentQuestion];
    const isAnswered = answers[question.id] !== undefined;

    return (
      <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
            <button
              onClick={() => setQuizState('setup')}
              className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm sm:text-base active:scale-95 touch-manipulation"
            >
              <ArrowLeft size={18} className="mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Exit Quiz</span>
              <span className="sm:hidden">Exit</span>
            </button>
            
            <div className="flex items-center space-x-1 sm:space-x-2 text-gray-600 text-sm sm:text-base">
              <Clock size={16} />
              <span className="font-medium">
                {Math.floor((Date.now() - startTime) / 1000)}s
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <span className="text-sm sm:text-base text-indigo-600 font-semibold">
              {Object.keys(answers).length} / {questions.length} answered
            </span>
          </div>
          
          <div className="mt-3 sm:mt-4 bg-gray-200 rounded-full h-1.5 sm:h-2">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full h-1.5 sm:h-2 transition-all"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-lg">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">{question.question}</h3>
          
          <div className="space-y-2 sm:space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(question.id, index)}
                className={`w-full p-3 sm:p-4 rounded-lg text-left transition-all touch-manipulation active:scale-[0.98] ${
                  answers[question.id] === index
                    ? 'bg-indigo-500 text-white shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
                }`}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-semibold text-sm sm:text-base flex-shrink-0 ${
                    answers[question.id] === index
                      ? 'bg-white text-indigo-600'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-sm sm:text-base">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg flex items-center justify-between gap-2 sm:gap-4">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all touch-manipulation active:scale-95 ${
              currentQuestion === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </button>

          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
              className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 bg-indigo-500 text-white rounded-lg text-sm sm:text-base font-medium hover:bg-indigo-600 transition-colors touch-manipulation active:scale-95"
            >
              Next
            </button>
          ) : (
            <button
              onClick={submitQuiz}
              disabled={Object.keys(answers).length !== questions.length}
              className={`flex-1 sm:flex-none px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all touch-manipulation active:scale-95 ${
                Object.keys(answers).length === questions.length
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Submit Quiz
            </button>
          )}
        </div>
      </div>
    );
  }

  // Results View
  const correct = questions.filter(q => answers[q.id] === q.correct).length;
  const percentage = Math.round((correct / questions.length) * 100);
  const points = correct * 10 + (percentage === 100 ? 50 : 0);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className={`rounded-xl p-8 shadow-lg text-center text-white ${
        percentage >= 80 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
        percentage >= 60 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
        'bg-gradient-to-r from-red-500 to-pink-500'
      }`}>
        <Trophy size={64} className="mx-auto mb-4" />
        <h2 className="text-4xl font-bold mb-2">Quiz Complete!</h2>
        <p className="text-2xl mb-4">You scored {percentage}%</p>
        <p className="text-lg mb-6">
          {correct} out of {questions.length} correct • {timeSpent} seconds
        </p>
        <div className="text-3xl font-bold">+{points} points</div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Review Answers</h3>
        
        <div className="space-y-6">
          {questions.map((question, qIndex) => {
            const userAnswer = answers[question.id];
            const isCorrect = userAnswer === question.correct;
            
            return (
              <div key={question.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-start space-x-3 mb-4">
                  {isCorrect ? (
                    <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  ) : (
                    <XCircle className="text-red-500 flex-shrink-0" size={24} />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {qIndex + 1}. {question.question}
                    </h4>
                    
                    <div className="space-y-2 mb-3">
                      {question.options.map((option, oIndex) => (
                        <div
                          key={oIndex}
                          className={`p-3 rounded-lg ${
                            oIndex === question.correct
                              ? 'bg-green-100 border-2 border-green-500'
                              : oIndex === userAnswer && !isCorrect
                              ? 'bg-red-100 border-2 border-red-500'
                              : 'bg-gray-50'
                          }`}
                        >
                          <span className="font-medium mr-2">
                            {String.fromCharCode(65 + oIndex)}.
                          </span>
                          {option}
                          {oIndex === question.correct && (
                            <span className="ml-2 text-green-600 font-semibold">✓ Correct</span>
                          )}
                          {oIndex === userAnswer && !isCorrect && (
                            <span className="ml-2 text-red-600 font-semibold">✗ Your answer</span>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Explanation:</strong> {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => setQuizState('setup')}
          className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
        >
          Back to Quiz Selection
        </button>
        <button
          onClick={() => startQuiz(selectedTopic, questions.length)}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizMode;

