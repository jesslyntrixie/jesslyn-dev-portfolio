 'use client';
import { useMemo } from 'react';
import Galaxy from './Galaxy';
import PerformanceSettings from '../../components/PerformanceSettings';
import { usePerformanceSettings } from '../../hooks/usePerformanceSettings';

export default function PerformanceAwareBackground() {
  const {
    performanceMode,
    updatePerformanceMode,
    getGalaxySettings
  } = usePerformanceSettings();

  // Memoize galaxy settings to prevent unnecessary re-renders
  const galaxySettings = useMemo(() => getGalaxySettings(), [performanceMode]);

  return (
    <>
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        {galaxySettings.enabled ? (
          <Galaxy 
            mouseInteraction={galaxySettings.mouseInteraction}
            transparent={true}
            density={galaxySettings.density}
            glowIntensity={galaxySettings.glowIntensity}
            twinkleIntensity={galaxySettings.twinkleIntensity}
            hueShift={220}
          />
        ) : (
          // Static galaxy background for low performance mode
          <div className="w-full h-full relative overflow-hidden">
            {/* Base black background */}
            <div className="absolute inset-0 bg-black" />
            
            {/* Static starfield using CSS */}
            <div 
              className="absolute inset-0 opacity-80"
              style={{
                backgroundImage: `
                  radial-gradient(2px 2px at 20px 30px, #eee, transparent),
                  radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
                  radial-gradient(1px 1px at 90px 40px, #fff, transparent),
                  radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
                  radial-gradient(2px 2px at 160px 30px, #eee, transparent),
                  radial-gradient(1px 1px at 200px 100px, rgba(255,255,255,0.7), transparent),
                  radial-gradient(2px 2px at 240px 50px, #fff, transparent),
                  radial-gradient(1px 1px at 280px 90px, rgba(255,255,255,0.5), transparent),
                  radial-gradient(1px 1px at 320px 20px, #eee, transparent),
                  radial-gradient(2px 2px at 360px 110px, rgba(255,255,255,0.8), transparent),
                  radial-gradient(1px 1px at 400px 60px, #fff, transparent),
                  radial-gradient(1px 1px at 440px 40px, rgba(255,255,255,0.6), transparent),
                  radial-gradient(2px 2px at 480px 120px, #eee, transparent),
                  radial-gradient(1px 1px at 520px 80px, rgba(255,255,255,0.7), transparent)
                `,
                backgroundRepeat: 'repeat',
                backgroundSize: '550px 350px'
              }}
            />
            
            {/* Purple/blue nebula effect */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                background: `
                  radial-gradient(ellipse 800px 600px at 30% 20%, rgba(139, 92, 246, 0.3), transparent),
                  radial-gradient(ellipse 600px 400px at 70% 80%, rgba(59, 130, 246, 0.2), transparent),
                  radial-gradient(ellipse 400px 300px at 90% 40%, rgba(168, 85, 247, 0.25), transparent)
                `
              }}
            />
            
            {/* Subtle cosmic dust */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  radial-gradient(0.5px 0.5px at 15px 25px, rgba(255,255,255,0.3), transparent),
                  radial-gradient(0.5px 0.5px at 45px 65px, rgba(255,255,255,0.2), transparent),
                  radial-gradient(0.5px 0.5px at 75px 35px, rgba(255,255,255,0.4), transparent),
                  radial-gradient(0.5px 0.5px at 105px 85px, rgba(255,255,255,0.2), transparent),
                  radial-gradient(0.5px 0.5px at 135px 55px, rgba(255,255,255,0.3), transparent)
                `,
                backgroundRepeat: 'repeat',
                backgroundSize: '150px 100px'
              }}
            />
          </div>
        )}
      </div>

      {/* Performance Settings UI */}
      <PerformanceSettings
        performanceMode={performanceMode}
        onModeChange={updatePerformanceMode}
      />
    </>
  );
}