exports.Product = {
  category: (parent, args, { db }) => {
    console.log("Parent of category",parent)
    
    return db.categories.find((category) => category.id === parent.categoryId);
  },
  reviews: ({ id }, args, { db }) => {
    return db.reviews.filter((review) => review.productId === id);
  },
};
