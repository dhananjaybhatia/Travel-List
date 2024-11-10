import { useState } from "react";

const Form = ({ addItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    // when the input by the user is given run the below function:
    addItems(newItem);

    setDescription(""); //after the item is saved it will clear the input.
    setQuantity(1);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row justify-center gap-4 md:gap-9 p-5  "
    >
      <h3 className="text-2xl text-orange-700 mt-2 text-center md:text-left">
        What do you need for your trip?
      </h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value)); // e.target.value always return string. you can use number function or use + sign.
          console.log(e.target.value);
        }}
        className="text-orange-500 border border-orange-300 p-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          console.log(e.target.value);
        }}
        className="text-orange-500 p-3 rounded-lg border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
      />
      <button className="text-white bg-orange-500 p-3 rounded-lg hover:bg-orange-600 transition duration-300">
        ADD
      </button>
    </form>
  );
};

export default Form;
