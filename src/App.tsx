import { createSignal, type Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import CardSearchBar from './components/CardSearchBar/CardSearchBar';

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <CardSearchBar></CardSearchBar>
      </header>
    </div>
  );
};

export default App;
