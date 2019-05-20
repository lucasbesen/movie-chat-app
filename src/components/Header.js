import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  background-color: #2196F3;
  height: 100px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14);
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
`;

const Text = styled.p`
  color: #fff;
  font-size: 20px;
`;

const Header = () => (
  <Wrapper>
    <Text>Turtle.AI</Text>
    <Text>Movie Chat</Text>
    <Text>Made by @lucasbesen</Text>
  </Wrapper>
);

export default Header;
