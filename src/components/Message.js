import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #3F51B5;
  background-color: #3F51B5;
  border-radius: 15px;
  margin-right: 15px;
`;

const Text = styled.div`
  color: #fff;
  background-color: #3F51B5;
  word-break: break-word;
  max-width: 500px;
  padding: 8px;
`;

const Message = ({ message }) => (
  <Wrapper>
    <Avatar />
    <Text>{message}</Text>
  </Wrapper>
);

export default Message;
