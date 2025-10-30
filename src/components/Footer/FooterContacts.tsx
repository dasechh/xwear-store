import { useEffect, useState } from "react";
import TelegramIcon from "../../assets/icons/social/Telegram.svg";
import WhatsappIcon from "../../assets/icons/social/WhatsApp.svg";
import VKIcon from "../../assets/icons/social/VK.svg";
import arrow from "../../assets/icons/arrows/arrow-white.svg";

function socialsBlock() {
  return (
    <div className="flex h-min flex-col max-md:flex-row max-md:justify-center max-md:gap-[9px] max-md:py-5">
      <div className="flex flex-col gap-[3px] text-xs leading-[1.75rem] font-[800] uppercase">
        <span className="font-[RF-Dewi-Expanded] text-white max-md:hidden">
          Мессенджеры
        </span>
        <div className="flex gap-[9px]">
          <a
            href="https://t.me/xwear_shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={TelegramIcon}
              alt="Telegram"
              className="size-7.5 cursor-pointer max-md:size-10"
            />
          </a>
          <a
            href="https://wa.me/79936083885"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={WhatsappIcon}
              alt="Whatsapp"
              className="size-7.5 cursor-pointer max-md:size-10"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-[3px] text-xs leading-[1.75rem] font-[800] uppercase">
        <span className="font-[RF-Dewi-Expanded] text-white max-md:hidden">
          Наши соц.сети
        </span>
        <a href="vk.com/xwear_shop" target="_blank" rel="noopener noreferrer">
          <img
            src={VKIcon}
            alt="VK"
            className="size-7.5 cursor-pointer max-md:size-10"
          />
        </a>
      </div>
    </div>
  );
}

export default function FooterContacts() {
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
    <div className="leading-1.75rem flex flex-col text-[0.9375rem] leading-[1.75rem] max-md:w-full max-md:text-[0.8125rem] md:gap-[9px]">
      <details
        key="Contacts"
        open={isDesktop}
        className="group flex h-min flex-col gap-[9px] max-md:w-full"
      >
        <summary className="flex cursor-pointer list-none flex-row items-center justify-between font-[RF-Dewi-Expanded] text-white uppercase outline-white/20 max-md:border-b-1 max-md:border-white/8 max-md:py-2.5 md:pointer-events-none md:[&::-webkit-details-marker]:hidden">
          Контакты
          <img
            src={arrow}
            className={`h-3 w-3 transition-transform group-open:rotate-180 md:hidden`}
          ></img>
        </summary>
        <ul className="flex flex-col gap-[9px]">
          <li>
            <a
              href="mailto:info@xwear.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xwear-regular font-[RF-Dewi] underline"
            >
              info@xwear.info
            </a>
          </li>
          <li>
            <a href="tel:+79936083885" className="font-[RF-Dewi] text-white">
              +7 993 608 38 85
            </a>
          </li>
        </ul>
      </details>

      {socialsBlock()}
    </div>
  );
}
