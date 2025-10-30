import xwearDarkLogo from "../../assets/icons/xwear/xwear-logo-dark.svg";
import { Link } from "react-router-dom";

export default function FooterBottom() {
  return (
    <div className="mt-5 flex justify-between max-md:justify-center">
      <Link to={"/"} className="max-md:hidden">
        <img
          src={xwearDarkLogo}
          alt="Xwear"
          className="h-auto w-auto max-w-none cursor-pointer"
        />
      </Link>
      <div className="flex flex-col justify-end font-[RF-Dewi] text-[0.6875rem] leading-4.5 text-[#707076] uppercase underline">
        <Link to={"/privacy"}>Политика конфиденциальности</Link>
        <Link to={"/terms"}>Пользовательское соглашение</Link>
      </div>
    </div>
  );
}
