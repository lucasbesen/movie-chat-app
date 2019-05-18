import React from 'react'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import CommentForm from "../form/CommentForm";
import Message from '../components/Message';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  border: 1px solid #F2F2F2;
`;

const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: #3F51B5;
`;

const Body = styled.div`
  background-color: #F2F2F2;
  padding: 15px;
  overflow: auto;
  height: 300px;
`;

const Title = styled.p`
  color: #fff;
`;

const StyledButton = styled(Button).attrs({ style: () => ({ color: '#fff' }) })``;

const Chat = ({ addComment, history, movie }) => {
  return (
    <Wrapper>
      <Header>
        <StyledButton onClick={() => history.push('/')}>
          <Icon>arrow_back</Icon>
        </StyledButton>
        <Title>{`${movie.title} Comments`}</Title>
      </Header>
      <Body>
        {movie.comments.map(comment => (<Message message={comment} />))}
      </Body>
      <CommentForm onSubmit={addComment}/>
    </Wrapper>
  )
};

export default withRouter(Chat);
