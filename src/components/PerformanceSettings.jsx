'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { PerformanceDetector } from '../utils/PerformanceDetector';

export default function PerformanceSettings({ 
  performanceMode, 
  onModeChange
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [performanceAnalysis, setPerformanceAnalysis] = useState(null);
  const [batteryStatus, setBatteryStatus] = useState(null);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  // Get performance analysis when component mounts
  useEffect(() => {
    const analysis = PerformanceDetector.shouldReduceAnimations();
    setPerformanceAnalysis(analysis);

    // Get battery status
    PerformanceDetector.checkBatteryStatus().then(battery => {
      setBatteryStatus(battery);
    });
  }, []);

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && 
          panelRef.current && 
          buttonRef.current &&
          !panelRef.current.contains(event.target) &&
          !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Desktop Settings Button & Panel */}
      <div className="hidden md:block">
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-4 left-4 z-40 w-12 h-12 bg-gray-900/80 backdrop-blur-lg border border-white/20 
                   rounded-full flex items-center justify-center hover:bg-gray-800/80 transition-colors group"
          title="Performance Settings"
        >
          <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        {/* Desktop Settings Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed bottom-20 left-4 z-40 bg-gray-900/90 backdrop-blur-lg border border-white/20 
                       rounded-xl p-4 min-w-[280px] shadow-2xl"
            >
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Performance Settings
              </h3>

              {/* Performance Mode Options */}
              <div className="space-y-2">
                {[
                  { value: 'high', label: 'High Quality', desc: 'Full animations & effects' },
                  { value: 'auto', label: 'Auto (Recommended)', desc: 'Adapts to your device' },
                  { value: 'low', label: 'Performance Mode', desc: 'Reduced animations' }
                ].map((mode) => (
                  <button
                    key={mode.value}
                    onClick={() => onModeChange(mode.value)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      performanceMode === mode.value
                        ? 'bg-blue-500/20 border-blue-400/50 text-blue-100'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-medium text-sm">{mode.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{mode.desc}</div>
                  </button>
                ))}
              </div>

              {/* Enhanced Performance Analysis */}
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-gray-400 space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                  </svg>
                  <span className="font-medium">Performance Analysis</span>
                </div>
                
                {performanceAnalysis && (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span>Performance Score:</span>
                      <span className={`font-medium ${
                        performanceAnalysis.score >= 50 ? 'text-orange-400' : 
                        performanceAnalysis.score >= 25 ? 'text-yellow-400' : 'text-green-400'
                      }`}>
                        {performanceAnalysis.score}/100
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span>Recommended Mode:</span>
                      <span className={`font-medium ${
                        performanceAnalysis.shouldReduce ? 'text-orange-400' : 'text-green-400'
                      }`}>
                        {performanceAnalysis.shouldReduce ? 'Performance' : 'High Quality'}
                      </span>
                    </div>
                    
                    {performanceAnalysis.reasons && performanceAnalysis.reasons.length > 0 && (
                      <div className="mt-2">
                        <div className="text-gray-500 mb-1">Detection Factors:</div>
                        <div className="space-y-1">
                          {performanceAnalysis.reasons.slice(0, 3).map((reason, index) => (
                            <div key={index} className="flex items-center gap-1">
                              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                              <span className="text-gray-400">{reason}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {batteryStatus && (
                  <div className="pt-2 border-t border-white/5">
                    <div className="flex items-center justify-between">
                      <span>Battery Status:</span>
                      <span className={`font-medium ${
                        batteryStatus.shouldReduce ? 'text-orange-400' : 'text-green-400'
                      }`}>
                        {batteryStatus.reason}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="pt-2 border-t border-white/5">
                  <div className="text-gray-500">Settings saved locally in browser</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}