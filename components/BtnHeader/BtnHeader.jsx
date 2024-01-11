import Image from "next/image";
import ArrowRight from "../../public/assets/icons/arrow-right.svg";
import scrollToSection from '../../utils/scrollToSection';

export default function BtnHeader({title}) {
  const handleButtonClick = () => {
    scrollToSection('/contactUs');
  };
  return (
    <button
      type="button"
      onClick={handleButtonClick}
      aria-label="Scroll to contacts"
      className="flex cursor-pointer text-base font-normal  rounded-full bg-secondary items-center py-[10px] px-4 hover:text-secondary hover:bg-primary transition ease-in duration-500 group"
    > {title}
      <Image
        src={ArrowRight}
        alt="Arrow icon"
        width={9}
        height={9}
        priority={true}
        className="ml-3 bg-primary rounded-full rotate-90 transition ease-in duration-500 w-[14px] h-[14px] group-hover:bg-secondary"
      />
    </button>
  );
}
