import React from 'react';
import styles from './FrameComponent11.module.css';

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: React.FunctionComponent<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.touchContentParent, className].join(" ")} id='contact-us'>
      <div className={styles.touchContent}>
        <div className={styles.touchTitle}>
          <h1 className={styles.getInTouchContainer}>
            <b>{`Get `}</b>
            <span>in Touch</span>
          </h1>
          {/* <div className={styles.loremIpsumIs}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div> */}
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.call}>
            <img
              className={styles.callIcon}
              loading="lazy"
              alt="Call"
              src="/call-icon.svg"
            />
            <div className={styles.phoneNumber}>
              <b className={styles.call1}>Call</b>
              <a className={styles.info} href="tel:+919133386664">
                <div className={styles.detailValues}>+91 91333 86664</div>
              </a>
            </div>
          </div>
          <div className={styles.email}>
            <img className={styles.callIcon} alt="Email" src="/email-icon.svg" />
            <div className={styles.emailId}>
              <b className={styles.email1}>Email</b>
              <a
                className={styles.info}
                href="mailto:info@shrimahalakshmi.com"
              >
                <div className={styles.infoshreemahalakshmicom}>
                  info@shrimahalakshmi.com
                </div>
              </a>
            </div>
          </div>
          <div className={styles.location}>
            <img className={styles.callIcon} alt="Location" src="/location-icon.svg" />
            <div className={styles.address}>
              <b className={styles.officeAddress}>Office Address</b>
              <div className={styles.vaPblicaMara}>
                GFPR+W5C, Sri Ganesh Nagar, Kompally, Hyderabad, Secunderabad,
                Telangana 500014
              </div>
            </div>
          </div>
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
    </section>
  );
};

export default FrameComponent11;
