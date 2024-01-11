import Image from "next/image";
import Link from "next/link";
import Facebook from "../../public/assets/icons/facebook-menu.svg";
import Instagram from "../../public/assets/icons/instagram-menu.svg";

export default function Sociables() {
  return (
    <ul className="flex flex-row gap-x-2">
      <li>
        <Link href="https://uk-ua.facebook.com/" aria-label="Facebook" target='_blank' rel="noopener noreferrer nofollow">
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
        <Link href="https://www.instagram.com/" aria-label="Instagram" target='_blank' rel="noopener noreferrer nofollow">
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
