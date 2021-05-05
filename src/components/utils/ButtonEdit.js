import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const ButtonEdit = ({ onClick }) => (
  <IconButton aria-label="edit" onClick={onClick}>
    <EditIcon />
  </IconButton>
);

export default ButtonEdit;
