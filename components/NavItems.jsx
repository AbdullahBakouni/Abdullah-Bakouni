import { navLinks } from "@/constants";
import Link from "next/link";

export default function NavItems({ onClick = () => {} }) {
  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <Link href={item.href} className="nav-li_a" onClick={onClick}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
