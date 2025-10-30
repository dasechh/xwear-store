import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrows/arrow-white.svg";
interface FooterLink {
  title: string;
  links: {
    link: string;
    title: string;
  }[];
}

const footerLinks: FooterLink[] = [
  {
    title: "Каталог",
    links: [
      { link: "/catalog/clothing", title: "Одежда" },
      { link: "/catalog/shoes", title: "Обувь" },
      { link: "/catalog/accessories", title: "Аксессуары" },
      { link: "/calculator", title: "Расчет стоимости" },
    ],
  },
  {
    title: "Информация",
    links: [
      { link: "/blog", title: "Блог" },
      { link: "/contact", title: "Контакты" },
      { link: "/shippinh", title: "Доставка" },
      { link: "/payment", title: "Оплата" },
      { link: "/faq", title: "FAQ" },
    ],
  },
];

export default function FooterMenu() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      {footerLinks.map(({ title, links }) => (
        <details
          key={title}
          open={isDesktop}
          className="text-3.75 group flex flex-col leading-[1.75rem] select-none max-md:w-full max-md:text-[0.8125rem] md:gap-[9px]"
        >
          <summary className="flex cursor-pointer list-none flex-row items-center justify-between font-[RF-Dewi-Expanded] text-white uppercase max-md:border-b-1 max-md:border-white/8 max-md:py-2.5 md:pointer-events-none md:[&::-webkit-details-marker]:hidden">
            {title}
            <img
              src={arrow}
              className={`h-3 w-3 transition-transform group-open:rotate-180 md:hidden`}
            ></img>
          </summary>
          <ul className="flex flex-col gap-[9px]">
            {links.map(({ link, title: linkTitle }) => (
              <li key={linkTitle} className="text-xwear-regular font-[RF-Dewi]">
                <Link to={link}>{linkTitle}</Link>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </>
  );
}
