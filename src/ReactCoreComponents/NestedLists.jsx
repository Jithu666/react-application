import React from "react";

const NestedLists = () => {
  const categories = [
    {
      id: 1,
      category: "fruits",
      items: [
        "Apple",
        "Banana",
        "Cherry",
        "Durian",
        "Elephant Foot",
        "Fig",
        "Guava",
        "Ham",
        "Ice Apple",
      ],
    },
    { id: 2, category: "vegetables", items: ["Apricot", "Beetroot"] },
  ];
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <h3 className="text-xl">{category.category}: </h3>
          {category.items.map((item, index) => (
            <li key={index} className="ml-10">
              {item}
            </li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NestedLists;
