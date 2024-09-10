import { FunctionComponent } from "react";
import styles from "./StepCards.module.css";

export type StepCardsType = {
  className?: string;
  designStep?: string;
  design?: string;
  seeYourIdeas?: string;
  comeToLife?: string;
  ourExpertsCreateADesignPlan?: string;
  rectangle16?: string;
};

const StepCards: FunctionComponent<StepCardsType> = ({
  className = "",
  designStep,
  design,
  seeYourIdeas,
  comeToLife,
  ourExpertsCreateADesignPlan,
  rectangle16,
}) => {
  return (
    <div className={[styles.stepCards, className].join(" ")}>
      <div className={styles.stepIllustrationParent}>
        <div className={styles.stepIllustration}>
          <div className={styles.designStep}>{designStep}</div>
        </div>
        <div className={styles.design}>{design}</div>
        <h1 className={styles.seeYourIdeasContainer}>
          <b>{seeYourIdeas}</b>
          <span>{comeToLife}</span>
        </h1>
        <div className={styles.design}>{ourExpertsCreateADesignPlan}</div>
      </div>
      <img className={styles.stepCardsChild} alt="" src={rectangle16} />
    </div>
  );
};

export default StepCards;
