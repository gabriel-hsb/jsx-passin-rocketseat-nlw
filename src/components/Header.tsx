import DevLogoSvg from "../assets/svg/DevLogoSvg";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center gap-5 py-4">
        <DevLogoSvg />
        <NavLink href="https://google.com.br">Eventos</NavLink>
        <NavLink>Participantes</NavLink>
      </nav>
    </header>
  );
};

export default Header;
