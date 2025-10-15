import { useNavigate } from "react-router-dom";
import favouriteLogo from "../../assets/icons/favourite.svg";
import profileLogo from "../../assets/icons/profile.svg";
import cartLogo from "../../assets/icons/cart.svg";
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
  const navigate = useNavigate();

  return (
    <a
      onClick={() => navigate(icon.link)}
      className="ml-8 flex cursor-pointer flex-row flex-nowrap items-center gap-2 font-[Cera-Pro] font-bold whitespace-nowrap"
    >
      <img
        src={icon.img}
        alt={icon.alt}
        className={`max-h-none max-w-none cursor-pointer`}
      />
      {navIconType === "cart" && <CartInfo />}
    </a>
  );
}
