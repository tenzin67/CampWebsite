import { PEOPLE_URL } from "@/Constants";
import Image from "next/image";

interface CampProps{
  backgroundImage:string;
  title :string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({backgroundImage,title,subtitle,peopleJoined}:CampProps) =>{
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg: px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
            src='/folded-map.svg'
            alt="map"
            width={28}
            height={28}
            />
          </div>

          <div className="flex flex-col gap-1">
              <h4 className="bold-18 text-white">{title}</h4>
              <p className="regular-14 text-white">{subtitle}</p>
            </div>
        </div>

        <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className=" bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:-[400px] xl:h-[640px]'>

        <CampSite
        backgroundImage='bg-bg-img-1'
        title='Putuk Truno Camp '
        subtitle='Prigen, Pasuruan'
        peopleJoined='50 + Joined'
        />
      <CampSite
            backgroundImage='bg-bg-img-2'
            title='Mountain View Camp'
            subtitle='Somewhere in the Wilderness'
            peopleJoined='50 + Joined'/>
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60  lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regural-32 2xl:regular-64 capitalize text-white"> <strong>Feeling Lost </strong>And Not Knowing The Way?
          </h2>
          <p className="regular-15 xl:regular-16 mt-5 text-white">
          རི་འཛེག་མཁན་གྱིས་རི་འཛེག་ས་གནས་གསར་པར་ལྟ་སྐོར་བྱེད་སྐབས་སེམས་ཁྲལ་བྱེད་འགོ་བརྩམས་པ་ནས་བཟུང་ལམ་ནོར་ཤོར་བའི་ངེས་པ་ཧ་ཅང་ཆེ། འདི་ནི་ང་ཚོས་འདི་ནས་ཉེན་ཁར་མི་འཛེམ་པའི་མི་དེ་དག་ལ་ཞབས་འདེགས་ཞུ་དགོས་པའི་རྒྱུ་
          </p>
          <Image
          src='/quote.svg'
          alt="camp"
          width={186}
          height={219}
          className="camp-quote"
          />
        </div>
      </div>

    </section>
  )
}

export default Camp
