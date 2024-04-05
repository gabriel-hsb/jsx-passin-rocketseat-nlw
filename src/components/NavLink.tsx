import { ComponentProps } from "react";

// this component will now extend all the props that <a> in HTML receives, such as 'href'
interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <a {...props} className="hover:text-zinc-400 text-sm">
      {props.children}
    </a>
  );
};

export default NavLink;
