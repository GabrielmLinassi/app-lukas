import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Bem vindo a programação, Lukas!</h1>
      <span>
        Me adicione no{" "}
        <a
          className={styles.link}
          href="https://www.facebook.com/lucas.parnowlamb.7"
        >
          Facebook
        </a>
      </span>
    </div>
  );
}
