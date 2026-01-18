import styles from "./ColorPreview.module.css";

export default function ColorPreview(props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.preview} style={{ background: props.color }} />
    </div>
  );
}