import { useNavigate } from "react-router-dom";
import ExtendableButton from "./ExtendableButton";

import { useEffect, useRef } from "react";

interface HeaderMenuProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderMenu({ menuOpen, setMenuOpen }: HeaderMenuProps) {
  const navigate = useNavigate();
  const isDesktop = window.innerWidth >= 1536;
  const hamburger = !isDesktop;

  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node) &&
        window.innerWidth < 1536
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(window.innerWidth >= 1536);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      {hamburger && (
        <button
          ref={buttonRef}
          className="my-10 flex cursor-pointer flex-col justify-center gap-[9.5px] p-1 pl-12.5"
          onClick={() => {
            setMenuOpen((prev) => !prev);
          }}
        >
          <span
            className={`h-0.25 w-5 bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-[5.25px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.25 w-5 bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-[5.25px] -rotate-45" : ""
            }`}
          />
        </button>
      )}

      {menuOpen && (
        <div
          ref={ref}
          className={`${hamburger ? "bg-xwear-black absolute top-25 left-30 flex w-[350px] flex-col gap-12 pb-11 pl-11 whitespace-nowrap" : "flex flex-row justify-center gap-12"} px-30 font-[RF-Dewi] text-sm whitespace-nowrap text-white`}
        >
          <ExtendableButton
            text="Одежда"
            subButtons={[
              {
                text: "Женская",
                link: "/women",
              },
              {
                text: "Мужская",
                link: "/men",
              },
              {
                text: "Детская",
                link: "/kids",
              },
            ]}
          />
          <ExtendableButton
            text="Обувь"
            subButtons={[
              { text: "Женская", link: "/women" },
              { text: "Мужская", link: "/men" },
              { text: "Детская", link: "/kids" },
            ]}
          />
          <ExtendableButton
            text="Аксессуары"
            subButtons={[
              { text: "Кепки", link: "/hats" },
              { text: "Сумки", link: "/bags" },
              { text: "Шляпы", link: "/caps" },
            ]}
          />
          <ExtendableButton
            text="Бренды"
            subButtons={[
              { text: "Nike", link: "/nike" },
              { text: "Adidas", link: "/adidas" },
              { text: "Puma", link: "/puma" },
            ]}
          />
          <a className="cursor-pointer" onClick={() => navigate("/calculator")}>
            Расчет стоимости
          </a>

          <ExtendableButton
            text="Информация"
            subButtons={[
              { text: "Наш блог", link: "/blog" },
              { text: "Наши контакты", link: "/contact" },
              { text: "Доставка", link: "/shipping" },
              { text: "Оплата", link: "/payment" },
              { text: "FAQ", link: "/faq" },
            ]}
          />
        </div>
      )}
    </>
  );
}
