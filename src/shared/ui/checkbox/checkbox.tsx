import styles from "./checkbox.module.scss";

interface CheckboxProps {
  id?: string;
  label?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export function Checkbox({
  id,
  label,
  checked,
  onChange,
  disabled,
}: CheckboxProps) {
  return (
    <label className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.checkboxInput}
      />
      <span className={styles.customCheckbox} />
      {label && <span className={styles.checkboxLabel}>{label}</span>}
    </label>
  );
}
