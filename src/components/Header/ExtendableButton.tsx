import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";

interface ExtendProps {
  text: string;
  subButtons: { text: string; link: string }[];
}

export default function ExtendableButton({ text, subButtons }: ExtendProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !(window.innerWidth < 1536)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = subButtons
    ? () => setOpen((prev) => !prev)
    : () => navigate(`/search?category=${text}`);

  return (
    <>
      <div className="relative" ref={ref}>
        <a
          className={`flex cursor-pointer items-center gap-1 ${open ? "text-[#94949C]" : ""}`}
          onClick={handleClick}
        >
          {text}
          {subButtons && (
            <img
              src={arrow}
              className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
            />
          )}
        </a>
        {open && subButtons && (
          <div className="bg-xwear-black box-border flex w-min flex-col gap-10.5 pt-8 pl-8 2xl:absolute 2xl:top-15 2xl:left-[-2rem]">
            {subButtons.map((el, i) => (
              <a
                key={i}
                className="after:bg-xwear-blue relative cursor-pointer whitespace-nowrap after:absolute after:bottom-[-4px] after:left-0 after:block after:h-[2px] after:w-0 after:transition-all after:duration-200 after:content-[''] hover:after:w-13"
                onClick={() => navigate(`/search?category=${el.link}`)}
              >
                {el.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
