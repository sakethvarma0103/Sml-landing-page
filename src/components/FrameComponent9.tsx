import { FunctionComponent } from "react";
import ReasonCards from "./ReasonCards";
import styles from "./FrameComponent9.module.css";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.chooseTitleParent, className].join(" ")}>
      <div className={styles.chooseTitle}>
        <h1 className={styles.whyChooseUsContainer}>
          <b>{`Why `}</b>
          <span>Choose us</span>
        </h1>
        {/* <div className={styles.loremIpsumIs}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div> */}
      </div>
      <div className={styles.reasonCardsParent}>
        <div className={styles.reasonCards}>
          <img
            className={styles.reasonCardsChild}
            loading="lazy"
            alt=""
            src="/group-1437253976@2x.png"
          />
          <div className={styles.hafelePartnerParent}>
            <b className={styles.hafelePartner}>Hafele Partner</b>
            <div className={styles.precisionCraftsmanshipOfContainer}>
              <p className={styles.precisionCraftsmanshipOf}>
                Precision craftsmanship of 100 years
              </p>
            </div>
          </div>
        </div>
        <ReasonCards
          group1437253976="/group-1437253976-1.svg"
          yearsWarranty="15 Years Warranty"
          weofferAYearWarrantyOnOurH="We offer a 15-year warranty on our hardware products, ensuring peace of mind."
        />
        <ReasonCards
          propBackgroundColor="#dde8ed"
          group1437253976="/group-1437253976-5@2x.png"
          yearsWarranty="20% Extra Storage"
          weofferAYearWarrantyOnOurH="Maximize your space with our innovative storage solutions, creating up to 20% more room."
        />
        <ReasonCards
          propBackgroundColor="#e2e2e2"
          group1437253976="/group-1437253976-3@2x.png"
          yearsWarranty="Superior Finish"
          weofferAYearWarrantyOnOurH="With over 75% of materials factory-made using state-of-the-art machines,"
        />
        <ReasonCards
          propBackgroundColor="#faf5c5"
          group1437253976="/group-1437253976-5@2x.png"
          yearsWarranty="Personalized for You"
          weofferAYearWarrantyOnOurH="Our design experts cater to your unique tastes and needs, whether you prefer a minimalist"
        />
        <ReasonCards
          propBackgroundColor="#e4f7e4"
          group1437253976="/group-1437253976-3@2x.png"
          yearsWarranty="Quality Checks"
          weofferAYearWarrantyOnOurH="We use DC gold plywood with a eucalyptus core, naturally termite and borer proof. "
        />
      </div>
    </section>
  );
};

export default FrameComponent9;
