import Crossword from '../components/Crossword';
import { crosswordData } from '../data/crosswordData';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Easter Tamang</h1>
      <Crossword data={crosswordData} />
    </main>
  );
}

