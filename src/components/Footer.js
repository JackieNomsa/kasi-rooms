import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <div className="media-links">
        <a href="email">
          <MdEmail />
        </a>
        <a href="facebook">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
}

export default Footer;
