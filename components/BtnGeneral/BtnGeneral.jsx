import Image from "next/image";
import { Link } from "react-scroll";
import ArrowRight from "../../public/assets/icons/arrow-right.svg";

export default function BtnGeneral({ title }) {
  return (
    <Link
      to="/cases"
      spy={true}
      smooth={true}
      offset={100}
      duration={500}
      className="max-w-[144px] self-center tablet:self-start flex flex-row items-center py-[3.5px] pl-4 pr-1 cursor-pointer text-primary text-base font-normal leading-[18px] -tracking-[0.64px] bg-transparent hover:text-secondary hover:bg-primary transition ease-in duration-500 group
    rounded-full border border-solid border-primary"
    >
      {title}
      <div className='flex items-center justify-center w-[32px] h-[32px] ml-3 bg-secondary rounded-full'>
      <Image
        src={ArrowRight}
        alt="arrow"
        priority={true}
        className="w-[16px] h-[16px]"
      />
      </div>
    </Link>
  );
}
