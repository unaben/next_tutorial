import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>Contact List | Home</title>
      <meta name="keywords" content="contacts" />
    </Head>
    <div>
      <h1 className={styles.title}>Welcome to Home Page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ex
        quis eaque, beatae praesentium dolore blanditiis delectus ipsa natus
        facilis magni nostrum accusamus itaque qui molestias minima perferendis
        aspernatur, nisi autem earum porro? Quae, vero accusantium esse aperiam
        facere dolorem beatae dolorum aspernatur.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, ex
        quis eaque, beatae praesentium dolore blanditiis delectus ipsa natus
        facilis magni nostrum accusamus itaque qui molestias minima perferendis
        aspernatur, nisi autem earum porro? Quae, vero accusantium esse aperiam
        facere dolorem beatae dolorum aspernatur.
      </p>
      <Link href="/contacts">
        <a className={styles.btn}>View all contacts</a>
      </Link>
    </div>
    </>
  );
}
