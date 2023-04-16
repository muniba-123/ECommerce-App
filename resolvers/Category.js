exports.Category = {
  products: (parent, { filter }, { db }) => {
    console.log("Parent of product",parent)
    const categoryId=parent.id;
    const categoryProducts = db.products.filter(
      (product) => product.categoryId === categoryId
    );
    let filteredCategoryProducts = categoryProducts;

    if (filter) {
      if (filter.onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => {
            return product.onSale;
          }
        );
      }
    }

    return filteredCategoryProducts;
  },
};
