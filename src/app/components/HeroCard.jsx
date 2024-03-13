import Image from "next/image";

const HeroCard = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center h-screen'>
      <div className='order-2 md:order-1 md:text-left md:mr-4'>
        <h1 className="heading_font">Hi, I'm <span className="gradient_1">Colin</span></h1>
        <p className="max-w-2xl mt-4 md:mt-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quo explicabo vero. Pariatur modi ipsa repellendus incidunt quis excepturi nulla, est at repudiandae molestias et soluta ea laudantium voluptatum expedita?</p>
      </div>
      <div className='rounded-full overflow-hidden order-1 md:order-2 md:ml-4 border-2 border-black'>
        <Image src="/hero.jpg" width={300} height={300} />
      </div>
    </div>
  );
};

export default HeroCard;