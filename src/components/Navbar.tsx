import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { id: 1, display: "Platform", linkTo: "#" },
  { id: 2, display: "Company", linkTo: "#" },
  { id: 3, display: "Insights", linkTo: "#" },
  { id: 4, display: "Contact", linkTo: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    document.body.classList.remove("dark");
    if (darkTheme) {
      document.body.classList.add("dark");
    }
  }, [darkTheme]);

  return (
    <>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="rounded-md p-1"
          onClick={() => setDarkTheme((prev) => !prev)}
        >
          {darkTheme ? <Moon /> : <Sun />}
          <span className="sr-only">Toggle dark mode</span>
        </button>
        <button
          type="button"
          className="block rounded-md p-1 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X /> : <Menu />}
          <span className="sr-only">Menu</span>
        </button>
      </div>
      <nav
        className={`${menuOpen ? "flex" : "hidden"} basis-full md:flex md:basis-auto`}
      >
        <ul className="flex basis-full flex-col items-center gap-4 py-4 md:flex-row">
          {navLinks.map(({ id, display, linkTo }) => (
            <li key={id}>
              <a
                className="inline-block rounded-md px-2 py-1 hover:text-red-500"
                href={linkTo}
              >
                {display}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
