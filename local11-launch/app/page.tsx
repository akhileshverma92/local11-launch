import { Hero } from '@/components/hero';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-5xl">
        <Hero />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
