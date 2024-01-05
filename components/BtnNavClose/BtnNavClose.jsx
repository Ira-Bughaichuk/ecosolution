import Image from "next/image";
import Close from '../../public/assets/icons/close-menu.svg';

export default function BtnNavClose({handleClose}) {
  return (
    <button type="button" onClick={handleClose} className="flex flex-row items-center duration-500 ease-in group before:bottom-[8px]">
        <Image 
        src={Close}
        alt="Close menu" 
        width={20}
        height={20}
        className="hoverSvg"
        />
        <span className="group-hover:text-secondary text-white text-base font-normal -tracking-{0.64px}">close</span>
    </button>
  )
}
