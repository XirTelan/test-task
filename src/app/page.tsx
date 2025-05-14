import styles from "./page.module.scss";
import { CatView } from "../widgets/catWidget";
import { Suspense } from "react";
import { SWRConfig } from "swr";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SWRConfig
          value={{
            fallback: {
              "/api/cats": [],
            },
          }}
        >
          <Suspense fallback={<div>Loading</div>}>
            <CatView />
          </Suspense>
        </SWRConfig>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
