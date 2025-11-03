import { useEffect, useState } from "react";
import tomatoGif from "@/assets/tomato.gif";

export const LoadingScreen = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-card to-accent/20 animate-fade-in">
      <div className="text-center space-y-6 animate-scale-in">
        <div className="relative">
          <div className="absolute inset-0 animate-ping opacity-20">
            <img
              src={tomatoGif}
              alt="Loading"
              className="w-32 h-32 mx-auto"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
          <img
            src={tomatoGif}
            alt="Loading"
            className="w-32 h-32 mx-auto relative z-10 hover-float"
            style={{ imageRendering: 'pixelated', animation: 'pulse-glow 2s ease-in-out infinite' }}
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-primary">Tometo</h2>
          <p className="text-lg text-muted-foreground">Loading{dots}</p>
        </div>
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};
