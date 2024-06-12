import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import css from "../styles/Home.module.css"
export default function Home() {
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>FUDO</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        {/* body */}
        <main>
          <Hero/>
        </main>
      </div>
    </Layout>
  );
}
