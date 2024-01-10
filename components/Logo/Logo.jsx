import Image from "next/image";
import Link from "next/link";
import LogoIcon from '../../public/assets/icons/logo-icon.svg';
import LogoText from '../../public/assets/icons/logo-text.svg';
import Ecososution from '../../public/assets/icons/ecosolution.svg';

export default function Logo() {
  return (
  <Link href="/" target='_blank' rel="noopener noreferrer nofollow" role="navigation" aria-label="Main" className="flex flex-row gap-x-1 items-center">
      <Image
        src={LogoIcon}
        alt="Logo icon"
        priority={true}
        className="w-[31px] h-[18px]"
      /> 
      <Image 
        src={Ecososution}
        alt="Ecososution"
        priority={true}
        className="hoverSvg w-[170px] h-[40px]"
      />
      <Image 
        src={LogoText}
        alt="GREENERGY FOR LIFE"
        priority={true}
        className = "w-[60px] h-[18px]"
      />
    </Link>
  )
}
// desktop:w-auto