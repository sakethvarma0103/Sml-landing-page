import { FunctionComponent, useState, useEffect, useRef } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarStickyVisible, setIsNavbarStickyVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const desktopNavbarHeight = 85; // Adjust this value to your desktop navbar height
  const mobileNavbarHeight = 40; // Adjust this value to your mobile navbar height
  const navbarHeight = isMobile ? mobileNavbarHeight : desktopNavbarHeight;



  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateIsMobile(); // Initialize the state on mount
    window.addEventListener("resize", updateIsMobile);

    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);




  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavbarStickyVisible(true);
      } else {
        setIsNavbarStickyVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <section
      className={[
        styles.topContentWrapper,
        className,
        isMenuOpen ? styles.navActive : "",
      ].join(" ")}
    >
      <header className={styles.topContent}>
        <div className={styles.navbar}>
          <a href="#banner-section">
            <img
              className={styles.navbarChild}
              loading="lazy"
              alt=""
              src="/logo-04.png"
            />
          </a>

          {/* Hamburger menu */}


          {/* Navigation menu */}
          <div
            ref={sidebarRef}
            className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}
          >
             <button className={styles.heroLink}>
                <b className={styles.learnMore}>Learn more</b>
              </button>
          </div>
        </div>
      </header>
      <div className={styles.topContentSticky}>
        {/* Sticky Navbar */}
        <div
          className={`${styles.navbarsticky} ${
            isNavbarStickyVisible ? styles.visible : ""
          }`}
        >
          <a href="#banner-section">
            <img
              className={styles.navbarChild}
              loading="lazy"
              alt=""
              src="/logo-04.png"
            />
          </a>

          {/* Hamburger menu */}


          {/* Navigation menu */}
          <div
            ref={sidebarRef}
            className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}
          >
             <button className={styles.heroLink}>
                <b className={styles.learnMore}>Learn more</b>
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
