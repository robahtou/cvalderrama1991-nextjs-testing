import Image from 'next/image';
import Sprite from '../components/Sprite';

export default function Home() {
  return (
    <main>
      <p>Website Dev mode is working.</p>
      <Sprite name="trash" />
    </main>
  );
}
