// Performance utilities for detecting battery/performance mode
'use client';

export const PerformanceDetector = {
  // Comprehensive performance detection
  shouldReduceAnimations: () => {
    if (typeof window === 'undefined') return false;
    
    let performanceScore = 0;
    const reasons = [];

    // 1. User preference for reduced motion (highest priority)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      reasons.push('User prefers reduced motion');
      return { shouldReduce: true, reasons, score: 100 };
    }

    // 2. Mobile device detection (likely lower performance)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      performanceScore += 25;
      reasons.push('Mobile device detected');
    }

    // 3. Hardware limitations
    const cores = navigator.hardwareConcurrency || 4;
    if (cores < 4) {
      performanceScore += 30;
      reasons.push(`Low CPU cores: ${cores}`);
    } else if (cores < 8) {
      performanceScore += 15;
      reasons.push(`Moderate CPU cores: ${cores}`);
    }

    // 4. Memory constraints
    if ('deviceMemory' in navigator) {
      const memory = navigator.deviceMemory;
      if (memory < 2) {
        performanceScore += 35;
        reasons.push(`Very low memory: ${memory}GB`);
      } else if (memory < 4) {
        performanceScore += 20;
        reasons.push(`Low memory: ${memory}GB`);
      } else if (memory < 8) {
        performanceScore += 10;
        reasons.push(`Moderate memory: ${memory}GB`);
      }
    }

    // 5. WebGL capability check
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        performanceScore += 50;
        reasons.push('No WebGL support');
      } else {
        const renderer = gl.getParameter(gl.RENDERER);
        const vendor = gl.getParameter(gl.VENDOR);
        
        // Check for software rendering (very slow)
        if (renderer.toLowerCase().includes('software') || 
            renderer.toLowerCase().includes('llvmpipe') ||
            vendor.toLowerCase().includes('microsoft basic')) {
          performanceScore += 40;
          reasons.push('Software rendering detected');
        }
        
        // Check for integrated graphics (slower)
        if (renderer.toLowerCase().includes('intel') && !renderer.toLowerCase().includes('arc')) {
          performanceScore += 15;
          reasons.push('Integrated graphics detected');
        }
      }
    } catch (e) {
      performanceScore += 30;
      reasons.push('WebGL detection failed');
    }

    // 6. Connection quality (affects resource loading)
    if ('connection' in navigator) {
      const connection = navigator.connection;
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        performanceScore += 20;
        reasons.push('Slow network connection');
      } else if (connection.effectiveType === '3g') {
        performanceScore += 10;
        reasons.push('Moderate network connection');
      }
    }

    const shouldReduce = performanceScore >= 50;
    return { shouldReduce, reasons, score: performanceScore };
  },

  // Async battery check (since it returns a promise)
  checkBatteryStatus: async () => {
    if (typeof window === 'undefined' || !('getBattery' in navigator)) {
      return { shouldReduce: false, reason: 'Battery API not available' };
    }

    try {
      const battery = await navigator.getBattery();
      const isLowBattery = battery.level < 0.2;
      const isCharging = battery.charging;
      
      if (isLowBattery && !isCharging) {
        return { shouldReduce: true, reason: `Low battery: ${Math.round(battery.level * 100)}%` };
      }
      
      return { 
        shouldReduce: false, 
        reason: `Battery OK: ${Math.round(battery.level * 100)}% (${isCharging ? 'charging' : 'not charging'})` 
      };
    } catch (error) {
      return { shouldReduce: false, reason: 'Battery check failed' };
    }
  },

  // Performance monitoring
  monitorFPS: (callback) => {
    if (typeof window === 'undefined') return;
    
    let frames = 0;
    let lastTime = performance.now();
    
    const measure = () => {
      frames++;
      const now = performance.now();
      
      if (now - lastTime >= 1000) {
        const fps = Math.round((frames * 1000) / (now - lastTime));
        callback(fps);
        frames = 0;
        lastTime = now;
      }
      
      requestAnimationFrame(measure);
    };
    
    requestAnimationFrame(measure);
  }
};

export default PerformanceDetector;