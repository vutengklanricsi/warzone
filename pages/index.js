import Layout from "../components/Layout";

export async function getStaticProps () {
  const res = await fetch("")
}


export default function Home() {
  return (
    <>
      <Layout>
        <div>Warzone</div>
      </Layout>
    </>
  );
}
