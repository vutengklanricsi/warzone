import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Logo>MARVEL</Logo>
      <header>This is the Header</header>
    </>
  );
};

const Logo = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-weight: 200px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  border: 3.2px solid black;
  width: 101px;
  background-color: red;
`;

export default Header;
