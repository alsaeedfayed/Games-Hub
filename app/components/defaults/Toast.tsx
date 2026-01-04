"use client";
import { useEffect } from "react";
import styles from "./Toast.module.css";

export default function Toast({
  message,
  type,
  show,
  duration = 3000,
  onClose,
}: {
  message: string;
  type: "success" | "error" | "loading";
  show: boolean;
  duration?: number;
  onClose: () => void;
}) {
  useEffect(() => {
    if (type !== "loading" && show) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, type, duration, onClose]);

  if (!show) return null;

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      {message}

      <div className={styles.progress}>
        <div
          className={styles.progressBar}
          style={{
            animationDuration: `${duration}ms`,
          }}
        />
      </div>
    </div>
  );
}
