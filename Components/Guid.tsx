import React from 'react'
import Image from 'next/image'
const Guid = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className=' padding-container max-container w-full pb-24'>
        <Image src='camp.svg' alt='camp' width={50} height={50}/>
        <p className='uppercase regular-18 -mt-1 mb--3 text-green-50'>
        ང་ཚོས་འདི་ནས་ཁྱེད་ལ་ཞབས་འདེགས་ཞུ།
          </p>
          <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
            <h2 className=' bold-40 lg:bold-64 xl:max-w-[390px]'>ཁྱེད་ལ་བློ་བདེ་བག་ཕེབས་ངང་ལམ་བུ་ཤར་གཏོང་ཐུབ</h2>
            <p className='regular-16 text-gray-30 xl:max-w-[520px]'>hink ལ་བཀོལ་སྤྱོད་བྱེད་པའི་གོ་རིམ་ཁོ་ན་སྤྱད་ན་མ་གཏོགས་ལམ་ནོར་མི་སྲིད། གང་ལགས་ཤེ་ན། ཡུལ་དངོས་སུ་དྲ་སྦྲེལ་སྦྲེལ་མཐུད་མེད་པའི་སྐབས་སུ་ང་ཚོས་ཐིག་དང་བྲལ་བའི་ས་ཁྲར་རྒྱབ་སྐྱོར་བྱས་ཟིན་པས་རེད། ཁྱེད་ཀྱི་གྲོགས་པོ་དང་། གཉེན་ཉེ། གྲོགས་པོ་བཅས་གདན་འདྲེན་ཞུས་ནས་ས་རྒོད་དུ་རྩེད་འཇོར་རོལ་ནས་རི་ཁུག་བརྒྱུད་དེ་རི་རྩེར་སླེབས་
            </p>
          </div>
      </div>

      <div className='flexCenter max-container relative w-full'>
        <Image
        src='/boat.png'
        alt='boat'
        width={1440}
        height={580}
        className='w-full object-cover object-center 2xl:rounded-5xl'
        />

        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20 '>
          <Image
          src='meter.svg'
          alt='meter'
          width={16}
          height={158}
          className='h-full w-auto'

          />
          <div className='flexBetween flex-col '>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='Regular-16 text-gray-20'>Destination</p>
                <p className=' bolde-16 text-green-50'>48 km</p>
              </div>
              <p className='bold-20 mt-2'>Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className='Regular-16 text-gray-20'>Start Track </p>
              <p className='bold-20 mt-2 whitespace-nowrap'>Wonorejo Pasuruan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guid
