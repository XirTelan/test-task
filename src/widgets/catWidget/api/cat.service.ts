// "use server";

import { CatData } from "@/types";
import { BASE_URL } from "../constant/contstant";

const API_KEY = process.env.API_KEY;

export async function getCat() {
  if (!API_KEY) {
    throw new Error("Api key not provided");
  }

  const res = (await fetch(BASE_URL, {
    method: "GET",
    headers: {
      "x-api-key": API_KEY,
      "Content-Type": "application/json",
    },
  }).then((responce) => responce.json())) as CatData[];
  return res;
}
