import { useState, useEffect } from 'react';
import { ArrowLeft, RotateCw, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { flashcards, topics } from '../data/studyContent';

function FlashcardMode({ progress, updateProgress, onBack }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionCards, setSessionCards] = useState([]);

  const topicFlashcards = selectedTopic
    ? flashcards.filter(card => card.topic === selectedTopic)
    : [];

  // Check for random flashcards from dashboard
  useEffect(() => {
    const randomFlashcards = sessionStorage.getItem('randomFlashcards');
    if (randomFlashcards) {
      const cards = JSON.parse(randomFlashcards);
      setSessionCards(cards);
      setSelectedTopic('all');
      setCurrentIndex(0);
      setIsFlipped(false);
      sessionStorage.removeItem('randomFlashcards');
    }
  }, []);

  useEffect(() => {
    if (selectedTopic && !sessionStorage.getItem('randomFlashcards')) {
      // Shuffle cards for variety
      const shuffled = [...topicFlashcards].sort(() => Math.random() - 0.5);
      setSessionCards(shuffled);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  }, [selectedTopic]);

  const currentCard = sessionCards[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && currentCard) {
      // Mark as reviewed when they flip to see answer
      const reviewed = new Set(progress.flashcardsReviewed || []);
      reviewed.add(currentCard.id);
      updateProgress({
        flashcardsReviewed: Array.from(reviewed),
        totalPoints: (progress.totalPoints || 0) + 2,
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < sessionCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...sessionCards].sort(() => Math.random() - 0.5);
    setSessionCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Topic Selection View (skip if random flashcards loaded)
  if (!selectedTopic && sessionCards.length === 0) {
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
          
          <h2 className="text-3xl font-bold gradient-text mb-2">Flashcard Practice</h2>
          <p className="text-gray-600">Select a topic to start reviewing flashcards</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic) => {
            const topicCards = flashcards.filter(card => card.topic === topic.id);
            const reviewed = topicCards.filter(card => 
              progress.flashcardsReviewed?.includes(card.id)
            ).length;
            
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className="bg-white rounded-xl p-6 shadow-lg card-hover text-left group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${topic.color} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {topic.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{topic.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {topicCards.length} flashcards
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    {reviewed} / {topicCards.length} reviewed
                  </span>
                  <span className="font-semibold text-indigo-600">
                    {Math.round((reviewed / topicCards.length) * 100)}%
                  </span>
                </div>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${topic.color} rounded-full h-2 transition-all`}
                    style={{ width: `${(reviewed / topicCards.length) * 100}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">💡</div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Study Tips</h3>
              <ul className="space-y-1 text-sm text-blue-50">
                <li>• Try to answer before flipping the card</li>
                <li>• Review cards multiple times for better retention</li>
                <li>• Focus on topics you find challenging</li>
                <li>• Use spaced repetition for long-term memory</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Flashcard View
  const topic = selectedTopic ? topics.find(t => t.id === selectedTopic) : { title: 'Random Review', icon: '🎲', color: 'from-purple-500 to-pink-500' };
  const reviewedCount = sessionCards.filter(card => 
    progress.flashcardsReviewed?.includes(card.id)
  ).length;

  // If we have cards but no topic selected, we're in random mode
  if (sessionCards.length > 0 && !selectedTopic) {
    // Show flashcard view directly
  }

  return (
    <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <button
            onClick={() => {
              setSelectedTopic(null);
              setSessionCards([]);
            }}
            className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm sm:text-base active:scale-95 touch-manipulation"
          >
            <ArrowLeft size={18} className="mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Change Topic</span>
            <span className="sm:hidden">Back</span>
          </button>
          
          <button
            onClick={handleShuffle}
            className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm sm:text-base active:scale-95 touch-manipulation"
          >
            <RotateCw size={16} />
            <span>Shuffle</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${topic.color} rounded-lg flex items-center justify-center text-xl sm:text-2xl`}>
            {topic.icon}
          </div>
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{topic.title}</h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              Card {currentIndex + 1} of {sessionCards.length}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-xl p-4 shadow-lg">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Session Progress</span>
          <span>{Math.round(((currentIndex + 1) / sessionCards.length) * 100)}%</span>
        </div>
        <div className="bg-gray-200 rounded-full h-2">
          <div
            className={`bg-gradient-to-r ${topic.color} rounded-full h-2 transition-all`}
            style={{ width: `${((currentIndex + 1) / sessionCards.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Flashcard - Mobile Optimized */}
      {currentCard && (
        <div
          onClick={handleFlip}
          className="bg-white rounded-xl sm:rounded-2xl shadow-2xl cursor-pointer min-h-[300px] sm:min-h-[400px] flex items-center justify-center p-4 sm:p-6 md:p-8 card-hover touch-manipulation active:scale-[0.98]"
          style={{ perspective: '1000px' }}
        >
          <div className="text-center max-w-2xl w-full">
            {!isFlipped ? (
              <div>
                <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">QUESTION</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 px-2">
                  {currentCard.question}
                </h3>
                <p className="text-sm sm:text-base text-indigo-600 font-medium">Tap to reveal answer</p>
              </div>
            ) : (
              <div>
                <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">ANSWER</div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2">
                  {currentCard.answer}
                </p>
                {progress.flashcardsReviewed?.includes(currentCard.id) && (
                  <div className="flex items-center justify-center space-x-2 text-green-600 text-sm sm:text-base">
                    <CheckCircle size={18} />
                    <span className="font-medium">Reviewed (+2 points)</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation - Mobile Optimized */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all touch-manipulation active:scale-95 ${
              currentIndex === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-indigo-500 text-white hover:bg-indigo-600'
            }`}
          >
            <ChevronLeft size={18} />
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </button>

          <div className="text-center px-2">
            <div className="text-xs sm:text-sm text-gray-600">Reviewed</div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-600">
              {reviewedCount} / {sessionCards.length}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === sessionCards.length - 1}
            className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all touch-manipulation active:scale-95 ${
              currentIndex === sessionCards.length - 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-indigo-500 text-white hover:bg-indigo-600'
            }`}
          >
            <span>Next</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Completion */}
      {reviewedCount === sessionCards.length && (
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white shadow-lg text-center">
          <div className="text-4xl mb-3">🎉</div>
          <h3 className="text-2xl font-bold mb-2">Great Job!</h3>
          <p className="mb-4">You've reviewed all flashcards in this topic!</p>
          <button
            onClick={handleShuffle}
            className="px-6 py-3 bg-white text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors"
          >
            Review Again
          </button>
        </div>
      )}
    </div>
  );
}

export default FlashcardMode;

