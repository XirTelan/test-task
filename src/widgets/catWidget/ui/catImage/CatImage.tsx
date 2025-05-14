import { CatData } from "@/types";
import Image from "next/image";
import React from "react";
import styles from "./CatImage.module.scss";

type CatImageProps = {
  image?: CatData;
};
export default function CatImage({ image }: CatImageProps) {
  return (
    <div className={styles.wrapper}>
      {!image ? (
        <div className={styles.placeholder}>No Cat</div>
      ) : (
        <Image
          priority
          className={styles.catImage}
          fill
          src={image.url}
          alt={""}
        />
      )}
    </div>
  );
}
