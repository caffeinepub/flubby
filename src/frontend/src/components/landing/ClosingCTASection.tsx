import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Heart } from 'lucide-react';
import { SiX } from 'react-icons/si';

export function ClosingCTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <Card className="border-2 border-primary/30 shadow-glow bg-gradient-to-br from-card via-card to-primary/5 overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          
          <CardContent className="relative p-8 md:p-16 text-center space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Heart className="w-8 h-8 text-primary fill-primary" />
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl">
              Join Flubby's Journey
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              You are Flubby. We are all Flubby. Together, we keep trying, keep pushing, 
              and keep believing that tomorrow can be better than today.
            </p>

            <div className="pt-4">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2 italic">
                Never give up. Keep trying.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-xl shadow-glow hover:shadow-glow hover:scale-105 transition-all"
                disabled
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 rounded-xl hover:bg-accent/50 transition-all"
                asChild
              >
                <a 
                  href="https://x.com/ar94595" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <SiX className="w-5 h-5 mr-2" />
                  Join Community on X
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              Launch details coming soon. Follow our journey and be part of something special.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
