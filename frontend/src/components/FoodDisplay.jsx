import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Filter by category (if category !== "All")
  const filteredList =
    category === "All"
      ? food_list
      : food_list.filter((item) => item.category === category);

  return (
    <div className="mt-12 px-[6vw]">
      {/* Section Heading */}
      <h2 className="text-3xl font-extrabold text-[#2c2c2c] mb-2 text-center">
        Top Dishes <span className="text-[tomato]">Near You</span>
      </h2>
      <div className="w-[80px] h-[4px] bg-[tomato] mx-auto mb-8 rounded-full"></div>

      {/* Food Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredList.map((item, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <FoodItem
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredList.length === 0 && (
        <p className="text-gray-500 text-center mt-8">
          No dishes found in this category 🍽️
        </p>
      )}
    </div>
  );
};

export default FoodDisplay;
