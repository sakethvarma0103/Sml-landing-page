import { FunctionComponent, useState, useEffect } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./FrameComponent10.module.css";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3); // Default slides per view for desktop

  const slides = [
    {
      ellipse2706: "/ellipse-2706@2x.png",
      smithEnglish: "S. Rao",
      quote:
        "Its a great Brand that delivers value in every offering. Do put this place shri mahalakshmi hafele design studio on top of your checklist, if you are on a scout mission to plan or renovate your Kitchen / work space ...",
    },
    {
      ellipse2706: "/ellipse-2706-1@2x.png",
      smithEnglish: "Sreedhar Nandiraju",
      quote:
        "Dealing with Hafele Kompally has been one of the Best Experiences in my life. It is very professionally managed by young, dynamic, down to earth leader, Mr Vamshi, who is supported by excellent, affable, customer friendly staff ...",
    },
    {
      ellipse2706: "/ellipse-2706-2@2x.png",
      smithEnglish: "Nikhila Vadlamani",
      quote:
        "Amazing Experience! Right from our first day of casually visiting the store to the ultimate day of Stainless steeL modular kitchen installation - everything was just perfect. I would definitely recommend...",
    },
    {
      ellipse2706: "/ellipse-2706-3@2x.png",
      smithEnglish: "Krishna Chaitanya",
      quote:
        "An exceptional experience! The team at Hafele was attentive and professional throughout the entire process. Highly recommend!",
    },
    {
      ellipse2706: "/ellipse-2706-4@2x.png",
      smithEnglish: "Saketh",
      quote:
        "Top-notch service and quality. The attention to detail was impressive. I’m extremely happy with my new kitchen!",
    },
    {
      ellipse2706: "/ellipse-2706-5@2x.png",
      smithEnglish: "Lohitha",
      quote:
        "From start to finish, everything was seamless. The team was very accommodating and made sure all my needs were met. Outstanding!",
    },
  ];

  const totalSlides = slides.length;
  const maxIndex = Math.ceil(totalSlides / slidesPerView) - 1; // Maximum index for slide sets

  const handleNext = () => {
    if (currentSlideIndex < maxIndex) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setCurrentSlideIndex(0); // Loop back to the start
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else {
      setCurrentSlideIndex(maxIndex); // Loop back to the end
    }
  };

  // Calculate the index range for the current set of slides
  const startIndex = currentSlideIndex * slidesPerView;
  const currentSlides = slides.slice(startIndex, startIndex + slidesPerView);

  // Media query to handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };

    handleResize(); // Set the initial value

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={[styles.testimonialTitleParent, className].join(" ")}>
      <div className={styles.testimonialTitle}>
        <h1 className={styles.testimonials}> Testimonials</h1>
        <div className={styles.loremIpsumIs}>
          {/* Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. */}
        </div>
      </div>
      <div className={styles.testimonialCards}>
        {currentSlides.map((slide, index) => (
          <FrameComponent
            key={index}
            ellipse2706={slide.ellipse2706}
            smithEnglish={slide.smithEnglish}
            quote={slide.quote}
          />
        ))}
      </div>
      <div className={styles.infoElements}>
        <button
          className={styles.arrowButton}
          onClick={handlePrev}
        >
          {/* <span className={styles.arrow}>←</span> */}
          <img src="/left-icon.svg" className={styles.arrow} alt="" />
        </button>
        <button
          className={styles.arrowButton}
          onClick={handleNext}
        >
          {/* <span >→</span> */}
          <img src="/right-icon.svg" className={styles.arrow} alt="" />
          
        </button>
      </div>
    </section>
  );
};

export default FrameComponent10;