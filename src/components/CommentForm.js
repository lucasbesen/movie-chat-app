// @flow
import React from 'react';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button/index';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon/index';

const StyledTextField = styled(TextField)`
  width: 466px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

type Props = {
  handleSubmit: () => void,
};

const CommentForm = ({ handleSubmit }: Props) => (
  <form onSubmit={handleSubmit}>
    <Wrapper>
      <Field name="comment" component={StyledTextField} label="Comment" />
      <Button type="submit" color="secondary">
        <Icon>send</Icon>
      </Button>
    </Wrapper>
  </form>
);

const enhance = compose(
  reduxForm({
    form: 'newComment',
    onSubmitSuccess: (result, dispatch, props) => props.reset(),
  }),
);

export default enhance(CommentForm);
