import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import styles from "./index.module.scss";
import closeIcon from "../../../assets/svg/icons/close-btn.svg";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "611px",
  width: "100%",
  bgcolor: "#fff",
  borderRadius: "4px",
  filter:
    "drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.14)) drop-shadow(0px 6px 30px rgba(0, 0, 0, 0.12)) drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.2))",
};

interface IModal {
  handleClose?: () => void;
  open: boolean;
  recipe?: any;
}
const TransitionsModal: React.FC<IModal> = ({ handleClose, open, recipe }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className={styles.closeBtn}>
              <img
                className={styles.closeIcon}
                src={closeIcon}
                onClick={handleClose}
                alt=""
              />
            </div>
            <div className={styles.wrapper}>
              {recipe?.preparationMethod?.map((step: any, i: any) => {
                return (
                  <div key={i} className={styles.container}>
                    <div className={styles.stepContainer}>
                      <div className={styles.step}>{step.step}</div>
                    </div>
                    <div className={styles.text}>{step.text}</div>
                  </div>
                );
              })}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
