import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Upgrade Your <br className="sm:block hidden" /> Software Solution
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
        Discover cutting-edge features,seamless integration capabilities, and
        unmatched performance. Choose the software that evolves with your needs.
        Dive in, and elevate your business operations today
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
