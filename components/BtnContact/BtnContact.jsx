import Image from "next/image";
import ArrowRight from "../../public/assets/icons/arrow-right.svg";


export default function BtnContact({title}) {
  return (
    <button type="submit" className="max-w-[144px] self-center tablet:self-start flex flex-row items-center py-[3.5px] pl-4 pr-1 cursor-pointer text-primary text-base font-normal leading-[18px] -tracking-[0.64px] bg-transparent hover:text-secondary hover:bg-primary transition ease-in duration-500 group
        rounded-full border border-solid border-primary">
        {title}
      <Image
        src={ArrowRight}
        alt="arrow"
        width={8}
        height={8}
        priority={true}
        className=" w-[32px] h-[32px] ml-3 bg-secondary rounded-full"
      />
    </button>
  )
}
