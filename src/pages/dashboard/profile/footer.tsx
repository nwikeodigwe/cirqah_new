import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-2 justify-center mt-20">
      <ul className="flex text-xs text-chicago-400 gap-3">
        <li>
          <Link
            to="/privacy"
            className="hover:text-chicago-900 hover:underline transition-all duration-150"
          >
            Privacy
          </Link>
        </li>
        <li>
          <Link
            to="/term"
            className="hover:text-chicago-900 hover:underline transition-all duration-150"
          >
            Terms of Service
          </Link>
        </li>
        <li>
          <Link
            to="/cookies"
            className="hover:text-chicago-900 hover:underline transition-all duration-150"
          >
            {" "}
            Cookies Settings
          </Link>
        </li>
      </ul>
      <p className="text-xs text-chicago-300">© 2025 Cirqah</p>
    </div>
  );
};

export default Footer;
