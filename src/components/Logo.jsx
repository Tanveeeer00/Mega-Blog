import logo from "../assets/logo.png";
function Logo({ width = "100px" }) {
  return (
    <div>
      <img src={logo} alt="Logo" className="h-14 w-15" />
    </div>
  );
}

export default Logo;
