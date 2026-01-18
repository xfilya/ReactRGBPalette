import styles from "./Label.module.css";

const VARIANT = {
  r: styles.r,
  g: styles.g,
  b: styles.b,
};

export default function Label(props) {
  return <div className={`${styles.label} ${VARIANT[props.variant]}`}>{props.children}</div>;
}