import React from 'react'
import about from "../../../../images/logo2.png"
const AboutUs = () => {
  return (
    <div className='bg-white relative z-10'>
    <div className='mx-auto container py-20 '>
        <h2 className='text-center text-3xl font-medium'>प्रतिष्ठानको परिचय</h2>
        <div className='grid md:grid-cols-2 gap-5 mt-10'>
            <div className='flex flex-col justify-center'>
                <p className='text-justify leading-10 font-medium text-lg'>
                नेपालमा राजनीतिक परिवर्तनद्वारा नागरिक सम्मान र मानव अधिकार, सामाजिक न्याय एवं प्रजातन्त्र तथा लोक कल्याणकारी राज्यको स्थापना गरी देशको राष्ट्रिय स्वाधीनताको मार्गलाई विकसित गरी सर्वतोमुखी विकास गर्ने हेतुले शताब्दी लामो जहानिया राणा शासनलाई जन संघर्षबाट अन्त्य गर्दै बहुदलीय प्रजातान्त्रिक व्यवस्थाको स्थापना गर्न संगठित जनप्रयासतर्फ नेपालमा क्रान्तिको पहिलो सार्वजनिक विगुल फुक्ने राष्ट्रिय नेता स्वर्गीय टंकप्रसाद आचार्यले जिउज्यानको बाजी लगाई सम्वर्धन गरेको जनकल्याणकारी प्रजातन्त्र र राष्ट्रिय स्वाभिमानका मूल्य र मान्यताहरूको प्रवद्र्धन गर्नका साथै श्री आचार्यको सम्मान गर्दै उहाँको कीर्ति तथा पावन स्मृतिलाई चिरस्थायी राख्ने उद्देश्य लिएर २०५० साल वैशाख ११ गते सार्वजनिक क्षेत्रमा टंकप्रसाद आचार्य स्मृति प्रतिष्ठानको स्थापना गरिएको हो । जिल्ला प्रशासन कार्यालय काठमाडौंमा २०५० वैशाख ११ गते दर्ता गरिएको छ । साथै मिति २०६१ कार्तिक ३० मा आवद्धता नं. १६९९३ वाट प्रतिष्ठान समाज कल्याण परिषद्मा समेत आवद्ध भएको छ ।
                </p>
              <div>
              <button className=' py-2 px-3 text-white font-bold  inline-flex bg-[#003893]'>
                थप पढ्नुहोस्
                </button>
              </div>

            </div>
            <div className='flex justify-center'>
                <img src={about} alt="about iamge" className='h-[400px]'/>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutUs