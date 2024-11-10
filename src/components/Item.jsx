import { useState } from "react";

const Item = ({ item, removeHandler, checkedHandler }) => {
  return (
    <li className="flex items-center justify-center p-4">
      <input
        type="checkbox"
        className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500"
        value={item.packed} // You can control this if you have state management for `packed`
        onChange={() => checkedHandler(item.id)}
      />
      <span
        className={`font-bold text-orange-600 ${
          item.packed ? "line-through text-gray-600" : ""
        }`}
      >
        {item.quantity} {item.description}
      </span>

      <button
        className="ml-2 text-red-700"
        onClick={() => removeHandler(item.id)}
      >
        ⓧ
      </button>
    </li>
  );
};

export default Item;
