import { Card, CardContent } from '@/components/ui/card';

const galleryItems = [
  {
    image: '/assets/generated/flubby-gallery-01.dim_1200x1200.png',
    caption: 'Stay determined, even when the path ahead seems unclear',
    alt: 'Flubby looking determined with a warm uplifting background'
  },
  {
    image: '/assets/generated/flubby-gallery-02.dim_1200x1200.png',
    caption: 'It\'s okay to feel tired, but never stop believing',
    alt: 'Flubby looking tired but still trying with cozy emotional lighting'
  },
  {
    image: '/assets/generated/flubby-gallery-03.dim_1200x1200.png',
    caption: 'Every stumble is just another chance to rise',
    alt: 'Flubby getting back up after a stumble with hopeful mood'
  },
  {
    image: '/assets/generated/flubby-gallery-04.dim_1200x1200.png',
    caption: 'Celebrate every small victory along the way',
    alt: 'Flubby cheering a small win with celebratory but gentle tone'
  },
  {
    image: '/assets/generated/flubby-gallery-05.dim_1200x1200.png',
    caption: 'Practice makes progress, not perfection',
    alt: 'Flubby quietly practicing again with calm focused vibe'
  },
  {
    image: '/assets/generated/flubby-gallery-06.dim_1200x1200.png',
    caption: 'Together, we\'re stronger than we are alone',
    alt: 'Flubby with a supportive community vibe, warm and friendly'
  }
];

export function FlubbyGallerySection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-display text-3xl md:text-5xl">
            Flubby Gallery
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Moments that remind us to keep going, no matter what
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-glow group"
            >
              <div className="aspect-square overflow-hidden bg-muted/30">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-center text-base md:text-lg text-muted-foreground italic">
                  "{item.caption}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
