import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]); // this is where all the added items would save.

  function addItems(newItem) {
    setItems((prevItems) => [newItem, ...prevItems]);
  }

  function removeHandler(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleClear() {
    const confirmClear = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmClear) setItems([]);
  }

  function checkedHandler(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <>
      <main className="w-full min-h-screen p-10">
        <Header />
        <Form addItems={addItems} />
        <List
          item={items}
          removeHandler={removeHandler}
          checkedHandler={checkedHandler}
          handleClear={handleClear}
        />
        <Footer items={items} />
      </main>
    </>
  );
}

export default App;
