import Layout from "../components/Layout";
import { PUBLIC_KEY, PRIVATE_KEY } from "../apiKeys";
import md5 from "js-md5";
import { useQuery } from "react-query";
import styled from "styled-components";

const getMarvelData = async (queryKey) => {
  const comics = queryKey;
  const ts = Number(new Date()).toString();
  md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  const hash = md5.create();
  hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
  hash.hex();

  try {
    const URL = `https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export async function getStaticProps() {
  const marvelData = await getMarvelData();
  return {
    props: {
      marvelData,
    },
  };
}

export default function Home({ marvelData }) {
  const { data, status } = useQuery(["comics"], getMarvelData);
  console.log("marvel data", marvelData);
  console.log(status);
  return (
    <>
      <Layout>
        {status === "loading" && <div>Loading</div>}
        {status === "error" && <div>Loading</div>}
        {status === "success" && <div>{data.copyright}</div>}
        <Logo>MARVEL</Logo>
      </Layout>
    </>
  );
}

const Logo = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-weight: 200px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: 3.2px solid black;
  width: 101px;
  background-color: red;
`;
