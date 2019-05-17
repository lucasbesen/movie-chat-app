import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const CommentsDialog = ({ comments, isDialogOpen, onClose }) => (
  <Dialog
    open={isDialogOpen}
    onClose={onClose}
  >
      {comments.map(comment => (
        <p>{comment}</p>
      ))}
    <Button onClick={onClose} color="primary">
      Cancel
    </Button>
  </Dialog>
);

export default CommentsDialog;
