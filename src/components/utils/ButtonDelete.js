import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const ButtonDelete = ({ onClick }) => (
  <IconButton aria-label="delete" onClick={onClick}>
    <DeleteIcon />
  </IconButton>
);

export default ButtonDelete;
