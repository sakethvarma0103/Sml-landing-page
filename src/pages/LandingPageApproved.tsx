import Slider from "react-slick";
import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent11 from "../components/FrameComponent11";
import styles from "./LandingPageApproved.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPageApproved: FunctionComponent = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.landingPageApproved} id="banner-section">
      <FrameComponent1 />
      <div className={styles.heroShapeParent}>
        {/* Carousel as background */}
        <div className={styles.carouselWrapper}>
          <Slider {...carouselSettings} className={styles.heroCarousel}>
            <div>
              <img src="/pikaso_edit.jpeg" alt="Slide 1" className={styles.carouselImage} />
            </div>
            <div>
              <img src="/slide_1.png" alt="Slide 2" className={styles.carouselImage} />
            </div>
            <div>
              <img src="/slide_3.png" alt="Slide 3" className={styles.carouselImage} />
            </div>
          </Slider>
          {/* Black overlay on the images */}
          <div className={styles.imageOverlay}></div>
        </div>
        {/* Content on top */}
        <div className={styles.heroContent}>
          <div className={styles.heroTitleParent}>
            <div className={styles.heroTitle}>
              <h1 className={styles.upgradingToMicroso}>
                {`Where Elegance meets Luxury`}
              </h1>
              <div className={styles.notAllBlank}></div>
            </div>
          </div>
          <div className={styles.formContainerParent}>
        <div
          id="crmWebToEntityForm"
          className="zcwf_lblLeft crmWebToEntityForm"
          style={{ backgroundColor: "white", color: "black", maxWidth: "600px" }}
        >
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
          <form
            id="webform729307000000737274"
            action="https://crm.zoho.in/crm/WebForm"
            name="WebForm729307000000737274"
            method="POST"
            acceptCharset="UTF-8"
          >
            <input
              type="hidden"
              name="xnQsjsdp"
              value="ad8e70b1d2951ca912a9d2116773daf63bc000949a58ae4d29fc65532397c41e"
            />
            <input
              type="hidden"
              name="zc_gad"
              id="zc_gad"
              value=""
            />
            <input
              type="hidden"
              name="xmIwtLD"
              value="382d4d07e6c98e16624fb49f938ec22dd9046ab1fdd25fd306d5650b5448e00dbc784ba0e5e86625ae37a64b1b91d6b7"
            />
            <input
              type="hidden"
              name="actionType"
              value="Q3VzdG9tTW9kdWxlMg=="
            />
            <input
              type="hidden"
              name="returnURL"
              value="null"
            />

            <div className={styles.row}>
              <label htmlFor="NAME" className={styles.formnames}>Full Name</label>
              <input
                type="text"
                id="NAME"
                name="NAME"
                className={styles.boxes}
                maxLength={80}
                placeholder="Enter full name"
                required
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="Email" className={styles.formnames}>Your Email</label>
              <input
                type="email"
                id="Email"
                name="Email"
                className={styles.boxes}
                maxLength={100}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="Phone" className={styles.formnames}>Your Number</label>
              <input
                type="text"
                id="Phone"
                name="Phone"
                className={styles.boxes}
                maxLength={30}
                placeholder="Enter your number"
                required
              />
            </div>
            <div className={styles.row}>
              <label htmlFor="Description" className={styles.formnames1}>Message</label>
              <textarea
                rows={3}
                id="Description"
                name="Description"
                className={styles.boxes}
                placeholder="Message"
              />
            </div>
            <input
              type="submit"
              id="formsubmit"
              className= {styles.submitbutton}
              value="Send"
              title="Submit"
            />
          </form>
        </div>
      </div>
        </div>
      </div>
      <FrameComponent3 />
      <FrameComponent6 />
      <FrameComponent9 />
      <FrameComponent10 />
?
      <section className={styles.footer}>
        <div className={styles.copyright2024}>
          Copyright © 2024, Shri Mahalakshmi Interior Design
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.termsAndConditions}>Terms and Conditions</div>
          <b className={styles.emptyFooter}>|</b>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageApproved;
