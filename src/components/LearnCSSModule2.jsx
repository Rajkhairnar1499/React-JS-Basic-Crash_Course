import Styles from "../css/LearnCSSModule2.module.css";

export const LearnCSSModule2 = () => {
  return (
    <>
    <h1>Learn CSS Module 2</h1>
      <p className={`${Styles.txt_size} ${Styles.txt_color}`}>
        This is CSS Module 2
      </p>
      <hr />
    </>
  );
};
