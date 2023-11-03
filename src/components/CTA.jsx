import { useTranslation } from "react-i18next";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
const{t}=useTranslation();
  return(
  <div>
  <div className="w-full flex justify-center items-center relative z-[1]">
  <button className="text-gray-500  text-lg font-bold px-4 py-2 rounded-full mt-8" style={{ backgroundColor: '#7de7eb', fontFamily: 'VotrePolice, sans-serif' }}>
    CONTACT
  </button>
</div>
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    
  <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        {t("TryOurService")}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {t("ServiceDescription")}
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
  </div>
);
}
export default CTA;
