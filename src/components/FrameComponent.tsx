import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  ellipse2706?: string;
  smithEnglish?: string;
  quote?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  propWidth,
  ellipse2706,
  propFlex,
  smithEnglish,
  quote,
  propMinWidth,
  propWidth1,
  propAlignSelf,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const smithEnglishStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const loremIpsumIsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      alignSelf: propAlignSelf,
    };
  }, [propWidth1, propAlignSelf]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.starParent}>
            <img className={styles.frameChild} alt="" src="/stars-one.svg" />
            <img className={styles.frameChild} alt="" src="/stars-one.svg" />
            <img className={styles.frameChild} alt="" src="/stars-one.svg" />
            <img className={styles.frameChild} alt="" src="/stars-one.svg" />
            <img className={styles.frameChild} alt="" src="/stars-one.svg" />
          </div>
          <blockquote className={styles.shreeMahalakshmiInterior}>
            {quote}
          </blockquote>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.ellipseParent} style={frameDivStyle}>
          {/* <img className={styles.ellipseIcon} alt="" src={ellipse2706} /> */}
          <div className={styles.smithEnglishParent} style={frameDiv1Style}>
            <b className={styles.smithEnglish} style={smithEnglishStyle}>
              {smithEnglish}
            </b>
            <div className={styles.loremIpsumIs} style={loremIpsumIsStyle}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
