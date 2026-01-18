import styles from "./Input.module.css";

const VARIANT = {
  r: styles.r,
  g: styles.g,
  b: styles.b,
};

export default function Input(props) {
  return <input className={`${styles.input} ${VARIANT[props.variant]}`} {...props} />;
}