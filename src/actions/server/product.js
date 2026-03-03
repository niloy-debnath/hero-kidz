"use server";

import { ObjectId } from "mongodb";
const { dbConnect, collections } = require("@/lib/dbConnect");

export const getProducts = async () => {
  const products = await dbConnect(collections.PRODUCTS).find().toArray();

  return products.map((p) => ({
    ...p,
    _id: p._id.toString(),
  }));
};

export const getSingleProduct = async (id) => {
  const query = { _id: new ObjectId(id) };

  const product = await dbConnect(collections.PRODUCTS).findOne(query); // ✅ await

  if (!product) return null;

  return {
    ...product,
    _id: product._id.toString(), // ✅ fix
  };
};
