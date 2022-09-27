import Head from 'next/head';
import styles from '../styles/Home.module.css';

import toast from 'react-hot-toast';

export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success('Hello Toast!')}>Toast Me</button>
    </div>
  );
}
