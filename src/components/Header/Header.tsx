import { useState } from "react";
import { Link } from "react-router-dom";
import xwearLogo from "../../assets/icons/xwear-logo.svg";
import HeaderMenu from "./Menu";
import HeaderSearch from "./Search";

import HeaderButton from "./HeaderButtons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth >= 1536);

  return (
    <header className="bg-xwear-black flex h-25 w-full justify-center">
      <nav className="mx-70 flex w-full max-w-[1920px] items-center text-sm max-2xl:mx-[50px]">
        <Link to="/">
          <img
            src={xwearLogo}
            alt="xwear logo"
            className="h-auto w-auto max-w-none cursor-pointer max-sm:order-3"
          />
        </Link>

        <HeaderMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <HeaderSearch setMenuOpen={setMenuOpen} />
        <HeaderButton navIconType="favourite" />
        <HeaderButton navIconType="profile" />
        <HeaderButton navIconType="cart" />
      </nav>
    </header>
  );
}
