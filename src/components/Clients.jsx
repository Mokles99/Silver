import { clients } from "../constants";
import styles from "../style";
import { bureau } from "../assets";
import { useTranslation } from "react-i18next";

const Clients = () => {

  const { t }=useTranslation();
 return (
  <section className={`${styles.flexCenter} my-4 flex flex-col`}> 
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      <div className="w-full flex justify-center items-center relative z-[1]">
      <button
      className="text-gray-500 text-lg font-bold px-4 py-2 rounded-full mb-8"
      style={{
        backgroundColor: "#7de7eb",
        fontFamily: "VotrePolice, sans-serif",
      }}
    >
      {t("TrustedPartners")}
    </button>
      </div>

      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[250px] min-w-[200px] m-5 mb-8`}
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-[300px] w-[150px] object-contain"
          />
        </div>
      ))}
    </div>

   
    {/* <div className="w-full mt-8">
  <img src={bureau} alt="description_de_l'image" className="w-full h-[480px]" />
</div> */}
{/* <img src={bureau} alt="description_de_l'image" className="w-screen h-[480px]" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }} /> */}

<div className="w-screen h-[480px] relative">
  <div
    className="absolute inset-0 bg-gradient-to-b from-purple-300 via-blue-500 to-teal-800 opacity-50"
    style={{
      backgroundImage: 'linear-gradient(to bottom, rgba(124, 123, 226, 0.5), rgba(0, 111, 173, 0.6), rgba(0, 82, 95, 0.7), rgba(0, 148, 189, 0.8), rgba(12, 15, 7, 0.9))'
    }}
  ></div>
  <img
    src={bureau}
    alt="description_de_l'image"
    className="w-full h-full object-cover"
  />
</div>
  </section>
)
  };

export default Clients;
