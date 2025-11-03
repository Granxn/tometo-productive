export const InfoSection = () => {
  return (
    <div className="pixel-card space-y-4">
      <h2 className="text-2xl font-bold text-primary">What is Tometo? 🍅</h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        <p>
          <strong className="text-foreground">Tometo</strong> is designed to help you focus on any task you are working on, 
          such as study, writing, or coding.
        </p>
        <p>
          This app is inspired by the <strong className="text-foreground">Pomodoro Technique</strong>, 
          a time management method developed by Francesco Cirillo.
        </p>
        <div className="bg-accent/20 p-4 rounded-md pixel-border mt-4">
          <p className="text-accent-foreground font-bold mb-2">How it works:</p>
          <ul className="list-disc list-inside space-y-1 text-accent-foreground">
            <li>Work for 25 minutes (1 Pomodoro)</li>
            <li>Take a 5-minute short break</li>
            <li>After 4 Pomodoros, take a 15-minute long break</li>
            <li>Complete tasks and earn points! ⭐</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
