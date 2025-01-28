import { createContext, useState } from "react";

export const ProductsContext = createContext({
  products: [],
  toggleFav: (id) => {},
});

export default function ProductsContextProvider({ children }) {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFav = (productId) => {
    setProductsList((currentProdList) => {
      const currentProdItemIdx = currentProdList.findIndex(
        (prodItem) => prodItem.id === productId
      );

      const newFavStatus = !currentProdList[currentProdItemIdx].isFavorite;

      const updatedProdList = [...currentProdList];

      updatedProdList[currentProdItemIdx] = {
        ...currentProdList[currentProdItemIdx],
        isFavorite: newFavStatus,
      };

      return updatedProdList;
    });
  };

  return (
    <ProductsContext.Provider value={{ products: productsList, toggleFav }}>
      {children}
    </ProductsContext.Provider>
  );
}
