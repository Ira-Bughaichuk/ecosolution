import Image from "next/image";
import Link from "next/link";
import LogoIcon from '../../public/assets/icons/logo-icon.svg';
import LogoText from '../../public/assets/icons/logo-text.svg';
import Ecososution from '../../public/assets/icons/ecosolution.svg';

export default function Logo() {
  return (
  <Link href="/" target='_blank' rel="noopener noreferrer nofollow" role="navigation" aria-label="Main" className="flex flex-row gap-x-1 items-end">
      <Image
        src={LogoIcon}
        alt="Logo icon"
        width={31}
        height={18}
        priority={true}
        // className="block w-[31px] h-[18px] desktop:w-auto"
      /> 
      <Image 
        src={Ecososution}
        alt="Ecososution"
        width={170}
        height={40}
        className="hoverSvg"
        priority={true}
      //  className="hoverSvg block w-[170px] h-[40px] desktop:w-auto"
      />
      <Image 
        src={LogoText}
        alt="GREENERGY FOR LIFE"
        width={60}
        height={18}
        priority={true}
        // className="block w-[60px] h-[18px] desktop:w-auto"
      />
    </Link>
  )
}
