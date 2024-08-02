import Icon from '../components/Sprite';
import CounterComponent from '@/components/CounterComponent';
import styles from './styles.module.css';

console.log(styles)

export default async function Home() {
  return (
    <main>
      <p>Website Dev mode is working.</p>
      <Icon name="arrow-right" />

      <div style={{ display: "flex", alignItems: "center", marginBlock: "20px" }}>
        <Icon name="bars" className={styles['bars']} />
        <span style={{ 'marginInlineStart': '50px' }}>
          using inline style will override the pseudo class (will not hover)
        </span>
      </div>

      <Icon name="circle-phone" />

      <Icon name="trash" />
      <Icon name="plus" />

      <CounterComponent />

    </main>
  );
}
