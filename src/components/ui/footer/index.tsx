import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            Please don’t try these recipes at home. We hope that they will
            inspire you to cook more, but consider that their main idea is your
            coding task for Devexperts.
          </div>
          <div className={styles.copyright}>
            Copyright © 2022. All right reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
