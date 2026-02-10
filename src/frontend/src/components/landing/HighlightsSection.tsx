import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smile, Users, Rocket, Shield } from 'lucide-react';

export function HighlightsSection() {
  const highlights = [
    {
      icon: Smile,
      title: 'Relatable & Real',
      description: 'Flubby represents all of us—imperfect, determined, and always trying. This isn\'t just a token; it\'s a movement of people who refuse to quit.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Built by people who believe in second chances, third attempts, and never-ending effort. Together, we\'re stronger.',
    },
    {
      icon: Rocket,
      title: 'Driven by Purpose',
      description: 'Every step forward is a victory. Flubby reminds us that progress isn\'t about perfection—it\'s about persistence.',
    },
    {
      icon: Shield,
      title: 'Transparent Journey',
      description: 'We\'re building this together, openly and honestly. No false promises, just genuine effort and shared goals.',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display mb-4">
            Why Flubby Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than a meme coin—it's a reminder that trying is winning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card 
                key={index}
                className="border-2 border-border hover:border-primary/30 transition-all hover:shadow-soft bg-card/80 backdrop-blur-sm group"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
