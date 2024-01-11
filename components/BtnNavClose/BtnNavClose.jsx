import { IoCloseOutline } from "react-icons/io5";
import s from './BtnNavClose.module.scss';
export default function BtnNavClose({ handleClose }) {
  return (
    <button
      type="button"
      aria-label="Close menu"
      onClick={handleClose}
      className={s.close_btn}
    >
      <IoCloseOutline />
        close
    </button>
  );
}
