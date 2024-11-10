import { useState } from "react";
import Item from "./Item";

const List = ({ item, removeHandler, checkedHandler, handleClear }) => {
  const [sortBy, setSortBy] = useState("");
  let sortedItems = item;

  if (sortBy === "input") {
    sortedItems = item;
  }
  //a.description is a string, therefore we need localeCompare to sort.
  //slice() helps make the copy of the original array. otherwise when you sort it will change the original array.
  if (sortBy === "description") {
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  //packed is a boolean value - convert into a number and then sort.
  if (sortBy === "packed") {
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            removeHandler={removeHandler}
            checkedHandler={checkedHandler}
            item={item}
          />
        ))}
      </ul>
      <div className="flex justify-center gap-5 mt-10">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="uppercase"
        >
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed</option>
        </select>
        <button
          className="bg-blue-500 p-5 rounded-lg text-white"
          onClick={handleClear}
        >
          Clear List
        </button>
      </div>
    </div>
  );
};

export default List;
