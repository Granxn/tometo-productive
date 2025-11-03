import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import tomatoGif from "@/assets/tomato.gif";

interface WelcomeModalProps {
  onNameSubmit: (name: string) => void;
}

export const WelcomeModal = ({ onNameSubmit }: WelcomeModalProps) => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name.trim());
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="pixel-card max-w-md">
        <DialogHeader className="space-y-3">
          <div className="flex justify-center">
            <img 
              src={tomatoGif} 
              alt="Tomato friend" 
              className="w-20 h-20 hover-float animate-fade-in"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
          <DialogTitle className="text-3xl text-center text-primary animate-fade-in">
            Welcome to Tometo! 🍅
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Your friendly Pomodoro timer companion
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-bold text-foreground">
              What's your name?
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              className="pixel-border text-center text-lg"
              autoFocus
              maxLength={20}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full pixel-button text-base py-6"
            disabled={!name.trim()}
          >
            Let's Start! 🚀
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
