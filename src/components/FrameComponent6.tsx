import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.processContentWrapper, className].join(" ")} id="our-process">
      <div className={styles.processContent}>
        {/* <div className={styles.processSteps}>
          <div className={styles.stepOne}>
            <div className={styles.stepTitleOne}>
              <div className={styles.notAllBlank}>Our Process</div>
              <h1 className={styles.upgradingToMicrosoContainer}>
                <b>{`How We Bring Your `}</b>
                <span>Dream Home to Life</span>
              </h1>
            </div>
          </div>
          <div className={styles.notAllBlank1}>
            At Shri Mahalakshmi Interior design, we believe that a well-defined
            process is key to delivering exceptional interior design solutions.
            Our comprehensive approach ensures that every project is handled
            with meticulous attention to detail, from the initial consultation
            to the final installation. Here's how we do it:
          </div>
        </div> */}
        {/* <div className={styles.vectorParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/new-rectangle.png"
            // src="/our-process-03-new.jpg"
            // src="/our-process-02.jpg"
            // src="/our-process-01.jpg"
          />
          
        </div> */}
      </div>
    </section>
  );
};

export default FrameComponent6;
