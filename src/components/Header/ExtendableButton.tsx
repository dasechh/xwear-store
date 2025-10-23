import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";

interface ExtendProps {
  text: string;
  subButtons: { text: string; link: string }[];
}

export default function ExtendableButton({ text, subButtons }: ExtendProps) {
  const [open, setOpen] = useState(false);
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

  return (
    <>
      <div className="relative z-1" ref={ref}>
        {subButtons ? (
          <button
            onClick={() => setOpen((prev) => !prev)}
            className={`flex cursor-pointer items-center gap-1 ${open ? "text-[#94949C]" : ""}`}
          >
            {text}
            <img
              src={arrow}
              className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
            ></img>
          </button>
        ) : (
          <Link
            to={`/search?category=${text}`}
            className="flex cursor-pointer items-center gap-1"
          >
            {text}
          </Link>
        )}

        {open && subButtons && (
          <div className="bg-xwear-black z-1 box-border flex w-[275px] flex-col gap-10.5 pt-8 pl-8 2xl:absolute 2xl:top-15 2xl:left-[-2rem] 2xl:pb-11">
            {subButtons.map((el, i) => (
              <Link
                key={i}
                to={`/search?category=${el.link}`}
                className="after:bg-xwear-blue relative cursor-pointer whitespace-nowrap after:absolute after:bottom-[-4px] after:left-0 after:block after:h-[2px] after:w-0 after:transition-all after:duration-200 after:content-[''] hover:after:w-13"
              >
                {el.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
