import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const FeatureCard = ({ icon, titleKey, contentKey, index }) => {
  const { t } = useTranslation();
  return (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {t(titleKey)}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {t(contentKey)}
      </p>
    </div>
  </div>
  )
}

const Business = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {t("YouDoTheBusiness")} <br className="sm:block hidden" /> {t("WeHandleTheSolution")}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t("WithTheRightSoftwareSolution")}
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};


export default Business;
