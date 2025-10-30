import FooterLinks from "./FooterLinks";
import FooterContacts from "./FooterContacts";
import FooterBottom from "./FooterBottom";
import xwearDarkLogo from "../../assets/icons/xwear/xwear-logo-dark.svg";
import { Link } from "react-router-dom";
import FooterNewsletter from "./FooterNewsletter";

export default function Footer() {
  return (
    <footer className="bg-xwear-black flex w-full flex-col justify-center whitespace-nowrap max-2xl:pt-11.25 max-2xl:pb-12.5 max-md:py-5 md:px-12.5 md:py-9.5 2xl:px-70">
      <Link to={"/"} className="flex w-full justify-center md:hidden">
        <img src={xwearDarkLogo} alt="Xwear" />
      </Link>
      <div className="flex w-full flex-wrap justify-between max-md:flex-col max-md:items-center max-md:px-2.5">
        <FooterLinks />
        <FooterContacts />
        <FooterNewsletter />
      </div>
      <FooterBottom />
    </footer>
  );
}
