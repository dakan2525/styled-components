import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Account from "../Account";
import List from "../List";



const StyledConteiner = styled.div`
  background-color: ${({theme}) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;`

  const StyledContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
}
`


const Container = () => {
  return (
    <StyledConteiner >
      <Title>Smart Bank</Title>
      <StyledContent >
        <Account />
        <List />
      </StyledContent>
    </StyledConteiner>
  );
};

export default Container;
