
export default function BtnNavClose({ handleClose }) {
  return (
    <button
      type="button"
      aria-label="close menu"
      onClick={handleClose}
      className="group flex flex-row items-center duration-500 ease-in group before:bottom-[8px]"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.8335 5.83301L14.1668 14.1663M5.8335 14.1663L14.1668 5.83301"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className='group-hover:stroke-secondary'
        />
      </svg>
      <span className="group-hover:text-secondary text-white text-base font-normal -tracking-{0.64px}">
        close
      </span>
    </button>
  );
}
