import { type ReactNode } from 'react';
import { Heart } from 'lucide-react';

interface LandingLayoutProps {
  children: ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'flubby-app';

  return (
    <div className="relative min-h-screen">
      {/* Subtle background pattern */}
      <div 
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/generated/flubby-pattern.dim_2048x2048.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 bg-card/50 backdrop-blur-sm mt-24">
        <div className="container py-8">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Flubby. Keep trying, never give up.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
