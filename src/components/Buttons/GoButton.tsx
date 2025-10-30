import { Link } from "react-router-dom";

interface GoButtonProps {
  text: string;
  link: string;
}

export default function GoButton({ text, link }: GoButtonProps) {
  return (
    <Link
      to={link}
      className="max-md:size-0.625 bg-xwear-black flex w-min flex-row items-center justify-center gap-5.75 rounded-[5px] px-6.75 py-5.75 font-[RF-Dewi-Expanded] text-xs leading-5 font-[800] whitespace-nowrap text-white uppercase max-md:px-5 max-md:py-4 max-md:text-[0.625rem]"
    >
      {text}

      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.36529 5.36578C5.67771 5.05336 5.67771 4.54683 5.36529 4.23441L1.36529 0.234412C1.05288 -0.0780075 0.546343 -0.0780075 0.233924 0.234412C-0.0784959 0.546831 -0.0784959 1.05336 0.233924 1.36578L3.66824 4.8001L0.233924 8.23441C-0.0784955 8.54683 -0.0784955 9.05336 0.233924 9.36578C0.546343 9.6782 1.05288 9.6782 1.36529 9.36578L5.36529 5.36578Z"
          fill="white"
        />
      </svg>
    </Link>
  );
}
