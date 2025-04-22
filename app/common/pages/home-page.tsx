import type { Button } from "~/common/components/ui/button";


export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
      <p className="text-lg mb-8">
        Welcome to WeMake, your platform for creating amazing things.
      </p>
      <div className="flex gap-4">
        <button className="default">Get Started</button>
        <button className="outline">Learn More</button>
      </div>
    </main>
  );
}
