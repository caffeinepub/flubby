import { LandingLayout } from './LandingLayout';
import { HeroSection } from './HeroSection';
import { ManifestoSection } from './ManifestoSection';
import { AtAGlanceSection } from './AtAGlanceSection';
import { HighlightsSection } from './HighlightsSection';
import { FlubbyGallerySection } from './FlubbyGallerySection';
import { ClosingCTASection } from './ClosingCTASection';

export function LandingPage() {
  return (
    <LandingLayout>
      <HeroSection />
      <ManifestoSection />
      <AtAGlanceSection />
      <HighlightsSection />
      <FlubbyGallerySection />
      <ClosingCTASection />
    </LandingLayout>
  );
}
