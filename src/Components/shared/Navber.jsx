import { Link } from "react-router-dom";

const Navber = () => {
  const items = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm w-full z-50">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm space-y-3.5 dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {items?.map((item, index) => (
                <li
                  className="cursor-pointer font-semibold hover:text-pink-500"
                  key={index}
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center">
          <p className="text-xl font-semibold">
            sHOP<span className="text-pink-500">.com</span>
          </p>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <Link
            to="/login"
            className="btn btn-active w-[100px] btn-secondary hover:bg-[#c91876] transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
