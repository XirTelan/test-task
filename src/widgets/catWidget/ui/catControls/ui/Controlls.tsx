"use client";
import { Checkbox } from "@/shared/ui";
import { Button } from "@/shared/ui/button/Button";
import React from "react";
import styles from "./Controlls.module.scss";
import { useCatUpdateControl } from "@/widgets/catWidget/hooks/useCatControl";

export default function Controlls() {
  const { isEnabled, isUpdate, refresh, toggleEnabled, toggleUpdate } =
    useCatUpdateControl();
  return (
    <div className={styles.wrapper}>
      <Checkbox
        id="isEnabled"
        label="Enabled"
        checked={isEnabled}
        onChange={toggleEnabled}
      />
      <Checkbox
        id="isUpdate"
        label="Auto-refresh every 5 second"
        checked={isUpdate}
        onChange={toggleUpdate}
      />
      <Button
        disabled={!isEnabled}
        label={"Get Cat"}
        onClick={refresh}
      ></Button>
    </div>
  );
}
