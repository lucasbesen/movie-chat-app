// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import type { RouteComponentProps } from 'react-router-dom';

import { CommentForm, Message } from './';

import type { Comment } from '../utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;

const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: #2196f3;
`;

const Body = styled.div`
  background-color: #f2f2f2;
  padding: 15px;
  overflow: auto;
  height: 300px;
`;

const Title = styled.p`
  color: #fff;
  margin-left: 10px;
`;

const StyledButton = styled(Button).attrs({ style: () => ({ color: '#fff' }) })``;

type Props = {
  comments: Comment[],
  addComment: () => void,
} & RouteComponentProps;

const Chat = ({ addComment, history, comments, match: { params } }: Props) => (
  <Wrapper>
    <Header>
      <StyledButton onClick={() => history.push('/')}>
        <Icon>arrow_back</Icon>
      </StyledButton>
      <Title>{`${params.movieId} Comments`}</Title>
    </Header>
    <Body>
      {comments.map((comment, index) => (
        <Message key={index} message={comment.message} />
      ))}
    </Body>
    <CommentForm onSubmit={addComment} />
  </Wrapper>
);

export default withRouter(Chat);
