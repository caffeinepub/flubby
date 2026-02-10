import { Button } from '@/components/ui/button';
import { Sparkles, TrendingUp } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-background to-background" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-24 lg:py-32">
          {/* Text content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4" />
              <span>Introducing Flubby</span>
            </div>
            
            <h1 className="font-display text-balance">
              Meet Flubby
              <span className="block text-primary mt-2">Trying His Best</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-balance">
              In a world that never stops, Flubby keeps going. Sometimes he stumbles, 
              sometimes he falls, but he always gets back up. Because that's what heroes do.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-xl shadow-glow hover:shadow-glow hover:scale-105 transition-all"
                disabled
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Coming Soon
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 rounded-xl hover:bg-accent/50 transition-all"
                disabled
              >
                Learn More
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">Ticker Symbol</p>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-card border-2 border-primary/30 shadow-soft">
                <span className="text-3xl font-bold text-primary">$FLUB</span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft animate-float">
              <img
                src="/assets/generated/flubby-hero.dim_1600x900.png"
                alt="Flubby character - a determined mascot trying his best"
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative stickers */}
            <div className="absolute -bottom-8 -left-8 w-48 opacity-90 hidden md:block animate-pulse-soft">
              <img
                src="/assets/generated/flubby-stickers-set.dim_1200x400.png"
                alt=""
                className="w-full h-auto"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
