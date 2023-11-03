import { card1 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const CardDeal = () => {
  const { t } = useTranslation();

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {t("UpgradeYourSoftwareSolutionPart1")} <br className="sm:block hidden" /> {t("UpgradeYourSoftwareSolutionPart2")}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
          {t("CardDealDescription")}
        </p>
        {/* <Button styles={`mt-10`} /> */}
      </div>

      <div className={layout.sectionImg} >
        <img src={card1} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;






