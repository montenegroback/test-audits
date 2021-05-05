import { useState } from 'react';
import WrapperCategories from './components/WrapperCategories';
import { CategoryContext } from './contexts/CategoryContext';
import Container from '@material-ui/core/Container';

function App() {
  const [categories, setCategories] = useState([]);

  return (
    <Container>
      <div className="App">
        <CategoryContext.Provider
          value={{
            categories,
            setCategories,
          }}
        >
          <WrapperCategories />
        </CategoryContext.Provider>
      </div>
    </Container>
  );
}

export default App;
