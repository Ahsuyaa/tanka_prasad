import React from 'react'
import img from "../../../images/forAll/birds.jpg"
import StartingBanner from '../../forAll/StartingBanner'
const Pratisthan = () => {
  return (
   <>
   <StartingBanner imageUrl={img} text="प्रतिष्ठान"/>
   <div className='container mx-auto'>
    <div className='my-5 grid grid-cols-3 gap-5'>
     <p className='text-justify col-span-2 '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odio doloribus velit saepe minima recusandae, eligendi quas optio nisi quasi et illum odit in laudantium error placeat molestias accusamus officia, aut mollitia pariatur beatae quae! Quas expedita esse ipsa magnam animi nulla quia officiis veniam suscipit incidunt quae, voluptatibus saepe. Expedita dolores molestiae velit culpa quae explicabo assumenda voluptates ipsum eos est, maiores laboriosam! Recusandae, consequatur. In voluptate ipsa dicta, molestias dolores fugit illo neque corporis facere, maiores vitae nesciunt? Quaerat accusamus quae delectus voluptatibus veritatis molestiae at explicabo iure minima laborum, commodi reiciendis laudantium numquam ad autem quia ea mollitia id saepe voluptas eum impedit similique. Sapiente perferendis fugiat aliquid iure magni soluta, accusantium deserunt pariatur exercitationem eligendi dolores, tenetur tempore nam autem non beatae nobis minima quidem expedita molestiae assumenda ab est eum culpa. Repellat rerum, natus aliquam dolore voluptatibus iure ut illo animi in. Ad quo, quisquam reprehenderit officiis consectetur omnis consequuntur voluptate quas error, sed dignissimos velit repellat ipsa dolore minima illo. Fugiat praesentium inventore doloribus? Quidem, alias recusandae dolorum, quisquam voluptatem iste molestias voluptate rerum quas, optio quia reiciendis nesciunt placeat ipsam? Hic sunt maxime dolorum fugiat unde officiis non voluptatibus nostrum asperiores, quis incidunt.
     </p>
     <img src={img} alt="img"/>

    </div>
 
   </div>
   </>
  )
}

export default Pratisthan