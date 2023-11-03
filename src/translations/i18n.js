// translations/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "Services":"Services",
      "Features":"Features",
      "Team":"Team",
      "lang":"Language : ",
      "SoftwareCrafted": "Software Crafted to Perfection",
      "TheNext": "The Next",
      "Generation": "Generation",
      "Software": "Software",
      "Crafted": "Crafted",
      "to": " to",
      "Perfection": "Perfection",
      "SolutionsMethod": "Solution's Method.",
      "OurTeam1": "Our team of specialists employs a strategy to pinpoint the software solutions most attuned to your requirements. We scrutinize performance metrics, development costs, and post-launch support, ensuring that you receive the best possible digital solution for your business needs",
      "YouDoTheBusiness": "You do the business,",
      "WeHandleTheSolution": "we’ll handle the solution.",
      "WithTheRightSoftwareSolution": "With the right software solution, you can enhance your business operations, streamline processes, and increase profitability. But with countless technologies and platforms out there, let our team guide you to the optimal choice tailored for your unique needs.",
      "feature1Title": "Innovations",
      "feature1Content": "The best software solutions come with an exciting mix of features and cutting-edge technologies",
      "feature2Title": "100% Secured",
      "feature2Content": "We implement rigorous measures to ensure your data and projects are protected.",
      "feature3Title": "Seamless Integration",
      "feature3Content": "Our software integrates seamlessly, ensuring you save time and boost efficiency.",
      "CraftingCodePart1": "Crafting Code,",
      "CraftingCodePart2": "Creating Solutions.",
      "BillingParagraph": "At Silver Line Solution , we specialize in tailored software solutions, mobile app design, and cloud services. Driven by innovation, our team ensures agility, efficiency, and competitive edge in today's digital landscape",
      
      "UpgradeYourSoftwareSolutionPart1": "Upgrade Your",
      "UpgradeYourSoftwareSolutionPart2": "Software Solution",
      "CardDealDescription": "Discover cutting-edge features, seamless integration capabilities, and unmatched performance. Choose the software that evolves with your needs. Dive in, and elevate your business operations today",
      "OurTeam": "Our TEAM",
      "TheDrivingForce": "The Driving Force",
      "BehindExcellence": "Behind Excellence",
      "TestimonialsDescription": "Harness the knowledge of our dedicated experts to enhance your business strategies and thrive worldwide",
  

      "TrustedPartners": "Trusted PARTNERS",
      "TryOurService": "Let’s try our service now!",
      "ServiceDescription": "Get access to top-notch software development services and propel your business towards digital innovation and excellence.",
     
      "ContactUs": "Contact Us",
      "OpenHours": "Open Hours",
      "MondayToFriday": "Monday - Friday",
      "NineToFive": "9:00AM - 05:00PM",
      "Address": "Address",
      "Email": "Email",
      "CallUs": "Call Us",
      "street" :" Street of Commander",
      "Employees": "Employees",
      "TrustedByCompany": "Trusted by Company",
      "FutureProjects": "Future Projects",
      "IdeasToReality": "A new way Where Ideas Become Digital Reality",

      "footer": {
        // "Links": "Links",
        "community": "Community",
        "partner": "Partner",
  
  },
  "copyright": "Copyright Ⓒ 2023 Silver Line Solution. All Rights Reserved."
    }
  },
  fr: {
    translation: {
      "Home": "Acceuil",
      "Services":"Services",
      "Features":"Traits",
      "Team":"Équipe",
      "lang" :"Langue : ",
      "SoftwareCrafted": "Logiciel Conçu à la Perfection",
      "Software": "Logiciel",
      "Crafted": "Conçu",
      "to": " à la",
      "Perfection": "Perfection",
      "TheNext": "La Prochaine",
      "Generation": "Génération",
      "SolutionsMethod": " Solution.",
      "YouDoTheBusiness": "Vous gérez l'entreprise,",
      "WeHandleTheSolution": "nous nous occupons de la solution.",
      "WithTheRightSoftwareSolution": "Avec la solution logicielle appropriée, vous pouvez améliorer vos opérations commerciales, rationaliser les processus et augmenter la rentabilité. Mais avec d'innombrables technologies et plateformes disponibles, laissez notre équipe vous guider vers le choix optimal adapté à vos besoins uniques.",
      "OurTeam1": "Notre équipe de spécialistes adopte une stratégie précise pour identifier les solutions logicielles les mieux adaptées à vos besoins. Nous analysons les métriques de performance, les coûts de développement et le support post-lancement, en nous assurant que vous receviez la meilleure solution numérique possible pour les besoins de votre entreprise.",
    
      "feature1Title": "Innovations",
      "feature1Content": "Les meilleures solutions logicielles sont accompagnées d'un mélange passionnant de fonctionnalités et de technologies de pointe",
      "feature2Title": "100% Sécurisé",
      "feature2Content": "Nous mettons en œuvre des mesures rigoureuses pour assurer la protection de vos données et de vos projets.",
      "feature3Title": "Intégration Sans Faille",
      "feature3Content": "Notre logiciel s'intègre de manière transparente, vous permettant de gagner du temps et d'augmenter votre efficacité.",
     
      "CraftingCodePart1": "Conception de Code,",
      "CraftingCodePart2": "Création de Solutions.",
      "BillingParagraph": "Chez Silver Line Solution, nous sommes spécialisés dans les solutions logicielles sur mesure, la conception d'applications mobiles et les services cloud. Poussés par l'innovation, notre équipe assure agilité, efficacité et avantage concurrentiel dans le paysage numérique actuel",
      

       
       "UpgradeYourSoftwareSolutionPart1": "Améliorez Votre",
       "UpgradeYourSoftwareSolutionPart2": "Solution Logicielle",
       "CardDealDescription": "Découvrez des fonctionnalités de pointe, des capacités d'intégration transparentes et des performances inégalées. Choisissez le logiciel qui évolue avec vos besoins. Plongez-vous dedans et améliorez vos opérations commerciales dès aujourd'hui",
       "OurTeam": "Notre ÉQUIPE",
       "TheDrivingForce": "La Force Motrice",
       "BehindExcellence": "Derrière l'Excellence",
       "TestimonialsDescription": "Exploitez les connaissances de nos experts dédiés pour améliorer vos stratégies commerciales et prospérer dans le monde entier",
       "TrustedPartners": "nos PARTNERS",

       "TryOurService": "Essayez notre service maintenant !",
       "ServiceDescription": "Accédez à des services de développement logiciel de premier ordre et propulsez votre entreprise vers l'innovation numérique et l'excellence.",
     
       "ContactUs": "Contactez-nous",
        "OpenHours": "Heures d'Ouverture",
        "MondayToFriday": "Lundi - Vendredi",
        "NineToFive": "9:00 - 17:00",
        "Address": "Adresse",
        "Email": "Email",
        "CallUs": "Appelez-nous",
        "street" :"Rue du Commandant",
        "Employees": "Employés",
        "TrustedByCompany": "Confiance des Entreprises",
        "FutureProjects": "Projets Futurs",
        "IdeasToReality": "Une nouvelle manière où les idées deviennent une réalité numérique",

        "footer": {
            // "Links": "Liens Utiles",
            "community": "Communauté",
            "partner": "Partenaire",
          },

          "copyright": "Copyright Ⓒ 2023 Silver Line Solution. Tous droits réservés."
    }
  }
};

i18n
  .use(initReactI18next) 
  .use(LanguageDetector) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
