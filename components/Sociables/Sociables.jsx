import Image from "next/image";
import Link from "next/link";
import Facebook from "../../public/assets/icons/facebook-menu.svg";
import Instagram from "../../public/assets/icons/instagram-menu.svg";

export default function Sociables() {
  return (
    <ul className="flex flex-row gap-x-2">
      <li>
        <Link href="">
          <Image
            src={Facebook}
            alt="Facebook"
            width={24}
            height={24}
            className="hoverSvg"
          />
        </Link>
      </li>
      <li>
        <Link href="">
          <Image
            src={Instagram}
            alt="Instagram "
            width={24}
            height={24}
            className="hoverSvg"
          />
        </Link>
      </li>
    </ul>
  );
}
