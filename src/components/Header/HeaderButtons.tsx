import { Link } from "react-router-dom";
import favouriteLogo from "../../assets/icons/buttons/favourite.svg";
import profileLogo from "../../assets/icons/buttons/profile.svg";
import cartLogo from "../../assets/icons/buttons/cart.svg";
import CartInfo from "./CartInfo";

const Icons = {
  favourite: {
    img: favouriteLogo,
    link: "/favourite",
    alt: "Favourite",
  },
  profile: {
    img: profileLogo,
    link: "/profile",
    alt: "Profile",
  },
  cart: {
    img: cartLogo,
    link: "/cart",
    alt: "Cart",
  },
};

type NavIconImg = keyof typeof Icons;
interface NavIconProps {
  navIconType: NavIconImg;
}

export default function NavIcon({ navIconType }: NavIconProps) {
  const icon = Icons[navIconType];

  return (
    <Link
      to={icon.link}
      className="flex cursor-pointer items-center gap-2 font-[Cera-Pro] font-bold"
    >
      //{" "}
      <img
        src={icon.img}
        alt={icon.alt}
        className={`max-h-none max-w-none cursor-pointer`}
      />
      {navIconType === "cart" && <CartInfo />}
    </Link>
  );
}
