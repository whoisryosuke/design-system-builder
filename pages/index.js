import Head from "next/head";
import DraggableComponent from "../components/DraggableComponent";
import Preview from "../components/Preview";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DraggableComponent />
        <Preview />
      </main>
    </div>
  );
}
