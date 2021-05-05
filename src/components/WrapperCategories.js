import Nestable from 'react-nestable';
import { useContext } from 'react';
import { CategoryContext } from '../contexts/CategoryContext';
import AddCategories from './AddCategories';
import ButtonDelete from './utils/ButtonDelete';
import ButtonEdit from './utils/ButtonEdit';

const WrapperCategories = () => {
  const { categories, setCategories } = useContext(CategoryContext);

  const editCategory = ({ item, index }) => {
    console.log(item);
  };

  const deleteCategory = ({ item, index }) => {
    let ctgs = categories.filter(({ id }) => id !== item.id);
    setCategories([...ctgs]);
  };

  return (
    <>
      <Nestable
        collapsed={true}
        items={categories}
        onChange={setCategories}
        renderItem={({ item, index, collapseIcon }) => (
          <div className="listMenus">
            {collapseIcon}
            <span style={{ marginRight: '20px' }}>{item.text}</span>

            <>
              <ButtonEdit onClick={() => editCategory({ item, index })} />

              <ButtonDelete onClick={() => deleteCategory({ item, index })} />
            </>
          </div>
        )}
      />
      <AddCategories />
    </>
  );
};

export default WrapperCategories;
