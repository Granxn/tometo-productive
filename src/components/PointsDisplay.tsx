interface PointsDisplayProps {
  points: number;
  completedSessions: number;
}

export const PointsDisplay = ({ points, completedSessions }: PointsDisplayProps) => {
  return (
    <div className="pixel-card bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="flex justify-around items-center">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary animate-fade-in">{points}</div>
          <div className="text-xs text-muted-foreground mt-1">Points ⭐</div>
        </div>
        <div className="h-12 w-px bg-border" />
        <div className="text-center">
          <div className="text-4xl font-bold text-secondary animate-fade-in">{completedSessions}</div>
          <div className="text-xs text-muted-foreground mt-1">Sessions 🍅</div>
        </div>
      </div>
    </div>
  );
};
