import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(search)}`);
    setSearch("");
  };
  return (
    <div className=" flex justify-between border-b-1 w-screen p-4 text-[18px] font-medium cursor-pointer bg-gradient-to-r from-indigo-500 to-pink-400 text-black fixed top-0 left-0 right-0 z-20">
      <ul>
        <Link to={"/"}>
          <img
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAMAAABY1h8eAAABC1BMVEVIaecpU+UrVeU7YecXTesHSuy7sHf00xb51gCzq38fUOj/rAD/0QD8zgXhuBfVrRz3pQAHSOyYmaD+7hv6xgD6wQDvtQDorwX6vACKj6vFwZP/8lX27GT42Fz401v3zlu4tp7Xzlj26Sz25i/z5UfMxG326C/y5aLx6Ifr4ovVxVr34SXo3VP28s7y4gD39dvo2QDw67n27qT25C7Ju27z5S/h0xv58Jb37Gbw67Df0ipxe6kfQ80AN90AMeD/4wx4gJ4AKt4XP9kcQddTZL+ZnJFreLD/8gy7t3XXw1fczUWlo35BWL83UMQuScemmoCIi5fOu1n71RbOtWbcvEzpyjB/f7LqwDJwd71jmlbXAAABiUlEQVR4AXTPg3oDQRRA4WjRNJ7YmU1jW+vYfP9X6V2X58PiH9psdsc/2Z0quohfuQy0kxT9I+rNraLD7n73eD0+v8er5vH74DPg0mYGQygciURjcb1YNBLxokTQAUgkU+lMFsrpKe+ZdCrvAgwWMIMxThexlvbG4I+gjqUSLldwCVLeqvAGSChYqzPw0Wi2NGy1iyX4rn/FTrfXwlCr1+0A9uuDoIml4ajcHk8m4/a0gxBG2MS+prPqdFqdtWrzBcuR/IDQEQx0OIJagshKMrvkYaaFEDMcIoGTZZbjAAlrWS1cEGWZW5Vwq26hoWjOytJ6g5l+/fdMtID9trikYNCaiZHSEHbkigj16/rMXR3aH+bH0+l0lmRZOp0vvIk0IM/vr6wkgYGyAk/RBlL724C8XEWOA4SLiDf6Tj9UfN4hinpB1BnOc3lR9N1Ez92MhfM8aeXNoyLx9Jg9PwcKHl4wEyLJFRYOB/5AnX4iEHYEFyj1cQGTqaAgCAtygdIyiAMEXIzMeFM8AOpQYns5LAk7AAAAAElFTkSuQmCC"
            }
            alt=""
            className=" ml-20 h-[40px] w-[60px] object-contain rounded-full
            "
          />
        </Link>
      </ul>
      <form className=" " onSubmit={handleSearch}>
        <input
          placeholder=" search products "
          type="text"
          value={search}
          className=" bg-white w-[160%] rounded-xl indent-3.5 text-[22px] flex align-middle justify-center outline-none font-normal p-[5px]"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <ul className=" flex justify-around gap-10 mr-5 mt-2 ">
        <Link to={"/cartitem"}>
          <li className=" relative">
            <ShoppingCartIcon />
            <span className="absolute top-[-12px] bg-green-300 w-6 rounded-full text-center">
              0
            </span>
          </li>
        </Link>

        <Link to="/">
          <li className=" hover:text-amber-50">Home</li>
        </Link>
        <Link to="/contact">
          <li className=" hover:text-amber-50">contact</li>
        </Link>

        <Link to="/team">
          <li className=" hover:text-amber-50">Team</li>
        </Link>

        <Link to="/profile">
          <li className=" hover:text-amber-50">Profile</li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
