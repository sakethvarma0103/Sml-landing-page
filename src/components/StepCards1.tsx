import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StepCards1.module.css";

export type StepCards1Type = {
  className?: string;
  rectangle16?: string;
  prop?: string;
  selection?: string;
  choose?: string;
  yourStyle?: string;
  selectMaterialsFinishesAnd?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinHeight?: CSSProperties["minHeight"];
};

const StepCards1: FunctionComponent<StepCards1Type> = ({
  className = "",
  rectangle16,
  prop,
  selection,
  choose,
  yourStyle,
  selectMaterialsFinishesAnd,
  propDisplay,
  propMinHeight,
}) => {
  const selectMaterialsFinishesStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minHeight: propMinHeight,
    };
  }, [propDisplay, propMinHeight]);

  return (
    <div className={[styles.stepCards, className].join(" ")}>
      <img className={styles.stepCardsChild} alt="" src={rectangle16} />
      <div className={styles.frameParent}>
        <div className={styles.wrapper}>
          <div className={styles.div}>{prop}</div>
        </div>
        <div className={styles.selection}>{selection}</div>
        <h1 className={styles.chooseYourStyleContainer}>
          <b>{choose}</b>
          <span>{yourStyle}</span>
        </h1>
        <div className={styles.selection} style={selectMaterialsFinishesStyle}>
          {selectMaterialsFinishesAnd}
        </div>
      </div>
    </div>
  );
};

export default StepCards1;
