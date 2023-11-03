import React from "react";
import styles from "./style";
import { useTranslation } from "react-i18next";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  Contact,
} from "./components";
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';


const options = {
  position: 'top center',
  timeout: 10000,
  offset: '30px',
  transition: 'scale'
}

const App = () => {
  const { i18n } = useTranslation();

  return (
    <AlertProvider template={AlertTemplate} {...options}>
    <div className="bg-primary w-full overflow-hidden relative">
      {/* <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => i18n.changeLanguage("fr")}
          className="p-2 m-1 bg-white rounded-full"
        >
          FR <FaFlagFr size={24} />
        </button>
        <button
          onClick={() => i18n.changeLanguage("en")}
          className="p-2 m-1 bg-white rounded-full"
        >
          EN <FaFlagUs size={24} />
        </button>
      </div> */}

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
    </AlertProvider>
  );
};

export default App;
