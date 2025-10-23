import { useState } from "react";
import { Link } from "react-router-dom";
import xwearLogo from "../../assets/icons/xwear-logo.svg";
import HeaderMenu from "./Menu";
import HeaderSearch from "./Search";
import HeaderButton from "./HeaderButtons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth >= 1536);

  return (
    <header className="bg-xwear-black flex w-full justify-center max-md:h-20 md:h-25">
      <nav className="flex w-full max-w-[1920px] items-center text-sm max-2xl:mx-[50px] max-md:mx-3 2xl:mx-70">
        <Link
          to="/"
          className="max-md:absolute max-md:left-1/2 max-md:order-3 max-md:-translate-x-1/2"
        >
          <img
            src={xwearLogo}
            alt="xwear logo"
            className="h-auto w-auto max-w-none cursor-pointer"
          />
        </Link>
        <HeaderMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <HeaderSearch setMenuOpen={setMenuOpen} />

        <div className="ml-[22px] flex flex-row flex-nowrap gap-[22px] whitespace-nowrap max-md:order-4 max-md:ml-auto">
          <HeaderButton navIconType="favourite" />
          <HeaderButton navIconType="profile" />
          <HeaderButton navIconType="cart" />
        </div>
      </nav>
    </header>
  );
}
