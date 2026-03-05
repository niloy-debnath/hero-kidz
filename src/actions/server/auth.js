"use server";
import bcrypt from "bcryptjs";

import { collections, dbConnect } from "@/lib/dbConnect";

export const postUser = async (payload) => {
  const { email, name, password } = payload;

  if (!email || !password || !name) {
    return { ok: false, message: "Missing fields" };
  }

  const usersCollection = dbConnect(collections.USERS);

  // ✅ check existing user by email
  const isExist = await usersCollection.findOne({ email });

  if (isExist) {
    return { ok: false, message: "User already exists" };
  }

  const newUser = {
    provider: "credentials",
    email,
    password: await bcrypt.hash(password, 10),
    name,
    role: "user",
    createdAt: new Date(),
  };

  const result = await usersCollection.insertOne(newUser);

  return { ...result, ok: true, insertedId: result.insertedId.toString() };
};
