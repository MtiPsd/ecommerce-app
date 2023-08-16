import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Link href={'/about'}>Navigate</Link>
      <h1>Hello Next js</h1>
    </main>
  );
}
