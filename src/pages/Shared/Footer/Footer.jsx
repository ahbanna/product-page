import { Container, Image } from "react-bootstrap";
import "./Footer.css";
import logo from "../../../assets/footer-logo.png";
import { NavLink } from "react-router-dom";
import SocialLink from "../../../components/SocialLink/SocialLink";
import Newsletter from "../../../components/Newsletter/Newsletter";
import ContactInfo from "../../../components/ContactInfo/ContactInfo";
const Footer = () => {
  return (
    <div className="footer-area">
      <Container>
        <div className="footer-content">
          <div className="footer-about">
            <NavLink to="/">
              <Image className="footer-logo" src={logo} alt="Shop now" />
            </NavLink>
            <p className="footer-text">
              Discover style redefined at our fashion haven. We curate trends
              that empower individuality, offering exclusive collections for the
              modern enthusiast. Our ethos celebrates diversity, blending
              sophistication with edge.
            </p>
            <SocialLink></SocialLink>
          </div>
          <div className="footer-categories">
            <h4 className="footer-title">Categories</h4>
            <ul>
              <li>
                <a href="#men">Men</a>
              </li>
              <li>
                <a href="#women">Women</a>
              </li>
              <li>
                <a href="#kids">Kids</a>
              </li>
              <li>
                <a href="#bags">Bags</a>
              </li>
              <li>
                <a href="#jewellery">Jewellery</a>
              </li>
              <li>
                <a href="#beauty">Beauty Items</a>
              </li>
            </ul>
          </div>
          <div className="footer-subscribe">
            <h4 className="footer-title">get news and offer</h4>
            <p className="footer-text">
              Subscrible & get <span>10%</span> discount. Get E-mail updates
              about our latest shop and <span>special offers</span>.
            </p>
            <Newsletter></Newsletter>
          </div>
          <div className="footer-contact">
            <h4 className="footer-title">contact us</h4>
            <ContactInfo></ContactInfo>
          </div>
        </div>
        {/* </div> */}
        <div className="footer-bottom">
          <p className="copyright footer-text">
            Copyright © 2023 <span>Example</span>. All rights reserved.
          </p>
          <ul className="policy-terms footer-text">
            <li>Privacy & Cookie Policy </li>
            <li>Terms of Service </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
