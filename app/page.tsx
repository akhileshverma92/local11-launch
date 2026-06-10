import { Hero } from '@/components/hero';
import { Stats } from '@/components/stats';
import { Features } from '@/components/features';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Stats />
      <Features />
      <Footer />
    </main>
  );
}
