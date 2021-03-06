import { useQuery } from "react-query";
import { getMarvelData } from "../api/marvelApi";
import Comics from "../comics";

export async function getStaticProps() {
  const marvelData = await getMarvelData();
  return {
    props: {
      marvelData,
    },
  };
}
const HomePage = () => {
  const { data, status } = useQuery(["comics"], getMarvelData);
  console.log("marvel data", data, " status: ", status);
  const comics = data?.data.results;
  console.log("comics ", data?.data.results);
  return (
    <>
      {status === "loading" && <div>Loading</div>}
      {status === "error" && <div>Loading</div>}
      {status === "success" && <Comics comics={comics} URL={URL} />}
    </>
  );
};

export default HomePage;
