import Layout from "../components/Layout";
import md5 from "js-md5";

export async function getStaticProps() {
  const PUBLIC_KEY = "311904dd1a93f6ea318a721f8907dfec";
  const PRIVATE_KEY = "73ae2c3e508dae9ef31e958e55c0c718d52aa714";
  const ts = Number(new Date()).toString();
  
  md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  const hash = md5.create()
  hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
  hash.hex();

  const URL = `https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  const res = await fetch(URL);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <Layout>
        <div>Marvel</div>
      </Layout>
    </>
  );
}
