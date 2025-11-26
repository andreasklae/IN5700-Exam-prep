import { useState, useEffect } from 'react';
import { Cloud, CloudOff, RefreshCw, Copy, Check, Download, Upload, X } from 'lucide-react';
import { generateSyncCode, saveToCloud, loadFromCloud, mergeProgress } from '../utils/sync';
import { isConfigured } from '../config/firebase';

function SyncSettings({ progress, updateProgress, onClose }) {
  const [syncCode, setSyncCode] = useState(progress.syncCode || '');
  const [inputCode, setInputCode] = useState('');
  const [syncing, setSyncing] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // success, error, info
  const [copied, setCopied] = useState(false);
  const [lastSync, setLastSync] = useState(null);

  useEffect(() => {
    if (progress.lastSync) {
      setLastSync(new Date(progress.lastSync));
    }
  }, [progress.lastSync]);

  const showMessage = (text, type = 'info') => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => setMessage(''), 5000);
  };

  const handleGenerateCode = () => {
    const code = generateSyncCode();
    setSyncCode(code);
    updateProgress({ syncCode: code });
    showMessage('Sync code generated! Use this code on your other devices.', 'success');
  };

  const handleSaveToCloud = async () => {
    if (!syncCode) {
      showMessage('Please generate a sync code first', 'error');
      return;
    }

    if (!isConfigured) {
      showMessage('Firebase not configured. Please set up Firebase to enable cloud sync. See FIREBASE_SETUP.md for instructions.', 'error');
      return;
    }

    setSyncing(true);
    try {
      await saveToCloud(syncCode, progress);
      updateProgress({ lastSync: new Date().toISOString() });
      setLastSync(new Date());
      showMessage('Progress saved to cloud!', 'success');
    } catch (error) {
      if (error.message.includes('not configured')) {
        showMessage('Firebase not configured. Please set up Firebase to enable cloud sync.', 'error');
      } else if (error.code === 'unavailable' || error.code === 'failed-precondition') {
        showMessage('Unable to connect. Check your internet connection.', 'error');
      } else {
        showMessage('Failed to save. Check your internet connection.', 'error');
      }
    }
    setSyncing(false);
  };

  const handleLoadFromCloud = async () => {
    if (!inputCode || inputCode.length !== 6) {
      showMessage('Please enter a valid 6-character sync code', 'error');
      return;
    }

    if (!isConfigured) {
      showMessage('Firebase not configured. Please set up Firebase to enable cloud sync. See FIREBASE_SETUP.md for instructions.', 'error');
      return;
    }

    setSyncing(true);
    try {
      const cloudData = await loadFromCloud(inputCode.toUpperCase());
      const merged = mergeProgress(progress, cloudData);
      updateProgress(merged);
      setSyncCode(inputCode.toUpperCase());
      setInputCode('');
      showMessage('Progress synced successfully!', 'success');
    } catch (error) {
      if (error.message.includes('not configured')) {
        showMessage('Firebase not configured. Please set up Firebase to enable cloud sync.', 'error');
      } else if (error.message.includes('not found')) {
        showMessage('Sync code not found. Make sure you entered it correctly.', 'error');
      } else if (error.code === 'unavailable' || error.code === 'failed-precondition') {
        showMessage('Unable to connect. Check your internet connection.', 'error');
      } else {
        showMessage('Sync failed. Check your internet connection.', 'error');
      }
    }
    setSyncing(false);
  };

  const handleCopyCode = () => {
    if (syncCode) {
      navigator.clipboard.writeText(syncCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      showMessage('Sync code copied to clipboard!', 'success');
    }
  };

  const handleExportData = () => {
    const dataStr = JSON.stringify(progress, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `exam-prep-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showMessage('Progress exported successfully!', 'success');
  };

  const handleImportData = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        const merged = mergeProgress(progress, imported);
        updateProgress(merged);
        showMessage('Progress imported successfully!', 'success');
      } catch (error) {
        showMessage('Invalid backup file', 'error');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Cloud className="text-indigo-600" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">Sync Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Message Banner */}
          {message && (
            <div className={`p-4 rounded-lg ${
              messageType === 'success' ? 'bg-green-100 text-green-800' :
              messageType === 'error' ? 'bg-red-100 text-red-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {message}
            </div>
          )}

          {/* Firebase Not Configured Notice */}
          {!isConfigured && (
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
              <h3 className="font-semibold text-yellow-800 mb-2 flex items-center">
                <CloudOff className="mr-2" size={20} />
                Cloud Sync Not Available
              </h3>
              <p className="text-sm text-yellow-700 mb-3">
                Firebase is not configured. To enable cloud sync across devices, you need to set up Firebase.
              </p>
              <p className="text-sm text-yellow-700">
                <strong>Option 1:</strong> Set up Firebase (see FIREBASE_SETUP.md) for automatic cloud sync<br />
                <strong>Option 2:</strong> Use manual Export/Import below to transfer progress between devices
              </p>
            </div>
          )}

          {/* Info Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Cloud className="mr-2 text-indigo-600" size={20} />
              How Sync Works
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Generate a sync code on your primary device</li>
              <li>• Your progress is saved to the cloud with this code</li>
              <li>• Enter the same code on your other devices to sync</li>
              <li>• Progress automatically merges across devices</li>
              <li>• Works on laptop, phone, tablet - anywhere!</li>
            </ul>
          </div>

          {/* Current Sync Code */}
          {syncCode ? (
            <div className="bg-white border-2 border-indigo-300 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Your Sync Code</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex-1 bg-indigo-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-mono font-bold text-indigo-600 tracking-wider">
                    {syncCode}
                  </div>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="p-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                  title="Copy code"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </button>
              </div>
              
              {lastSync && (
                <p className="text-sm text-gray-600 mb-3">
                  Last synced: {lastSync.toLocaleString()}
                </p>
              )}

              <button
                onClick={handleSaveToCloud}
                disabled={syncing}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50"
              >
                {syncing ? <RefreshCw className="animate-spin" size={20} /> : <Cloud size={20} />}
                <span>{syncing ? 'Syncing...' : 'Save Progress to Cloud'}</span>
              </button>
            </div>
          ) : (
            <div className="bg-white border-2 border-gray-300 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">Get Started</h3>
              <p className="text-gray-600 mb-4">
                Generate a sync code to enable cloud sync across your devices.
              </p>
              <button
                onClick={handleGenerateCode}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                <Cloud size={20} />
                <span>Generate Sync Code</span>
              </button>
            </div>
          )}

          {/* Load from Another Device */}
          <div className="bg-white border-2 border-gray-300 rounded-xl p-6">
            <h3 className="font-semibold text-gray-800 mb-3">Sync from Another Device</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Enter the sync code from your other device to load your progress.
            </p>
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                placeholder="Enter 6-character code"
                maxLength={6}
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none font-mono text-lg text-center"
              />
              <button
                onClick={handleLoadFromCloud}
                disabled={syncing || inputCode.length !== 6}
                className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {syncing ? <RefreshCw className="animate-spin" size={20} /> : 'Sync'}
              </button>
            </div>
          </div>

          {/* Manual Backup */}
          <div className="bg-white border-2 border-gray-300 rounded-xl p-6">
            <h3 className="font-semibold text-gray-800 mb-3">Manual Backup</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Export your progress as a file or import from a backup.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={handleExportData}
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <Download size={20} />
                <span>Export</span>
              </button>
              <label className="flex-1">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportData}
                  className="hidden"
                />
                <div className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer">
                  <Upload size={20} />
                  <span>Import</span>
                </div>
              </label>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ Keep your sync code safe!</strong> Anyone with your code can access your progress. Don't share it publicly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SyncSettings;

