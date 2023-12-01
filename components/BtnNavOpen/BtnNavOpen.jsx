
import Image  from 'next/image';
import Burger from '../../public/assets/icons/burger-menu.svg';

export default function BtnNavOpen({handleOpen}) {
  return (
    <button type="button" onClick={handleOpen}  className="flex justify-center items-center bg-bgBtnMenu w-10 h-10 rounded-full hover:bg-secondary pointer duration-500 ease-in border-none">
        <Image
          width={16}
          height={16}
          src={Burger}
          alt="Open menu" />
    </button>
  )
}
