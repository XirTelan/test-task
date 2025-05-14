import { getCat } from "@/widgets/catWidget/api/cat.service";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await getCat();
  return NextResponse.json(res ?? []);
}
