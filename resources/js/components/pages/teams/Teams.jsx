import React from 'react'
import img from "../../../images/logo2.png"
import TeamsCard from '../home/teamsec/TeamCard'
import StartingBanner from '../../forAll/StartingBanner'
const Teams = () => {
    const teamMember = [
        {
          img: img,
          name: 'John Doe',
          position: 'Software Engineer',
        },
        {
            img: img,
            name: 'John Doe',
            position: 'Software Engineer',
          },
          {
            img: img,
            name: 'John Doe',
            position: 'Software Engineer',
          },
          {
            img: img,
            name: 'John Doe',
            position: 'Software Engineer',
          },
        {
          img: img,
          name: 'John Doe',
          position: 'Software Engineer',
        },
        {
          img: img,
          name: 'John Doe',
          position: 'Software Engineer',
        },
        {
          img: img,
          name: 'John Doe',
          position: 'Software Engineer',
        },
      ]
  return (
    <>
    <StartingBanner imageUrl={img} text="कार्यसमिति"/>
    <div className='container mx-autoc my-10'>
    <div className=' grid grid-cols-4'>
          {teamMember.map((card, index) => (
          <div key={index} className=''>
            <TeamsCard img={card.img} name={card.name} position={card.position} />
          </div>
        ))}
    </div>
    </div>
    </>
  )
}

export default Teams
