import Link from "next/link";
import styled from "styled-components";

const Comics = ({ comics , URL}) => {
  return (
    <>
      {comics.map((comic) => (
        <ComicLink key={comic.id}>
          <Link href={`comics/${comic.id}`} URL={URL}>
            <a>{comic.title}</a>
          </Link>
        </ComicLink>
      ))}
    </>
  );
};

const ComicLink = styled.div``;

export default Comics;
