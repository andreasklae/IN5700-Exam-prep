import { useState } from 'react';
import { ChevronRight, ChevronDown, CheckCircle, Circle, ArrowLeft } from 'lucide-react';
import { topics } from '../data/studyContent';

function TopicExplorer({ progress, updateProgress }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);

  const markSubtopicAsRead = (topicId, subtopicId) => {
    const topicsStudied = { ...progress.topicsStudied };
    if (!topicsStudied[topicId]) {
      topicsStudied[topicId] = [];
    }
    if (!topicsStudied[topicId].includes(subtopicId)) {
      topicsStudied[topicId].push(subtopicId);
    }

    const topicProgress = { ...progress.topicProgress };
    const topic = topics.find(t => t.id === topicId);
    topicProgress[topicId] = {
      subtopicsRead: topicsStudied[topicId].length,
      totalSubtopics: topic.subtopics.length,
    };

    updateProgress({
      topicsStudied,
      topicProgress,
      totalPoints: (progress.totalPoints || 0) + 5,
      studySessions: (progress.studySessions || 0) + 1,
    });
  };

  const isSubtopicRead = (topicId, subtopicId) => {
    return progress.topicsStudied?.[topicId]?.includes(subtopicId) || false;
  };

  const getTopicProgress = (topicId) => {
    const topic = topics.find(t => t.id === topicId);
    const read = progress.topicsStudied?.[topicId]?.length || 0;
    const total = topic.subtopics.length;
    return { read, total, percentage: Math.round((read / total) * 100) };
  };

  // Topic List View
  if (!selectedTopic) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold gradient-text mb-2">Explore Topics</h2>
          <p className="text-gray-600">Deep dive into each topic to master the material</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic) => {
            const prog = getTopicProgress(topic.id);
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className="bg-white rounded-xl p-6 shadow-lg card-hover text-left group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${topic.color} rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                    {topic.icon}
                  </div>
                  <ChevronRight className="text-gray-400 group-hover:text-indigo-600 transition-colors" size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{topic.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{topic.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    {prog.read} / {prog.total} subtopics
                  </span>
                  <span className="font-semibold text-indigo-600">{prog.percentage}%</span>
                </div>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${topic.color} rounded-full h-2 transition-all`}
                    style={{ width: `${prog.percentage}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Subtopic List View
  if (selectedTopic && !selectedSubtopic) {
    const prog = getTopicProgress(selectedTopic.id);
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <button
            onClick={() => setSelectedTopic(null)}
            className="flex items-center text-indigo-600 hover:text-indigo-700 mb-4 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Topics
          </button>
          
          <div className="flex items-start space-x-4">
            <div className={`w-20 h-20 bg-gradient-to-br ${selectedTopic.color} rounded-xl flex items-center justify-center text-4xl flex-shrink-0`}>
              {selectedTopic.icon}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedTopic.title}</h2>
              <p className="text-gray-600 mb-4">{selectedTopic.description}</p>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  Progress: {prog.read} / {prog.total} subtopics
                </span>
                <span className="text-sm font-semibold text-indigo-600">{prog.percentage}%</span>
              </div>
              <div className="mt-2 bg-gray-200 rounded-full h-2 max-w-md">
                <div
                  className={`bg-gradient-to-r ${selectedTopic.color} rounded-full h-2 transition-all`}
                  style={{ width: `${prog.percentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {selectedTopic.subtopics.map((subtopic, index) => {
            const isRead = isSubtopicRead(selectedTopic.id, subtopic.id);
            return (
              <button
                key={subtopic.id}
                onClick={() => setSelectedSubtopic(subtopic)}
                className="w-full bg-white rounded-xl p-6 shadow-lg card-hover text-left group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {isRead ? (
                      <CheckCircle className="text-green-500" size={24} />
                    ) : (
                      <Circle className="text-gray-300" size={24} />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                        {index + 1}. {subtopic.title}
                      </h3>
                      <ChevronRight className="text-gray-400 group-hover:text-indigo-600 transition-colors" size={20} />
                    </div>
                    
                    {isRead && (
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        ✓ Completed
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Subtopic Detail View
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <button
          onClick={() => setSelectedSubtopic(null)}
          className="flex items-center text-indigo-600 hover:text-indigo-700 mb-6 font-medium"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to {selectedTopic.title}
        </button>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{selectedSubtopic.title}</h2>
        
        <div className="prose max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line mb-8">
            {selectedSubtopic.content}
          </div>
          
          {selectedSubtopic.keyPoints && (
            <div className="bg-indigo-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">🎯 Key Points</h3>
              <ul className="space-y-2">
                {selectedSubtopic.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-indigo-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between pt-6 border-t">
          <button
            onClick={() => setSelectedSubtopic(null)}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Back to List
          </button>
          
          {!isSubtopicRead(selectedTopic.id, selectedSubtopic.id) && (
            <button
              onClick={() => {
                markSubtopicAsRead(selectedTopic.id, selectedSubtopic.id);
                setSelectedSubtopic(null);
              }}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Mark as Complete (+5 points)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopicExplorer;

