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

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarStickyVisible(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              alt="logo"
              src="/logo-04.png"
            />
          </a>
          <div>
            <button className={styles.heroLink}>
              <a>
                <b className={styles.learnMore}>Learn more</b>
              </a>
            </button>
          </div>
        </div>
      </header>
      <div className={styles.topContentSticky}>
        <div
          className={`${styles.navbarsticky} ${
            isNavbarStickyVisible ? styles.visible : ""
          }`}
        >
          <a href="#banner-section">
            <img
              className={styles.navbarChild}
              loading="lazy"
              alt="sticky logo"
              src="/logo-04.png"
            />
          </a>
          <div>
            <button className={styles.heroLink}>
              <a>
                <b className={styles.learnMore}>Learn more</b>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
