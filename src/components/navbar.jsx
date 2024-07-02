import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Junaid Irshad
        </Link>
        <ul className="flex items-center">
          <li className="mr-4">
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
