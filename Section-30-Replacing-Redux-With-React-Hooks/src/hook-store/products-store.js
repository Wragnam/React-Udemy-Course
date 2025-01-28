import { initStore } from "./store";

export default function configureStore() {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const currentProdItemIdx = curState.products.findIndex(
        (prodItem) => prodItem.id === productId
      );

      const newFavStatus = !curState.products[currentProdItemIdx].isFavorite;

      const updatedProdList = [...curState.products];

      updatedProdList[currentProdItemIdx] = {
        ...curState.products[currentProdItemIdx],
        isFavorite: newFavStatus,
      };

      return {
        products: updatedProdList,
      };
    },
  };

  initStore(actions, {
    products: [
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
    ],
  });
}
