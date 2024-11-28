import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex flex-wrap gap-4 p-4 md:flex-nowrap">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
