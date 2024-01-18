import React from "react";
import NewsCard from "./NewsCard";
import RelatedNewsCard from "./RelatedNewsCard";
import img1 from "../../../../images/forAll/birds.jpg";

const News = () => {
  const cardData = [
    { img: img1, title: "ख्यातिप्राप्त विभिन्न राष्ट्रहरुसित घनिष्ठ मैत्रीसम्बन्ध कायम गरि नेपालको स्वतन्त्र अस्तित्वको चिनारी विश्व सामु दिए ।", description: "Description 1" },
    { img: img1, title: "ख्यातिप्राप्त विभिन्न राष्ट्रहरुसित घनिष्ठ मैत्रीसम्बन्ध कायम गरि नेपालको स्वतन्त्र अस्तित्वको चिनारी विश्व सामु दिए ।", description: "Description 2" },
    { img: img1, title: "ख्यातिप्राप्त विभिन्न राष्ट्रहरुसित घनिष्ठ मैत्रीसम्बन्ध कायम गरि नेपालको स्वतन्त्र अस्तित्वको चिनारी विश्व सामु दिए ।", description: "Description 3" },
    { img: img1, title: "ख्यातिप्राप्त विभिन्न राष्ट्रहरुसित घनिष्ठ मैत्रीसम्बन्ध कायम गरि नेपालको स्वतन्त्र अस्तित्वको चिनारी विश्व सामु दिए ।", description: "Description 4" },
    { img: img1, title: "ख्यातिप्राप्त विभिन्न राष्ट्रहरुसित घनिष्ठ मैत्रीसम्बन्ध कायम गरि नेपालको स्वतन्त्र अस्तित्वको चिनारी विश्व सामु दिए ।", description: "Description 5" },
    { img: img1, title: "ख्यातिप्राप्त विभिन्न राष्ट्रहरुसित घनिष्ठ मैत्रीसम्बन्ध कायम गरि नेपालको स्वतन्त्र अस्तित्वको चिनारी विश्व सामु दिए ।", description: "Description 6" },
    { img: img1, title: "ख्यातिप्राप्त विभिन्न राष्ट्रहरुसित घनिष्ठ मैत्रीसम्बन्ध कायम गरि नेपालको स्वतन्त्र अस्तित्वको चिनारी विश्व सामु दिए ।", description: "Description 7" },
    { img: img1, title: "ख्यातिप्राप्त विभिन्न राष्ट्रहरुसित घनिष्ठ मैत्रीसम्बन्ध कायम गरि नेपालको स्वतन्त्र अस्तित्वको चिनारी विश्व सामु दिए ।", description: "Description 8" },
  ];

  // Select the first 4 items for NewCard and the next 5 items for RelatedNewsCard
  const newCardData = cardData.slice(0, 4);
  const relatedNewsCardData = cardData.slice(4, 9);

  return (
    <div className="mx-auto container my-20">
          <h2 className='text-center text-4xl font-semibold my-10]'>न्यूजहरु</h2>
      <div className="grid lg:grid-cols-3 gap-5 mt-10">
        <div className="grid grid-cols-3 lg:col-span-2 gap-5">
          {newCardData.map((card, index) => (
            <div key={index} className={`${index === 0 ? 'col-span-3 w-full' :'col-span-1'}`}>
              <NewsCard
                img={card.img}
                title={card.title}
                description={card.description}
              />
         
            </div>
          ))}
        </div>

        <div className="">
          {relatedNewsCardData.map((card, index) => (
            <RelatedNewsCard
              key={index}
              img={card.img}
              title={card.title}
              description={card.description}
            />
          ))}
          <div>
            <button className="py-2 px-3 text-white font-bold  inline-flex bg-[#003893] my-2">
                view all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
