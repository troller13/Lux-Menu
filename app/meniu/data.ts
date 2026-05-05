export type Diet = "veg" | "vegan" | "gf" | "spicy";

export type Item = {
  name: string;
  desc: string;
  price: string;
  signature?: boolean;
  diet?: Diet[];
};

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  items: Item[];
};

export const categories: Category[] = [
  {
    id: "aperitive",
    title: "Aperitive de țară",
    subtitle: "Gustări reci, perfecte pentru un pahar de vin alb sec.",
    img: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1100&q=80",
    items: [
      {
        name: "Platou boieresc",
        desc: "Brânză de oi, slănină afumată, ouă de prepeliță, telemea, ardei copt, pâine de casă.",
        price: "320 lei",
        signature: true,
        diet: ["gf"]
      },
      {
        name: "Răcituri de cocoș",
        desc: "Răcituri tradiționale cu carne fragedă, usturoi pisat și hrean proaspăt.",
        price: "180 lei",
        diet: ["gf"]
      },
      {
        name: "Salată de vinete cu nucă",
        desc: "Vinete coapte pe lemn, ulei de floarea-soarelui, nucă măcinată și ceapă roșie.",
        price: "140 lei",
        diet: ["veg", "vegan", "gf"]
      },
      {
        name: "Brânză frământată cu mărar",
        desc: "Brânză proaspătă de la stâna familiei Curecheriu, mărar verde, smântână grasă.",
        price: "120 lei",
        diet: ["veg", "gf"]
      }
    ]
  },
  {
    id: "placinte",
    title: "Plăcinte de pe vatră",
    subtitle: "Foi întinse manual, coapte pe vatră de pământ.",
    img: "https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?auto=format&fit=crop&w=1100&q=80",
    items: [
      {
        name: "Plăcinte cu brânză",
        desc: "Brânză proaspătă de oi, mărar verde, ulei de floarea-soarelui presat la rece.",
        price: "120 lei",
        signature: true,
        diet: ["veg"]
      },
      {
        name: "Plăcinte cu varză",
        desc: "Varză călită cu ceapă caramelizată și piper negru proaspăt măcinat.",
        price: "110 lei",
        diet: ["veg", "vegan"]
      },
      {
        name: "Plăcinte cu cartofi",
        desc: "Pireu de cartofi cu unt de țară, ceapă verde și cașcaval afumat.",
        price: "110 lei",
        diet: ["veg"]
      },
      {
        name: "Vârzare cu dovleac",
        desc: "Plăcintă dulce cu dovleac copt, scorțișoară, miere de salcâm și nucă.",
        price: "130 lei",
        diet: ["veg"]
      }
    ]
  },
  {
    id: "supe",
    title: "Supe & Zămuri",
    subtitle: "Reconfortante, pregătite zilnic la oală de tuci.",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=80",
    items: [
      {
        name: "Zeamă de cocoș",
        desc: "Zeamă acrită cu borș de putină, tăieței de casă, leuștean și smântână.",
        price: "160 lei",
        signature: true
      },
      {
        name: "Ciorbă de burtă",
        desc: "Burtă fragedă, smântână bătută cu gălbenuș, oțet și ardei iute la cerere.",
        price: "180 lei",
        diet: ["spicy"]
      },
      {
        name: "Ciorbă rădăuțeană",
        desc: "Ciorbă cremoasă cu piept de pui, usturoi, smântână și o lingură de ardei copt.",
        price: "150 lei"
      },
      {
        name: "Borș de pește",
        desc: "Pește proaspăt din Nistru, legume rădăcinoase, leuștean și mămăliguță.",
        price: "190 lei",
        diet: ["gf"]
      }
    ]
  },
  {
    id: "sarmale",
    title: "Sarmale & Mămăligi",
    subtitle: "Inima bucătăriei moldovenești.",
    img: "https://images.unsplash.com/photo-1604908554007-9caea3e1d8c8?auto=format&fit=crop&w=1100&q=80",
    items: [
      {
        name: "Sarmale boierești",
        desc: "În foi de viță, vițel fraged, orez aromat, mămăliguță și smântână de țară.",
        price: "320 lei",
        signature: true,
        diet: ["gf"]
      },
      {
        name: "Sarmale în foi de varză",
        desc: "Rețetă tradițională, fierte la cuptor cu lemn, cu afumătură de casă.",
        price: "290 lei",
        diet: ["gf"]
      },
      {
        name: "Mămăligă cu brânză și jumări",
        desc: "Mălai de țară, brânză frământată, jumări crocante, smântână.",
        price: "240 lei",
        diet: ["gf"]
      },
      {
        name: "Mămăligă cu pui la ceaun",
        desc: "Bucăți de pui rumenite în ceaun, mujdei de usturoi, mărar proaspăt.",
        price: "260 lei",
        diet: ["gf"]
      }
    ]
  },
  {
    id: "friptura",
    title: "Friptură & Grătar",
    subtitle: "Carne maturată, gătită lent pe lemn de fag.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1100&q=80",
    items: [
      {
        name: "Friptură de purcel cu vin de Purcari",
        desc: "Pulpă fragedă coaptă lent cu vin alb, rozmarin, cartofi noi.",
        price: "420 lei",
        signature: true,
        diet: ["gf"]
      },
      {
        name: "Mușchi de vită maturat",
        desc: "Servit cu legume coapte și sos de hribi de pădure.",
        price: "490 lei",
        diet: ["gf"]
      },
      {
        name: "Mititei de casă",
        desc: "Amestec tradițional de vită și miel, muștar de Tecuci, pâine cu seminte.",
        price: "260 lei",
        diet: ["spicy"]
      },
      {
        name: "Tochitură moldovenească",
        desc: "Carne de porc, afumătură, ou ochi, mămăliguță rumenită.",
        price: "310 lei",
        diet: ["gf"]
      }
    ]
  },
  {
    id: "deserturi",
    title: "Deserturi de odinioară",
    subtitle: "Dulciuri din rețetar de familie.",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1100&q=80",
    items: [
      {
        name: "Plăcinte cu vișine",
        desc: "Cu vișine din livada bunicii, scorțișoară și zahăr pudră.",
        price: "130 lei",
        signature: true,
        diet: ["veg"]
      },
      {
        name: "Cozonac cu nucă și rahat",
        desc: "Aluat dospit lent, umplut bogat, copt în formă de lut.",
        price: "150 lei",
        diet: ["veg"]
      },
      {
        name: "Papanași cu dulceață de trandafiri",
        desc: "Papanași prăjiți, smântână bătută, dulceață rară de trandafiri de Damasc.",
        price: "160 lei",
        diet: ["veg"]
      },
      {
        name: "Înghețată de casă cu miere",
        desc: "Înghețată din lapte de la stână, miere de salcâm, fistic.",
        price: "120 lei",
        diet: ["veg", "gf"]
      }
    ]
  },
  {
    id: "vinuri",
    title: "Vinuri & Băuturi",
    subtitle: "Selecție din podgoriile Moldovei.",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1100&q=80",
    items: [
      {
        name: "Cricova — Negru de Purcari",
        desc: "Cabernet, Saperavi, Rara Neagră — învechit în baricuri de stejar.",
        price: "780 lei",
        signature: true
      },
      {
        name: "Mileștii Mici — Fetească Albă",
        desc: "Vin alb sec, flori de tei, măr verde, recolta 2021.",
        price: "520 lei"
      },
      {
        name: "Castel Mimi — Rosé",
        desc: "Aromă de zmeură, finisaj fin, perfect pentru vară.",
        price: "480 lei"
      },
      {
        name: "Țuică de prune de Strășeni",
        desc: "Distilată în alambic de cupru, învechită 5 ani.",
        price: "60 lei / 50 ml"
      }
    ]
  }
];

export const dietLabel: Record<Diet, string> = {
  veg: "Vegetarian",
  vegan: "Vegan",
  gf: "Fără gluten",
  spicy: "Picant"
};

export const dietBadgeClass: Record<Diet, string> = {
  veg: "border-emerald-500/40 text-emerald-300",
  vegan: "border-green-500/40 text-green-300",
  gf: "border-sky-500/40 text-sky-300",
  spicy: "border-red-500/40 text-red-300"
};
