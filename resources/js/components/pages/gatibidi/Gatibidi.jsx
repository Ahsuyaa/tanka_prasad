import React from 'react'
import img1 from "../../../images/img.jpg"
import StartingBanner from '../../forAll/StartingBanner';
import LinksSection from '../../forAll/LinksSection';
const Gatibidi = () => {
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
  return (
    <>
      <StartingBanner imageUrl={img1} text="गतिबिधिs"/>
      <div className='grid grid-cols-3'>
    <div className='container mx-auto my-5 col-span-2'>
      {cardData.map((card, index) => (
    <div className="flex gap-5 m-4">
    <div>
      <img src={img1} alt="img" className="h-[200px] w-[300px] object-cover" />
    </div>
    <div className="">
      <h4 className="font-semibold">{card.title}</h4>
      <p>{card.description}</p>
     
    </div>
  </div>
      ))}
     </div>
     <LinksSection/>
  </div>
  </>
  )
  
}

export default Gatibidi