import { BiSolidPhoneCall } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-list">
      <ul>
        <li>
          <IoLocationOutline></IoLocationOutline> 20, Awesome Road, New York,
          Usa 4D BS3
        </li>
        <li>
          <FaRegEnvelope></FaRegEnvelope> contact@example.com
        </li>
        <li>
          <a href="mailto:alhasanulbanna@gmail.com">
            <BiSolidPhoneCall></BiSolidPhoneCall> +997 509 153 849
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
