import React from "react";

export default function Footer({ items }) {
  if (!items.length)
    return (
      <p className="flex justify-center p-10 text-2xl font-semibold text-orange-600">
        Start Adding some items to your list 🚀
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <div className="flex justify-center p-10">
      {percentage === 100 ? (
        <h1 className="text-green-500 font-bold">
          Congratulations!! You have packed everything 🧰
        </h1>
      ) : (
        <h1 className="text-blue-700">
          You have {numItems} items on your list and you have already packed{" "}
          {numPacked} ({isNaN(percentage) ? 0 : percentage}%)
        </h1>
      )}
    </div>
  );
}
