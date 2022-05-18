import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Comics = ({ comics , URL}) => {
  return (
    <>
      {comics.map((comic) => (
        <ComicLink key={comic.id}>
          <Link href={`comics/${comic.id}`} URL={URL}>
            <a>{comic.title}</a>
            {/* <Image src={"http://i.annihil.us/u/prod/marvel/i/mg/6/e0/4bc6a2497684e"} width={300} height={300}/> */}
          </Link>
        </ComicLink>
      ))}
    </>
  );
};

const ComicLink = styled.div``;

export default Comics;
