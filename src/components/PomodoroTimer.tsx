import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type TimerMode = "pomodoro" | "shortBreak" | "longBreak" | "test";

interface PomodoroTimerProps {
  onComplete: () => void;
}

export const PomodoroTimer = ({ onComplete }: PomodoroTimerProps) => {
  const [mode, setMode] = useState<TimerMode>("pomodoro");
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  const timerModes = {
    test: 1 * 60, // 1 minute for testing
    pomodoro: 25 * 60, // 25 minutes
    shortBreak: 5 * 60, // 5 minutes
    longBreak: 15 * 60, // 15 minutes
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onComplete]);

  const handleModeChange = (newMode: TimerMode) => {
    setMode(newMode);
    setTimeLeft(timerModes[newMode]);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTimeLeft(timerModes[mode]);
    setIsRunning(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = ((timerModes[mode] - timeLeft) / timerModes[mode]) * 100;

  return (
    <div className="pixel-card space-y-6">
      <div className="flex justify-center gap-2 flex-wrap">
        <Button
          onClick={() => handleModeChange("pomodoro")}
          variant={mode === "pomodoro" ? "default" : "outline"}
          className="pixel-button text-xs"
        >
          Pomodoro
        </Button>
        <Button
          onClick={() => handleModeChange("shortBreak")}
          variant={mode === "shortBreak" ? "default" : "outline"}
          className="pixel-button text-xs"
        >
          Short Break
        </Button>
        <Button
          onClick={() => handleModeChange("longBreak")}
          variant={mode === "longBreak" ? "default" : "outline"}
          className="pixel-button text-xs"
        >
          Long Break
        </Button>
      </div>

      <div className="text-center space-y-4">
        <div className="text-7xl font-bold text-primary tabular-nums animate-fade-in">
          {formatTime(timeLeft)}
        </div>
        
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden pixel-border">
          <div
            className="h-full bg-primary transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex gap-3 justify-center">
          <Button
            onClick={toggleTimer}
            size="lg"
            className="pixel-button"
          >
            {isRunning ? "PAUSE" : "START"}
          </Button>
          <Button
            onClick={resetTimer}
            variant="outline"
            size="lg"
            className="pixel-button"
          >
            RESET
          </Button>
        </div>
      </div>

      {timeLeft === 0 && (
        <div className="text-center text-xl text-primary font-bold animate-fade-in">
          🎉 Time's up! Great work!
        </div>
      )}
    </div>
  );
};
