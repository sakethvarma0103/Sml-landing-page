import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.upgradingToMicrosoParent, className].join(" ")}>
      <h1 className={styles.upgradingToMicrosoContainer}>
        <b>{`Our Design `}</b>
        <span>studio partner</span>
      </h1>
      <div className={styles.contentBody}>
        <div className={styles.contentParagraphOneParent}>
          <img
            className={styles.contentParagraphOne}
            loading="lazy"
            alt=""
            src="/frame-1686556580.svg"
          />
          <div className={styles.contentDivider}>
            <div className={styles.contentDividerChild} />
          </div>
          <div className={styles.contentLogo}>
            <img
              className={styles.haefeleLogo1Icon}
              loading="lazy"
              alt=""
              src="five-.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
