import React from 'react'
import img from "../../../images/forAll/birds.jpg"
import StartingBanner from '../../forAll/StartingBanner'
import LinksSection from '../../forAll/LinksSection';
const Pustakalaya = () => {
  const images = [
 img,
    img,
    img,
    // Add more image sources as needed
  ];
  return (
   <>
   <StartingBanner imageUrl={img} text="पुस्तकालय"/>
   <div className='container mx-auto grid grid-cols-3 gap-5'>
    
 
    
     <div className='my-10  text-justify col-span-2'>
        <h2 className='text-2xl my-2'>पुस्तकालय</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, vitae dolor unde corrupti ullam maxime animi dicta tempora aliquid atque obcaecati quae ad quibusdam. Expedita, mollitia ipsam. Inventore quae, consequuntur exercitationem odio corrupti tempore nesciunt quidem. Minus sit officiis harum, corrupti ratione dicta distinctio qui reprehenderit odit optio veritatis praesentium expedita excepturi molestias explicabo omnis consequuntur magnam. Cumque repellendus rerum et incidunt, doloribus laboriosam molestiae, nisi, tempora nulla ducimus perferendis modi fugit pariatur neque velit tenetur? Suscipit possimus eveniet impedit quas vel illo a, aspernatur, dolorum quasi omnis nemo nisi eius odit? Veniam a fuga debitis voluptas soluta. Incidunt vel rem deserunt placeat similique vitae modi, reprehenderit dignissimos quibusdam optio voluptates ipsam porro atque possimus aperiam voluptatibus? Repellendus, amet? Perferendis voluptatibus eveniet ducimus sint cumque, laudantium fugiat unde minus facilis! Quos rem, accusantium adipisci accusamus delectus ratione voluptatum voluptates, vitae suscipit est sed odio doloribus, voluptatibus natus sequi ipsa dolor deleniti totam et fugiat nemo tenetur eveniet distinctio. Eum quo explicabo repellendus ex esse dolorum dolorem quos nemo placeat doloribus excepturi mollitia sed cumque omnis nesciunt ratione error harum maiores magnam cupiditate dolores possimus, recusandae veniam quod? Ab, officia, molestias fuga et, voluptate itaque delectus sunt unde odit eius porro.</p>
        <div className='grid grid-cols-3 gap-5 my-5 '>
      {images.map((imgSrc, index) => (
        <img key={index} src={imgSrc} alt={`img ${index + 1}`} className='h-[200px]' />
      ))}
    </div>
     </div>
     <LinksSection/>
 
   </div>
   </>
  )
}

export default Pustakalaya