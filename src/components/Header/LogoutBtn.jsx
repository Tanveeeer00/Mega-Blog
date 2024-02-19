import { useDispatch } from "react-redux";
// import authService from "../../appwrite/config.js";
import { logout } from "../../store/authSlice.js";
function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-white rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
