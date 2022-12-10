import { useState } from "react";
import Header from "./Header";
import Forms from "./Forms";
import Todos from "./Todos";

function App() {
  const [deleted, setDelete] = useState([]);
  const [textValue, setText] = useState("");
  const handleRemove = (id) => {
    setDelete(
      deleted.filter((item, index) => {
        if (index === id) {
          return false;
        }
        return true;
      })
    );
  };

  const addText = () => {
    setDelete([
      {
        text: textValue,
        favorite: false,
      },
      ...deleted,
    ]);
    setText("");
  };

  const makeFavorite = (id) => {
    setDelete(
      deleted.map((item, index) => {
        if (id === index) {
          return {
            ...item,
            favorite: !item.favorite,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <Header />
      <Forms addText={addText} setText={setText} textValue={textValue} />
      <Todos
        deleted={deleted}
        makeFavorite={makeFavorite}
        handleRemove={handleRemove}
      />
    </>
  );
}

export default App;
