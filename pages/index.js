import Head from "next/head";
import DraggableComponent from "../components/DraggableComponent";
import { ComponentsProvider } from "../contexts/ComponentsContext";
import Preview from "../components/Preview";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ComponentsProvider>
        <main className={styles.main}>
          <DraggableComponent />
          <Preview />
        </main>
      </ComponentsProvider>
    </div>
  );
}
