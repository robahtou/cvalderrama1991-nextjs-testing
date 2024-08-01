import Sprite from '../components/Sprite';

export default function Home() {
  return (
    <main>
      <p>Website Dev mode is working.</p>
      <Sprite name="plus" style={{ stroke: 'var(--primary)', color: 'var(--background)' }} />
      <Sprite name="trash" style={{ stroke: 'var(--primary)', color: 'var(--background)' }} />
    </main>
  );
}
