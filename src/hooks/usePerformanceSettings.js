// Performance Settings Manager
'use client';
import { useState, useEffect } from 'react';
import { PerformanceDetector } from '../utils/PerformanceDetector';

export function usePerformanceSettings() {
  const [performanceMode, setPerformanceMode] = useState('auto');
  const [shouldReduceAnimations, setShouldReduceAnimations] = useState(false);

  useEffect(() => {
    // Load saved preference first
    const saved = localStorage.getItem('portfolio-performance-mode');
    if (saved) {
      setPerformanceMode(saved);
    }

    // Enhanced performance detection
    const performanceCheck = PerformanceDetector.shouldReduceAnimations();
    
    // Handle both boolean (old) and object (new) return types
    const shouldReduce = typeof performanceCheck === 'boolean' 
      ? performanceCheck 
      : performanceCheck?.shouldReduce || false;
    
    setShouldReduceAnimations(shouldReduce);

    // Also check battery status asynchronously
    PerformanceDetector.checkBatteryStatus().then(batteryResult => {
      if (batteryResult.shouldReduce && performanceMode === 'auto') {
        setShouldReduceAnimations(true);
      }
    });

    // Log performance analysis (helpful for debugging)
    if (process.env.NODE_ENV === 'development') {
      console.log('🎯 Performance Analysis:', {
        score: performanceCheck.score,
        shouldReduce: performanceCheck.shouldReduce,
        reasons: performanceCheck.reasons,
        mode: performanceMode
      });
    }
  }, []);

  const updatePerformanceMode = (mode) => {
    setPerformanceMode(mode);
    localStorage.setItem('portfolio-performance-mode', mode);
    
    // Update animation state based on mode (no FPS dependency to prevent loops)
    switch (mode) {
      case 'high':
        setShouldReduceAnimations(false);
        break;
      case 'low':
        setShouldReduceAnimations(true);
        break;
      case 'auto':
      default: {
        const result = PerformanceDetector.shouldReduceAnimations();
        const shouldReduce = typeof result === 'boolean' 
          ? result 
          : result?.shouldReduce || false;
        setShouldReduceAnimations(shouldReduce);
        break;
      }
    }
  };

  const getGalaxySettings = () => {
    switch (performanceMode) {
      case 'high':
        return {
          density: 0.9,
          glowIntensity: 0.2,
          twinkleIntensity: 0.9,
          mouseInteraction: true,
          enabled: true
        };
      case 'low':
        return {
          density: 0.3,
          glowIntensity: 0.1,
          twinkleIntensity: 0.3,
          mouseInteraction: false,
          enabled: false // Use static background instead
        };
      case 'auto':
      default:
        if (shouldReduceAnimations) {
          return {
            density: 0.4,
            glowIntensity: 0.1,
            twinkleIntensity: 0.4,
            mouseInteraction: false,
            enabled: true
          };
        }
        return {
          density: 0.9,
          glowIntensity: 0.2,
          twinkleIntensity: 0.9,
          mouseInteraction: true,
          enabled: true
        };
    }
  };

  return {
    performanceMode,
    shouldReduceAnimations,
    updatePerformanceMode,
    getGalaxySettings
  };
}

export default usePerformanceSettings;