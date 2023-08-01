import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Layout>
      <Head>
        <title>{`DEV STATION - ${pathname === '/' ? " HOME " : pathname.toUpperCase().split("/").join("") } `}</title>
        <meta
          name="description"
          content="Join our community to get the latest updates and news about our projects and events."
        />
      </Head>
      
      <Component {...pageProps} />
    </Layout>
  );
}
