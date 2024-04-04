import {} from "lucide-react";

import DevLogoSvg from "../assets/svg/DevLogoSvg";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center gap-5 py-4 text-sm">
        <DevLogoSvg />
        <a href="http://" className="hover:text-zinc-400">
          Eventos
        </a>
        <a href="http://" className="hover:text-zinc-400">
          Participantes
        </a>
      </nav>
    </header>
  );
};

export default Header;
