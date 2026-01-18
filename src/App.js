import { useMemo, useState } from "react";
import styles from "./App.module.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ColorPreview from "./components/ColorPreview";
import Input from "./components/Input";
import Label from "./components/Label";

function clampRgb(value) {
  const n = Number(value);
  if (Number.isNaN(n)) return 0;
  return Math.min(255, n);
}

export default function App() {
  const [r, setR] = useState(100);
  const [g, setG] = useState(150);
  const [b, setB] = useState(200);

  const rgb = useMemo(() => {
    const rr = clampRgb(r);
    const gg = clampRgb(g);
    const bb = clampRgb(b);
    return { r: rr, g: gg, b: bb, css: `rgb(${rr}, ${gg}, ${bb})` };
  }, [r, g, b]);

  return (
    <div className={styles.page}>
      <Header/>

      <main className={styles.main}>
        <div className={styles.colorPreview}>
          <ColorPreview color={rgb.css} />

          <div className={styles.field}>
            <Label variant="r">Красный (R)</Label>
            <Input
              variant="r"
              value={r}
              onChange={(e) => setR(e.target.value)}
              placeholder="0–255"
            />
          </div>

          <div className={styles.field}>
            <Label variant="g">Зелёный (G)</Label>
            <Input
              variant="g"
              value={g}
              onChange={(e) => setG(e.target.value)}
              placeholder="0–255"
            />
          </div>

          <div className={styles.field}>
            <Label variant="b">Синий (B)</Label>
            <Input
              variant="b"
              value={b}
              onChange={(e) => setB(e.target.value)}
              placeholder="0–255"
            />
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}
