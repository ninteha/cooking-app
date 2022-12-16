import styles from "./index.module.scss";
import Logo from "../../../assets/svg/logo.svg";
import FilterSelect from "../../logic/filter";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt="logo" />
          <div className={styles.logoText}>
            <div className={styles.title}>CookWell</div>
            <div className={styles.subTitle}>by Devexperts</div>
          </div>
        </div>
        <div className={styles.filter}>
          <FilterSelect />
        </div>
      </div>
    </div>
  );
};

export default Header;
