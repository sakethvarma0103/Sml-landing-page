import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ReasonCards.module.css";

export type ReasonCardsType = {
  className?: string;
  group1437253976?: string;
  yearsWarranty?: string;
  weofferAYearWarrantyOnOurH?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const ReasonCards: FunctionComponent<ReasonCardsType> = ({
  className = "",
  propBackgroundColor,
  group1437253976,
  yearsWarranty,
  weofferAYearWarrantyOnOurH,
}) => {
  const reasonCardsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={[styles.reasonCards, className].join(" ")}
      style={reasonCardsStyle}
    >
      <img className={styles.reasonCardsChild} alt="" src={group1437253976} />
      <div className={styles.yearsWarrantyParent}>
        <b className={styles.yearsWarranty}>{yearsWarranty}</b>
        <div className={styles.weofferA15Year}>
          {weofferAYearWarrantyOnOurH}
        </div>
      </div>
    </div>
  );
};

export default ReasonCards;
