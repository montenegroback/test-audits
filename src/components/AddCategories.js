import { useContext, useState } from 'react';
import { CategoryContext } from '../contexts/CategoryContext';
import {
  Fab,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

const AddCategories = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const { categories, setCategories } = useContext(CategoryContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const addCategory = () => {
    if (!category) return false;
    setCategories([
      ...categories,
      ...[
        {
          id: Math.floor(Math.random() * 10000),
          text: category,
        },
      ],
    ]);

    setCategory('');
  };

  return (
    <>
      <div>
        <Dialog
          maxWidth={'sm'}
          fullWidth={true}
          open={open}
          onClose={handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Añadir categoria</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <TextField
              value={category}
              onChange={onChangeCategory}
              autoFocus
              margin="dense"
              id="name"
              label="Nombre categoria"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="default">
              Cancelar
            </Button>
            <Button onClick={addCategory} color="primary">
              Añadir
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Fab
        className="button-fab"
        color="secondary"
        aria-label="add"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      {/* <hr />

      <pre>{JSON.stringify(categories, true, 3)}</pre> */}
    </>
  );
};

export default AddCategories;
