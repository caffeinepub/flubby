import { Card, CardContent } from '@/components/ui/card';
import { Heart, Target, Zap } from 'lucide-react';

export function ManifestoSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display mb-4">
              Flubby's Story
            </h2>
            <p className="text-xl text-muted-foreground">
              A tale of perseverance, heart, and never giving up
            </p>
          </div>

          <Card className="border-2 border-primary/20 shadow-soft bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
              <p className="text-foreground/90">
                Every morning, Flubby wakes up with a mission: to try his best. 
                It doesn't matter if yesterday was tough, or if the odds seem impossible. 
                What matters is showing up, one more time.
              </p>

              <p className="text-foreground/90">
                Flubby isn't the fastest. He isn't the strongest. He doesn't have all the answers. 
                But what he does have is something far more powerful—<strong className="text-primary">the courage to keep trying</strong>.
              </p>

              <p className="text-foreground/90">
                In this world, we're all a little bit like Flubby. We face challenges that seem too big. 
                We stumble. We doubt ourselves. But deep down, we know that giving up isn't an option. 
                Because every attempt, every effort, every moment we choose to keep going—that's what makes us heroes.
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Heart</h3>
                  <p className="text-sm text-muted-foreground">
                    Flubby leads with compassion and never loses hope
                  </p>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-bold text-lg">Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    One step at a time, one day at a time
                  </p>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary/30 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg">Resilience</h3>
                  <p className="text-sm text-muted-foreground">
                    Getting back up is what defines us
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <p className="text-2xl font-bold text-center text-primary italic">
                  "Never give up. Keep trying."
                </p>
                <p className="text-center text-muted-foreground mt-2">— Flubby's Motto</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
