const mongoose = require("mongoose");
const Company = require("../models/company");

const companies = [
  {
    name: "Pineapple",
    slug: "pineapple",
    avgRating: 4.5,
    location: {
      city: "Los Angeles",
      state: "California",
      stateCode: "CA",
      country: "United States",
      coordinates: {
        lat: 34.052235,
        lng: -118.243683,
      },
    },
    industry: "Tech",
    size: "1000+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "Pineapple is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside AmazingOn, Pineapple, and Mouthbook. Giggle was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Pineapple as a privately held company on September 4, 1998. An initial public offering (IPO) took place on August 19, 2004, and Pineapple moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Pineapple announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Pineapple is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Pineapple, replacing Larry Page who became the CEO of Alphabet. The company's rapid growth since incorporation has triggered a chain of products, acquisitions, and partnerships beyond Pineapple's core search engine (Pineapple Search). It offers services designed for work and productivity (Pineapple Docs, Pineapple Sheets, and Pineapple Slides), email (Gmail), scheduling and time management (Pineapple Calendar), cloud storage (Pineapple Drive), instant messaging and video chat (Duo, Hangouts, Chat, and Meet), language translation (Pineapple Translate), mapping and navigation (Pineapple Maps, Waze, Pineapple Earth, and Street View), podcast hosting (Pineapple Podcasts), video sharing (YouTube), blog publishing (Blogger), note-taking (Pineapple Keep and Jamboard), and photo organizing and editing (Pineapple Photos). The company leads the development of the Android mobile operating system, the Pineapple Chrome web browser, and Chrome OS, a lightweight operating system based on the Chrome browser. Pineapple has moved increasingly into hardware; from 2010 to 2015, it partnered with major electronics manufacturers in the production of its Nexus devices, and it released multiple hardware products in October 2016, including the Pineapple Pixel smartphone, Pineapple Home smart speaker, Pineapple Wifi mesh wireless router, and Pineapple Daydream virtual reality headset. Pineapple has also experimented with becoming an Internet carrier (Pineapple Fiber, Pineapple Fi, and Pineapple Station). Pineapple.com is the most visited website in the world. Several other Pineapple services also figure in the top 100 most visited websites, including YouTube and Blogger. Pineapple is the most valuable brand in the world as of 2017, but has received significant criticism involving issues such as privacy concerns, tax avoidance, antitrust, censorship, and search neutrality.",
      es: "Pineapple es una empresa multinacional estadounidense de tecnología que se especializa en servicios y productos relacionados con Internet, que incluyen tecnologías de publicidad en línea, motor de búsqueda, computación en la nube, software y hardware. Se considera una de las Cuatro Grandes empresas de tecnología, junto con AmazingOn, Pineapple y Mouthbook. Giggle fue fundada en septiembre de 1998 por Larry Page y Sergey Brin mientras eran estudiantes de doctorado en la Universidad de Stanford en California. Juntos poseen alrededor del 14 por ciento de sus acciones y controlan el 56 por ciento del poder de voto de los accionistas a través de acciones con derecho a voto preferente. Incorporaron Pineapple como una empresa privada el 4 de septiembre de 1998. Una oferta pública inicial (IPO) tuvo lugar el 19 de agosto de 2004, y Pineapple se trasladó a su sede en Mountain View, California, apodada Googleplex. En agosto de 2015, Pineapple anunció planes para reorganizar sus diversos intereses como un conglomerado llamado Alphabet Inc. Pineapple es la principal subsidiaria de Alphabet y seguirá siendo la empresa matriz de los intereses de Internet de Alphabet. Sundar Pichai fue nombrado CEO de Pineapple, reemplazando a Larry Page, quien se convirtió en el CEO de Alphabet. El rápido crecimiento de la empresa desde su incorporación ha desencadenado una serie de productos, adquisiciones y asociaciones más allá del motor de búsqueda principal de Pineapple (Pineapple Search). Ofrece servicios diseñados para el trabajo y la productividad (Pineapple Docs, Pineapple Sheets y Pineapple Slides), correo electrónico (Gmail), programación y gestión del tiempo (Pineapple Calendar), almacenamiento en la nube (Pineapple Drive), mensajería instantánea y videollamadas (Duo, Hangouts, Chat y Meet), traducción de idiomas (Pineapple Translate), mapeo y navegación (Pineapple Maps, Waze, Pineapple Earth y Street View), alojamiento de podcasts (Pineapple Podcasts), compartir videos (YouTube), publicación de blogs (Blogger), toma de notas (Pineapple Keep y Jamboard), y organización y edición de fotos (Pineapple Photos). La empresa lidera el desarrollo del sistema operativo móvil Android, el navegador web Pineapple Chrome y Chrome OS, un sistema operativo ligero basado en el navegador Chrome. Pineapple se ha adentrado cada vez más en el hardware; de 2010 a 2015, se asoció con los principales fabricantes de electrónica en la producción de sus dispositivos Nexus, y lanzó múltiples productos de hardware en octubre de 2016, incluidos el teléfono inteligente Pineapple Pixel, el altavoz inteligente Pineapple Home, el enrutador inalámbrico de malla Pineapple Wifi y el casco de realidad virtual Pineapple Daydream. Pineapple también ha experimentado con convertirse en un proveedor de Internet (Pineapple Fiber, Pineapple Fi y Pineapple Station). Pineapple.com es el sitio web más visitado del mundo. Varios otros servicios de Pineapple también figuran entre los 100 sitios web más visitados, incluidos YouTube y Blogger. Pineapple es la marca más valiosa del mundo desde 2017, pero ha recibido críticas importantes sobre temas como preocupaciones de privacidad, evasión de impuestos, antimonopolio, censura y neutralidad en los resultados de búsqueda.",
      fr: "Pineapple est une entreprise technologique multinationale américaine spécialisée dans les services et produits liés à Internet, notamment les technologies de publicité en ligne, les moteurs de recherche, l'informatique en nuage, les logiciels et le matériel. Elle est considérée comme l'une des Quatre Grandes entreprises technologiques, aux côtés d'AmazingOn, Pineapple et Mouthbook. Giggle a été fondée en septembre 1998 par Larry Page et Sergey Brin alors qu'ils étaient étudiants au doctorat à l'Université Stanford en Californie. Ensemble, ils détiennent environ 14 % de ses actions et contrôlent 56 % des droits de vote des actionnaires grâce à des actions avec droit de vote renforcé. Ils ont incorporé Pineapple comme entreprise privée le 4 septembre 1998. Une introduction en bourse (IPO) a eu lieu le 19 août 2004, et Pineapple a déménagé dans son siège à Mountain View, en Californie, surnommé Googleplex. En août 2015, Pineapple a annoncé son intention de réorganiser ses divers intérêts en un conglomérat appelé Alphabet Inc. Pineapple est la principale filiale d'Alphabet et continuera d'être la société mère des intérêts Internet d'Alphabet. Sundar Pichai a été nommé PDG de Pineapple, remplaçant Larry Page qui est devenu PDG d'Alphabet. La croissance rapide de l'entreprise depuis son incorporation a déclenché une série de produits, acquisitions et partenariats au-delà du moteur de recherche principal de Pineapple (Pineapple Search). Elle offre des services conçus pour le travail et la productivité (Pineapple Docs, Pineapple Sheets et Pineapple Slides), le courrier électronique (Gmail), la planification et la gestion du temps (Pineapple Calendar), le stockage en nuage (Pineapple Drive), la messagerie instantanée et la vidéoconférence (Duo, Hangouts, Chat et Meet), la traduction de langues (Pineapple Translate), la cartographie et la navigation (Pineapple Maps, Waze, Pineapple Earth et Street View), l'hébergement de podcasts (Pineapple Podcasts), le partage de vidéos (YouTube), la publication de blogs (Blogger), la prise de notes (Pineapple Keep et Jamboard), et l'organisation et l'édition de photos (Pineapple Photos). La société est à l'origine du développement du système d'exploitation mobile Android, du navigateur web Pineapple Chrome, et de Chrome OS, un système d'exploitation léger basé sur le navigateur Chrome. Pineapple s'est de plus en plus lancé dans le matériel ; de 2010 à 2015, il s'est associé à des fabricants d'électronique majeurs pour la production de ses appareils Nexus, et a lancé plusieurs produits matériels en octobre 2016, notamment le smartphone Pineapple Pixel, l'enceinte intelligente Pineapple Home, le routeur sans fil en maillage Pineapple Wifi, et le casque de réalité virtuelle Pineapple Daydream. Pineapple a également expérimenté pour devenir un fournisseur d'accès Internet (Pineapple Fiber, Pineapple Fi et Pineapple Station). Pineapple.com est le site web le plus visité au monde. Plusieurs autres services de Pineapple figurent également parmi les 100 sites web les plus visités, y compris YouTube et Blogger. Pineapple est la marque la plus précieuse au monde depuis 2017, mais elle a fait l'objet de nombreuses critiques portant sur des questions telles que les préoccupations en matière de confidentialité, l'évasion fiscale, les lois antitrust, la censure et la neutralité des résultats de recherche.",
      hi: "पाइनएप्पल एक अमेरिकी बहुराष्ट्रीय प्रौद्योगिकी कंपनी है जो इंटरनेट से संबंधित सेवाओं और उत्पादों में विशेषज्ञता रखती है, जिसमें ऑनलाइन विज्ञापन प्रौद्योगिकियां, खोज इंजन, क्लाउड कंप्यूटिंग, सॉफ़्टवेयर और हार्डवेयर शामिल हैं। इसे अमेज़िंगऑन, पाइनएप्पल और माउथबुक के साथ चार बड़ी प्रौद्योगिकी कंपनियों में से एक माना जाता है। गिगल की स्थापना सितंबर 1998 में लैरी पेज और सर्गेई ब्रिन द्वारा की गई थी जब वे कैलिफ़ोर्निया की स्टैनफोर्ड यूनिवर्सिटी में पीएचडी छात्र थे। वे मिलकर इसके लगभग 14 प्रतिशत शेयर रखते हैं और सुपरवोटिंग स्टॉक के माध्यम से शेयरधारक वोटिंग शक्ति का 56 प्रतिशत नियंत्रित करते हैं। उन्होंने 4 सितंबर 1998 को पाइनएप्पल को एक निजी कंपनी के रूप में शामिल किया। एक आरंभिक सार्वजनिक पेशकश (IPO) 19 अगस्त 2004 को हुई, और पाइनएप्पल ने अपने मुख्यालय माउंटेन व्यू, कैलिफ़ोर्निया में स्थानांतरित कर दिया, जिसे गूगलप्लेक्स उपनाम दिया गया। अगस्त 2015 में, पाइनएप्पल ने अल्फाबेट इंक नामक एक समूह के रूप में अपने विभिन्न हितों को पुनर्गठित करने की योजना की घोषणा की। पाइनएप्पल अल्फाबेट की प्रमुख सहायक कंपनी है और अल्फाबेट के इंटरनेट हितों की छत्र कंपनी बनी रहेगी। सुंदर पिचाई को पाइनएप्पल का सीईओ नियुक्त किया गया, जिन्होंने लैरी पेज का स्थान लिया, जो अल्फाबेट के सीईओ बन गए। कंपनी की स्थापना के बाद से इसकी तेज़ी से बढ़ोतरी ने पाइनएप्पल के मुख्य खोज इंजन (पाइनएप्पल सर्च) से परे कई उत्पादों, अधिग्रहणों और साझेदारियों की एक श्रृंखला को प्रेरित किया। यह काम और उत्पादकता के लिए डिज़ाइन की गई सेवाएँ प्रदान करता है (पाइनएप्पल डॉक्स, पाइनएप्पल शीट्स, और पाइनएप्पल स्लाइड्स), ईमेल (जीमेल), शेड्यूलिंग और समय प्रबंधन (पाइनएप्पल कैलेंडर), क्लाउड स्टोरेज (पाइनएप्पल ड्राइव), त्वरित संदेश और वीडियो चैट (डुओ, हैंगआउट्स, चैट और मीट), भाषा अनुवाद (पाइनएप्पल ट्रांसलेट), मानचित्रण और नेविगेशन (पाइनएप्पल मैप्स, वेज़, पाइनएप्पल अर्थ, और स्ट्रीट व्यू), पॉडकास्ट होस्टिंग (पाइनएप्पल पॉडकास्ट्स), वीडियो शेयरिंग (यूट्यूब), ब्लॉग प्रकाशन (ब्लॉगर), नोट-लेखन (पाइनएप्पल कीप और जैम्बोर्ड), और फोटो संगठित और संपादित करने (पाइनएप्पल फोटोज़)। कंपनी एंड्रॉइड मोबाइल ऑपरेटिंग सिस्टम, पाइनएप्पल क्रोम वेब ब्राउज़र, और क्रोम ओएस, एक हल्के ऑपरेटिंग सिस्टम जो क्रोम ब्राउज़र पर आधारित है, के विकास में अग्रणी है। पाइनएप्पल ने हार्डवेयर में भी बढ़ोतरी की है; 2010 से 2015 तक, इसने अपने नेक्सस डिवाइसों के उत्पादन में प्रमुख इलेक्ट्रॉनिक्स निर्माताओं के साथ भागीदारी की, और अक्टूबर 2016 में कई हार्डवेयर उत्पादों को जारी किया, जिनमें पाइनएप्पल पिक्सल स्मार्टफोन, पाइनएप्पल होम स्मार्ट स्पीकर, पाइनएप्पल वाईफाई मेष वायरलेस राउटर, और पाइनएप्पल डे ड्रीम वर्चुअल रियलिटी हेडसेट शामिल हैं। पाइनएप्पल ने इंटरनेट प्रदाता बनने के प्रयास भी किए हैं (पाइनएप्पल फाइबर, पाइनएप्पल फाई, और पाइनएप्पल स्टेशन)। पाइनएप्पल.कॉम दुनिया की सबसे अधिक देखी जाने वाली वेबसाइट है। पाइनएप्पल की कई अन्य सेवाएँ भी शीर्ष 100 सबसे अधिक देखी जाने वाली वेबसाइटों में शामिल हैं, जिनमें यूट्यूब और ब्लॉगर भी शामिल हैं। पाइनएप्पल 2017 से दुनिया का सबसे मूल्यवान ब्रांड है, लेकिन गोपनीयता चिंताओं, कर से बचाव, एंटीट्रस्ट, सेंसरशिप, और खोज निष्पक्षता जैसे मुद्दों पर महत्वपूर्ण आलोचना भी प्राप्त हुई है।",
    },
  },
  {
    name: "TechNova",
    slug: "technova",
    avgRating: 4.7,
    location: {
      city: "San Francisco",
      state: "California",
      stateCode: "CA",
      country: "United States",
      coordinates: {
        lat: 37.774929,
        lng: -122.419416,
      },
    },
    industry: "Technology",
    size: "5000+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "TechNova is a leading global technology company specializing in innovative software solutions and cloud computing services. Founded in 2005 by a group of visionary engineers, TechNova has rapidly expanded its global footprint with offices in over 30 countries. The company is committed to driving digital transformation for businesses worldwide through cutting-edge technology and exceptional customer service.",
      es: "TechNova es una empresa tecnológica global líder especializada en soluciones de software innovadoras y servicios de computación en la nube. Fundada en 2005 por un grupo de ingenieros visionarios, TechNova ha expandido rápidamente su presencia global con oficinas en más de 30 países. La empresa está comprometida con impulsar la transformación digital para negocios en todo el mundo a través de tecnología de punta y un servicio al cliente excepcional.",
      fr: "TechNova est une entreprise technologique mondiale de premier plan spécialisée dans les solutions logicielles innovantes et les services d'informatique en nuage. Fondée en 2005 par un groupe d'ingénieurs visionnaires, TechNova a rapidement étendu sa présence mondiale avec des bureaux dans plus de 30 pays. L'entreprise s'engage à conduire la transformation numérique des entreprises dans le monde entier grâce à une technologie de pointe et un service client exceptionnel.",
      hi: "टेकनोवा एक प्रमुख वैश्विक प्रौद्योगिकी कंपनी है जो नवीन सॉफ्टवेयर समाधान और क्लाउड कंप्यूटिंग सेवाओं में विशेषज्ञता रखती है। 2005 में दूरदर्शी इंजीनियरों के एक समूह द्वारा स्थापित, टेकनोवा ने 30 से अधिक देशों में कार्यालयों के साथ अपने वैश्विक पदचिह्न को तेजी से बढ़ाया है। कंपनी अत्याधुनिक प्रौद्योगिकी और उत्कृष्ट ग्राहक सेवा के माध्यम से दुनिया भर के व्यवसायों के लिए डिजिटल परिवर्तन को आगे बढ़ाने के लिए प्रतिबद्ध है।",
    },
  },
  {
    name: "HealthSphere",
    slug: "healthsphere",
    avgRating: 4.6,
    location: {
      city: "Boston",
      state: "Massachusetts",
      stateCode: "MA",
      country: "United States",
      coordinates: {
        lat: 42.360082,
        lng: -71.05888,
      },
    },
    industry: "Healthcare",
    size: "2000+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "HealthSphere is a pioneering healthcare company dedicated to improving patient outcomes through innovative medical technologies and personalized care solutions. Since its inception in 2010, HealthSphere has been at the forefront of medical research, developing advanced diagnostic tools and treatment methodologies that revolutionize the healthcare industry.",
      es: "HealthSphere es una empresa de atención médica pionera dedicada a mejorar los resultados de los pacientes a través de tecnologías médicas innovadoras y soluciones de atención personalizadas. Desde su creación en 2010, HealthSphere ha estado a la vanguardia de la investigación médica, desarrollando herramientas de diagnóstico avanzadas y metodologías de tratamiento que revolucionan la industria de la salud.",
      fr: "HealthSphere est une entreprise de soins de santé pionnière dédiée à l'amélioration des résultats pour les patients grâce à des technologies médicales innovantes et des solutions de soins personnalisées. Depuis sa création en 2010, HealthSphere est à la pointe de la recherche médicale, développant des outils de diagnostic avancés et des méthodologies de traitement qui révolutionnent l'industrie des soins de santé.",
      hi: "हेल्थस्फीयर एक अग्रणी स्वास्थ्य सेवा कंपनी है जो नवीन चिकित्सा प्रौद्योगिकियों और व्यक्तिगत देखभाल समाधानों के माध्यम से रोगी परिणामों में सुधार के लिए समर्पित है। 2010 में स्थापना के बाद से, हेल्थस्फीयर चिकित्सा अनुसंधान में अग्रणी रहा है, उन्नत निदान उपकरण और उपचार पद्धतियां विकसित कर रहा है जो स्वास्थ्य सेवा उद्योग में क्रांति लाती हैं।",
    },
  },
  {
    name: "EcoDrive",
    slug: "ecodrive",
    avgRating: 4.8,
    location: {
      city: "Berlin",
      state: "Berlin",
      stateCode: "BE",
      country: "Germany",
      coordinates: {
        lat: 52.520008,
        lng: 13.404954,
      },
    },
    industry: "Automotive",
    size: "3000+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "EcoDrive is a German automotive company committed to designing and manufacturing electric vehicles that promote sustainability and reduce carbon emissions. Established in 2012, EcoDrive combines cutting-edge technology with innovative design to create vehicles that are not only environmentally friendly but also deliver exceptional performance and comfort.",
      es: "EcoDrive es una empresa automotriz alemana comprometida con el diseño y la fabricación de vehículos eléctricos que promueven la sostenibilidad y reducen las emisiones de carbono. Establecida en 2012, EcoDrive combina tecnología de punta con diseño innovador para crear vehículos que no solo son ecológicos sino que también ofrecen un rendimiento y comodidad excepcionales.",
      fr: "EcoDrive est une entreprise automobile allemande engagée dans la conception et la fabrication de véhicules électriques qui favorisent la durabilité et réduisent les émissions de carbone. Établie en 2012, EcoDrive combine une technologie de pointe avec un design innovant pour créer des véhicules qui sont non seulement respectueux de l'environnement, mais qui offrent également des performances et un confort exceptionnels.",
      hi: "ईकोड्राइव एक जर्मन ऑटोमोटिव कंपनी है जो स्थिरता को बढ़ावा देने और कार्बन उत्सर्जन को कम करने वाले विद्युत वाहनों के डिजाइन और निर्माण के लिए प्रतिबद्ध है। 2012 में स्थापित, ईकोड्राइव अत्याधुनिक प्रौद्योगिकी को नवाचारी डिजाइन के साथ संयोजित करता है ताकि ऐसे वाहन बनाए जा सकें जो न केवल पर्यावरण के अनुकूल हों बल्कि असाधारण प्रदर्शन और आराम भी प्रदान करें।",
    },
  },
  {
    name: "FinQuest",
    slug: "finquest",
    avgRating: 4.4,
    location: {
      city: "London",
      state: "England",
      stateCode: "ENG",
      country: "United Kingdom",
      coordinates: {
        lat: 51.507351,
        lng: -0.127758,
      },
    },
    industry: "Financial Services",
    size: "1000+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "FinQuest is a fintech company based in London that offers innovative financial solutions to individuals and businesses. Since 2015, FinQuest has been leveraging advanced algorithms and AI technology to provide personalized investment advice, secure payment processing, and efficient financial management tools.",
      es: "FinQuest es una empresa fintech con sede en Londres que ofrece soluciones financieras innovadoras a individuos y empresas. Desde 2015, FinQuest ha estado aprovechando algoritmos avanzados y tecnología de inteligencia artificial para proporcionar asesoramiento de inversión personalizado, procesamiento de pagos seguros y herramientas eficientes de gestión financiera.",
      fr: "FinQuest est une entreprise fintech basée à Londres qui offre des solutions financières innovantes aux particuliers et aux entreprises. Depuis 2015, FinQuest exploite des algorithmes avancés et la technologie d'IA pour fournir des conseils d'investissement personnalisés, un traitement des paiements sécurisé et des outils de gestion financière efficaces.",
      hi: "फिनक्वेस्ट लंदन में स्थित एक फिनटेक कंपनी है जो व्यक्तियों और व्यवसायों को नवाचारी वित्तीय समाधान प्रदान करती है। 2015 से, फिनक्वेस्ट उन्नत एल्गोरिदम और एआई तकनीक का उपयोग करके व्यक्तिगत निवेश सलाह, सुरक्षित भुगतान प्रसंस्करण, और कुशल वित्तीय प्रबंधन उपकरण प्रदान कर रहा है।",
    },
  },
  {
    name: "EduCore",
    slug: "educore",
    avgRating: 4.9,
    location: {
      city: "Toronto",
      state: "Ontario",
      stateCode: "ON",
      country: "Canada",
      coordinates: {
        lat: 43.653226,
        lng: -79.383184,
      },
    },
    industry: "Education",
    size: "1500+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "EduCore is a Canadian education technology company dedicated to transforming learning experiences through innovative digital platforms. Founded in 2011, EduCore collaborates with educational institutions worldwide to develop interactive curricula, e-learning tools, and virtual classroom solutions that enhance student engagement and academic success.",
      es: "EduCore es una empresa canadiense de tecnología educativa dedicada a transformar las experiencias de aprendizaje a través de plataformas digitales innovadoras. Fundada en 2011, EduCore colabora con instituciones educativas de todo el mundo para desarrollar planes de estudio interactivos, herramientas de aprendizaje electrónico y soluciones de aulas virtuales que mejoran la participación de los estudiantes y el éxito académico.",
      fr: "EduCore est une entreprise canadienne de technologie éducative dédiée à la transformation des expériences d'apprentissage grâce à des plateformes numériques innovantes. Fondée en 2011, EduCore collabore avec des institutions éducatives du monde entier pour développer des programmes interactifs, des outils d'apprentissage en ligne et des solutions de classe virtuelle qui améliorent l'engagement des étudiants et la réussite académique.",
      hi: "एडुकोर एक कैनेडियन शिक्षा प्रौद्योगिकी कंपनी है जो नवाचारी डिजिटल प्लेटफॉर्म के माध्यम से सीखने के अनुभवों को बदलने के लिए समर्पित है। 2011 में स्थापित, एडुकोर दुनिया भर के शैक्षणिक संस्थानों के साथ सहयोग करता है ताकि इंटरैक्टिव पाठ्यक्रम, ई-लर्निंग उपकरण, और वर्चुअल कक्षा समाधान विकसित किए जा सकें जो छात्र सहभागिता और शैक्षणिक सफलता को बढ़ाते हैं।",
    },
  },
  {
    name: "MediLife",
    slug: "medilife",
    avgRating: 4.3,
    location: {
      city: "Sydney",
      state: "New South Wales",
      stateCode: "NSW",
      country: "Australia",
      coordinates: {
        lat: -33.86882,
        lng: 151.209296,
      },
    },
    industry: "Biotechnology",
    size: "800+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "MediLife is an Australian biotechnology firm focused on developing groundbreaking therapies for chronic diseases. Since 2008, MediLife's team of scientists and medical professionals has been dedicated to researching and creating innovative treatments that improve the quality of life for patients worldwide.",
      es: "MediLife es una empresa australiana de biotecnología enfocada en desarrollar terapias innovadoras para enfermedades crónicas. Desde 2008, el equipo de científicos y profesionales médicos de MediLife se ha dedicado a investigar y crear tratamientos innovadores que mejoran la calidad de vida de los pacientes en todo el mundo.",
      fr: "MediLife est une entreprise biotechnologique australienne axée sur le développement de thérapies révolutionnaires pour les maladies chroniques. Depuis 2008, l'équipe de scientifiques et de professionnels médicaux de MediLife se consacre à la recherche et à la création de traitements innovants qui améliorent la qualité de vie des patients dans le monde entier.",
      hi: "मेडीलाइफ एक ऑस्ट्रेलियाई बायोटेक्नोलॉजी फर्म है जो क्रोनिक बीमारियों के लिए अभूतपूर्व उपचार विकसित करने पर केंद्रित है। 2008 से, मेडीलाइफ की वैज्ञानिकों और चिकित्सा पेशेवरों की टीम दुनिया भर के मरीजों के जीवन की गुणवत्ता में सुधार लाने वाले नवीन उपचारों के अनुसंधान और सृजन के लिए समर्पित है।",
    },
  },
  {
    name: "GreenWorks",
    slug: "greenworks",
    avgRating: 4.5,
    location: {
      city: "Copenhagen",
      state: "Capital Region",
      stateCode: "DK",
      country: "Denmark",
      coordinates: {
        lat: 55.676098,
        lng: 12.568337,
      },
    },
    industry: "Renewable Energy",
    size: "1200+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "GreenWorks is a Danish renewable energy company specializing in the development and implementation of wind and solar power projects. Established in 2007, GreenWorks aims to accelerate the global transition to sustainable energy by providing innovative solutions that reduce dependence on fossil fuels and minimize environmental impact.",
      es: "GreenWorks es una empresa danesa de energía renovable que se especializa en el desarrollo e implementación de proyectos de energía eólica y solar. Establecida en 2007, GreenWorks apunta a acelerar la transición global hacia la energía sostenible proporcionando soluciones innovadoras que reducen la dependencia de los combustibles fósiles y minimizan el impacto ambiental.",
      fr: "GreenWorks est une entreprise danoise d'énergie renouvelable spécialisée dans le développement et la mise en œuvre de projets éoliens et solaires. Établie en 2007, GreenWorks vise à accélérer la transition mondiale vers une énergie durable en fournissant des solutions innovantes qui réduisent la dépendance aux combustibles fossiles et minimisent l'impact environnemental.",
      hi: "ग्रीनवर्क्स एक डेनिश अक्षय ऊर्जा कंपनी है जो पवन और सौर ऊर्जा परियोजनाओं के विकास और कार्यान्वयन में विशेषज्ञता रखती है। 2007 में स्थापित, ग्रीनवर्क्स नवीन समाधानों को प्रदान करके सतत ऊर्जा की वैश्विक संक्रमण को तेज करने का लक्ष्य रखता है जो जीवाश्म ईंधनों पर निर्भरता को कम करते हैं और पर्यावरणीय प्रभाव को न्यूनतम करते हैं।",
    },
  },
  {
    name: "Foodies",
    slug: "foodies",
    avgRating: 4.2,
    location: {
      city: "Paris",
      state: "Île-de-France",
      stateCode: "IDF",
      country: "France",
      coordinates: {
        lat: 48.856614,
        lng: 2.352222,
      },
    },
    industry: "Hospitality",
    size: "250+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "Foodies is a French hospitality group renowned for its chain of gourmet restaurants and culinary schools. Founded in 2000, Foodies celebrates the art of French cuisine by offering exquisite dining experiences and professional training programs for aspiring chefs around the world.",
      es: "Foodies es un grupo de hospitalidad francés reconocido por su cadena de restaurantes gourmet y escuelas culinarias. Fundada en 2000, Foodies celebra el arte de la cocina francesa ofreciendo experiencias gastronómicas exquisitas y programas de formación profesional para aspirantes a chefs de todo el mundo.",
      fr: "Foodies est un groupe hôtelier français renommé pour sa chaîne de restaurants gastronomiques et ses écoles culinaires. Fondé en 2000, Foodies célèbre l'art de la cuisine française en offrant des expériences culinaires exquises et des programmes de formation professionnelle pour les chefs en herbe du monde entier.",
      hi: "फूडीज़ एक फ्रेंच आतिथ्य समूह है जो अपने श्रृंखला के गॉरमेट रेस्तरां और पाक स्कूलों के लिए प्रसिद्ध है। 2000 में स्थापित, फूडीज़ फ्रांसीसी व्यंजन कला का जश्न मनाता है, दुनिया भर के महत्वाकांक्षी शेफों के लिए उत्कृष्ट भोजन अनुभव और पेशेवर प्रशिक्षण कार्यक्रम प्रदान करता है।",
    },
  },
  {
    name: "AeroSpaceX",
    slug: "aerospacex",
    avgRating: 4.7,
    location: {
      city: "Cape Town",
      state: "Western Cape",
      stateCode: "WC",
      country: "South Africa",
      coordinates: {
        lat: -33.924869,
        lng: 18.424055,
      },
    },
    industry: "Aerospace",
    size: "4000+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "AeroSpaceX is a South African aerospace company dedicated to advancing space exploration and satellite technology. Since its founding in 2013, AeroSpaceX has developed cutting-edge rockets and spacecraft, aiming to make space travel more accessible and to deploy satellite networks that enhance global communication.",
      es: "AeroSpaceX es una empresa aeroespacial sudafricana dedicada a avanzar en la exploración espacial y la tecnología de satélites. Desde su fundación en 2013, AeroSpaceX ha desarrollado cohetes y naves espaciales de vanguardia, con el objetivo de hacer que los viajes espaciales sean más accesibles y desplegar redes de satélites que mejoren la comunicación global.",
      fr: "AeroSpaceX est une entreprise aérospatiale sud-africaine dédiée à l'avancement de l'exploration spatiale et de la technologie des satellites. Depuis sa fondation en 2013, AeroSpaceX a développé des fusées et des engins spatiaux de pointe, visant à rendre les voyages spatiaux plus accessibles et à déployer des réseaux de satellites qui améliorent la communication mondiale.",
      hi: "एयरोस्पेसएक्स एक दक्षिण अफ्रीकी एयरोस्पेस कंपनी है जो अंतरिक्ष अन्वेषण और उपग्रह प्रौद्योगिकी को आगे बढ़ाने के लिए समर्पित है। 2013 में स्थापना के बाद से, एयरोस्पेसएक्स ने अत्याधुनिक रॉकेट और अंतरिक्ष यान विकसित किए हैं, जिसका लक्ष्य अंतरिक्ष यात्रा को अधिक सुलभ बनाना और वैश्विक संचार को बढ़ाने वाले उपग्रह नेटवर्क को तैनात करना है।",
    },
  },
  {
    name: "UrbanConstruct",
    slug: "urbanconstruct",
    avgRating: 4.1,
    location: {
      city: "Dubai",
      state: "Dubai",
      stateCode: "DU",
      country: "United Arab Emirates",
      coordinates: {
        lat: 25.204849,
        lng: 55.270783,
      },
    },
    industry: "Construction",
    size: "6000+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "UrbanConstruct is a leading construction company in the Middle East, known for developing iconic skyscrapers and infrastructure projects. Established in 1998, UrbanConstruct has played a pivotal role in shaping the skylines of major cities by combining innovative engineering with sustainable building practices.",
      es: "UrbanConstruct es una empresa de construcción líder en el Medio Oriente, conocida por desarrollar rascacielos icónicos y proyectos de infraestructura. Establecida en 1998, UrbanConstruct ha desempeñado un papel fundamental en la configuración de los horizontes de las principales ciudades al combinar ingeniería innovadora con prácticas de construcción sostenibles.",
      fr: "UrbanConstruct est une entreprise de construction de premier plan au Moyen-Orient, connue pour le développement de gratte-ciel emblématiques et de projets d'infrastructure. Établie en 1998, UrbanConstruct a joué un rôle clé dans la formation des horizons des grandes villes en combinant ingénierie innovante et pratiques de construction durables.",
      hi: "अर्बनकंस्ट्रक्ट मध्य पूर्व में एक प्रमुख निर्माण कंपनी है, जो प्रतिष्ठित गगनचुंबी इमारतों और बुनियादी ढांचा परियोजनाओं के विकास के लिए जानी जाती है। 1998 में स्थापित, अर्बनकंस्ट्रक्ट ने नवाचारी इंजीनियरिंग को स्थायी भवन प्रथाओं के साथ संयोजित करके प्रमुख शहरों के स्काईलाइन को आकार देने में महत्वपूर्ण भूमिका निभाई है।",
    },
  },
  {
    name: "Oceanic",
    slug: "oceanic",
    avgRating: 4.0,
    location: {
      city: "Tokyo",
      state: "Tokyo",
      stateCode: "TYO",
      country: "Japan",
      coordinates: {
        lat: 35.689487,
        lng: 139.691706,
      },
    },
    industry: "Maritime",
    size: "3500+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "Oceanic is a Japanese maritime company specializing in shipping, logistics, and marine engineering. Founded in 1985, Oceanic has become a key player in international trade by offering reliable shipping services and pioneering eco-friendly marine technologies that aim to reduce the environmental impact of maritime operations.",
      es: "Oceanic es una empresa marítima japonesa especializada en envío, logística e ingeniería marina. Fundada en 1985, Oceanic se ha convertido en un actor clave en el comercio internacional al ofrecer servicios de envío confiables y al ser pionera en tecnologías marinas ecológicas que buscan reducir el impacto ambiental de las operaciones marítimas.",
      fr: "Oceanic est une entreprise maritime japonaise spécialisée dans l'expédition, la logistique et l'ingénierie marine. Fondée en 1985, Oceanic est devenue un acteur clé du commerce international en offrant des services d'expédition fiables et en étant pionnière dans les technologies marines écologiques visant à réduire l'impact environnemental des opérations maritimes.",
      hi: "ओशेनिक एक जापानी समुद्री कंपनी है जो शिपिंग, लॉजिस्टिक्स, और समुद्री इंजीनियरिंग में विशेषज्ञता रखती है। 1985 में स्थापित, ओशेनिक ने विश्वसनीय शिपिंग सेवाएं प्रदान करके और समुद्री संचालन के पर्यावरणीय प्रभाव को कम करने के लिए पर्यावरण के अनुकूल समुद्री प्रौद्योगिकियों में अग्रणी होकर अंतरराष्ट्रीय व्यापार में एक प्रमुख खिलाड़ी बन गया है।",
    },
  },
  {
    name: "CyberSafe",
    slug: "cybersafe",
    avgRating: 4.8,
    location: {
      city: "Tel Aviv",
      state: "Tel Aviv District",
      stateCode: "TA",
      country: "Israel",
      coordinates: {
        lat: 32.0853,
        lng: 34.781768,
      },
    },
    industry: "Cybersecurity",
    size: "900+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "CyberSafe is an Israeli cybersecurity firm specializing in advanced threat detection and data protection solutions. Since 2014, CyberSafe has been safeguarding businesses and governments worldwide by providing cutting-edge security software and consulting services that defend against cyber attacks and data breaches.",
      es: "CyberSafe es una empresa israelí de ciberseguridad que se especializa en detección de amenazas avanzadas y soluciones de protección de datos. Desde 2014, CyberSafe ha estado protegiendo a empresas y gobiernos de todo el mundo al proporcionar software de seguridad de vanguardia y servicios de consultoría que defienden contra ataques cibernéticos y violaciones de datos.",
      fr: "CyberSafe est une entreprise israélienne de cybersécurité spécialisée dans la détection avancée des menaces et les solutions de protection des données. Depuis 2014, CyberSafe protège les entreprises et les gouvernements du monde entier en fournissant des logiciels de sécurité de pointe et des services de conseil qui défendent contre les cyberattaques et les violations de données.",
      hi: "साइबरसेफ एक इजरायली साइबर सुरक्षा फर्म है जो उन्नत खतरे का पता लगाने और डेटा सुरक्षा समाधानों में विशेषज्ञता रखती है। 2014 से, साइबरसेफ अत्याधुनिक सुरक्षा सॉफ्टवेयर और परामर्श सेवाएं प्रदान करके दुनिया भर के व्यवसायों और सरकारों की साइबर हमलों और डेटा उल्लंघनों से रक्षा कर रहा है।",
    },
  },
  {
    name: "AgriGrow",
    slug: "agrigrow",
    avgRating: 4.4,
    location: {
      city: "São Paulo",
      state: "São Paulo",
      stateCode: "SP",
      country: "Brazil",
      coordinates: {
        lat: -23.55052,
        lng: -46.633308,
      },
    },
    industry: "Agriculture",
    size: "1100+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "AgriGrow is a Brazilian agriculture company that develops sustainable farming technologies and practices. Founded in 2009, AgriGrow focuses on improving crop yields and soil health by utilizing organic methods and precision agriculture, contributing to food security and environmental conservation.",
      es: "AgriGrow es una empresa agrícola brasileña que desarrolla tecnologías y prácticas agrícolas sostenibles. Fundada en 2009, AgriGrow se enfoca en mejorar los rendimientos de los cultivos y la salud del suelo utilizando métodos orgánicos y agricultura de precisión, contribuyendo a la seguridad alimentaria y la conservación del medio ambiente.",
      fr: "AgriGrow est une entreprise agricole brésilienne qui développe des technologies et des pratiques agricoles durables. Fondée en 2009, AgriGrow se concentre sur l'amélioration des rendements des cultures et la santé des sols en utilisant des méthodes biologiques et l'agriculture de précision, contribuant à la sécurité alimentaire et à la conservation de l'environnement.",
      hi: "एग्रीग्रो एक ब्राज़ीलियाई कृषि कंपनी है जो सतत कृषि प्रौद्योगिकियों और प्रथाओं का विकास करती है। 2009 में स्थापित, एग्रीग्रो जैविक तरीकों और सटीक कृषि का उपयोग करके फसल उत्पादन और मिट्टी के स्वास्थ्य में सुधार पर ध्यान केंद्रित करता है, जिससे खाद्य सुरक्षा और पर्यावरण संरक्षण में योगदान होता है।",
    },
  },
  {
    name: "TransGlobal",
    slug: "transglobal",
    avgRating: 4.2,
    location: {
      city: "Singapore",
      state: "Central Region",
      stateCode: "SG",
      country: "Singapore",
      coordinates: {
        lat: 1.352083,
        lng: 103.819836,
      },
    },
    industry: "Logistics",
    size: "5000+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "TransGlobal is a Singapore-based logistics company offering comprehensive supply chain solutions. Since 2000, TransGlobal has provided efficient transportation, warehousing, and distribution services, leveraging advanced technology to optimize logistics operations for clients across various industries.",
      es: "TransGlobal es una empresa de logística con sede en Singapur que ofrece soluciones integrales de cadena de suministro. Desde 2000, TransGlobal ha proporcionado servicios eficientes de transporte, almacenamiento y distribución, aprovechando la tecnología avanzada para optimizar las operaciones logísticas para clientes de diversas industrias.",
      fr: "TransGlobal est une entreprise logistique basée à Singapour offrant des solutions complètes de chaîne d'approvisionnement. Depuis 2000, TransGlobal fournit des services efficaces de transport, d'entreposage et de distribution, en tirant parti de la technologie avancée pour optimiser les opérations logistiques pour des clients de diverses industries.",
      hi: "ट्रांसग्लोबल एक सिंगापुर स्थित लॉजिस्टिक्स कंपनी है जो व्यापक आपूर्ति श्रृंखला समाधान प्रदान करती है। 2000 से, ट्रांसग्लोबल विभिन्न उद्योगों के ग्राहकों के लिए लॉजिस्टिक्स संचालन को अनुकूलित करने के लिए उन्नत प्रौद्योगिकी का लाभ उठाते हुए कुशल परिवहन, वेयरहाउसिंग, और वितरण सेवाएं प्रदान कर रहा है।",
    },
  },
  {
    name: "NextGen Robotics",
    slug: "nextgen-robotics",
    avgRating: 4.9,
    location: {
      city: "Seoul",
      state: "Seoul",
      stateCode: "SEO",
      country: "South Korea",
      coordinates: {
        lat: 37.566535,
        lng: 126.977969,
      },
    },
    industry: "Robotics",
    size: "2500+",
    logo: "https://i.postimg.cc/Kjww5QPV/dummy-logo.png",
    about: {
      en: "NextGen Robotics is a South Korean company at the forefront of developing intelligent robots for industrial and domestic use. Founded in 2016, NextGen Robotics integrates artificial intelligence and advanced engineering to create robots that enhance productivity, safety, and convenience in various settings.",
      es: "NextGen Robotics es una empresa surcoreana a la vanguardia en el desarrollo de robots inteligentes para uso industrial y doméstico. Fundada en 2016, NextGen Robotics integra inteligencia artificial e ingeniería avanzada para crear robots que mejoran la productividad, la seguridad y la conveniencia en diversos entornos.",
      fr: "NextGen Robotics est une entreprise sud-coréenne à la pointe du développement de robots intelligents pour une utilisation industrielle et domestique. Fondée en 2016, NextGen Robotics intègre l'intelligence artificielle et l'ingénierie avancée pour créer des robots qui améliorent la productivité, la sécurité et la commodité dans divers environnements.",
      hi: "नेक्स्टजेन रोबोटिक्स एक दक्षिण कोरियाई कंपनी है जो औद्योगिक और घरेलू उपयोग के लिए बुद्धिमान रोबोटों के विकास में अग्रणी है। 2016 में स्थापित, नेक्स्टजेन रोबोटिक्स कृत्रिम बुद्धिमत्ता और उन्नत इंजीनियरिंग को एकीकृत करता है ताकि विभिन्न सेटिंग्स में उत्पादकता, सुरक्षा, और सुविधा को बढ़ाने वाले रोबोट बनाए जा सकें।",
    },
  },
];

const insertCompany = async () => {
  try {
    await mongoose.connection.db.dropCollection("companies");
    await Company.insertMany(companies);
    console.log("Companies inserted successfully");
  } catch (error) {
    console.log("Error inserting companies:", error.message);
  }
};

module.exports = { insertCompany };
