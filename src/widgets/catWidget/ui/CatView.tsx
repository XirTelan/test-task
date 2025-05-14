"use client";

import { useGetCat } from "../hooks/useGetCat";
import CatImage from "./catImage/CatImage";
import Controlls from "./catControls/ui/Controlls";

export function CatView() {
  const { data } = useGetCat();

  return (
    <>
      <section>
        <Controlls />
      </section>
      <section>
        <CatImage image={data?.[0]} />
      </section>
    </>
  );
}
