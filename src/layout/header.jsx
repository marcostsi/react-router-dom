import { NavLink } from "react-router-dom";

const NavLinkConstants = [
  { to: "/", label: "Home" },
  { to: "/pagina-a", label: "Página A" },
  { to: "/pagina-b", label: "Página B" },
  { to: "/pagina-c", label: "Página C" },
];

export function MenuCelular() {
  return (
    <div className="drawer-side">
      <label htmlFor="menu-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 h-full bg-zinc-800 text-white">
        {NavLinkConstants.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-700 text-white rounded-lg"
                  : "hover:bg-gray-100 hover:text-gray-900 rounded-lg"
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MenuNotebooks() {
  return (
    <div className="hidden md:flex space-x-6">
      {NavLinkConstants.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          className={({ isActive }) =>
            isActive
              ? "text-white py-2 px-3 rounded bg-blue-700"
              : "text-gray-300 py-2 px-3 rounded hover:bg-gray-100 hover:text-gray-900"
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}

export default function Header() {
  return (
    <nav className="bg-zinc-950 border-zinc-700 sticky top-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3">
          <img src="/vite.svg" className="h-8" alt="Logo" />
          <span className="text-2xl font-semibold whitespace-nowrap text-white">
            Exemplo
          </span>
        </NavLink>

        <div className="md:hidden">
          <label htmlFor="menu-drawer" className="btn btn-square btn-ghost">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </label>
        </div>

        <MenuNotebooks />
  
        <input
          id="menu-drawer"
          type="checkbox"
          className="drawer-toggle inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
        />
        <MenuCelular />
      </div>
    </nav>
  );
}
