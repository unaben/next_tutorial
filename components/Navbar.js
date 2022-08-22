import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo (1).png" width={128} height={77} alt="logo-image" />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contacts">
        <a>List of Contacts</a>
      </Link>
    </nav>
  );
};

export default Navbar;
