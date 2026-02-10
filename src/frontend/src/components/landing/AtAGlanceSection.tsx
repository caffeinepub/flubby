import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coins, Network, FileText, Users } from 'lucide-react';

export function AtAGlanceSection() {
  const facts = [
    {
      icon: Coins,
      label: 'Token Name',
      value: 'Flubby',
      confirmed: true,
    },
    {
      icon: FileText,
      label: 'Ticker',
      value: '$FLUB',
      confirmed: true,
    },
    {
      icon: Network,
      label: 'Blockchain',
      value: 'TBA',
      confirmed: false,
    },
    {
      icon: Users,
      label: 'Total Supply',
      value: 'TBA',
      confirmed: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display mb-4">
            FLUB at a Glance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The essentials about Flubby and the $FLUB token
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-primary/30 transition-all hover:shadow-soft bg-card/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-sm text-muted-foreground font-medium">
                    {fact.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-2xl font-bold ${fact.confirmed ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {fact.value}
                  </p>
                  {!fact.confirmed && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Details coming soon
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            More details about tokenomics, contract address, and launch information will be announced soon. 
            Stay tuned for updates!
          </p>
        </div>
      </div>
    </section>
  );
}
