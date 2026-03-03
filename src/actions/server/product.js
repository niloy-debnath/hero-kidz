const { dbConnect, collections } = require("@/lib/dbConnect");

export const getProducts = async () => {
  const products = await dbConnect(collections.PRODUCTS).find().toArray();
  return products;
};
