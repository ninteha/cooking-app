import Recipe from "../../components/logic/recipe";
import Footer from "../../components/ui/footer";
import MasterLayout from "../../layouts/MasterLayout";
import styles from "./index.module.scss";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <MasterLayout>
        <div className={styles.separator}>
          <div className={styles.recipeCardWrapper}>
            <Recipe />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </MasterLayout>
    </div>
  );
};

export default HomePage;
