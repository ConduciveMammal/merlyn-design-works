import * as React from "react"
import logo from '../../images/mdw-logo.svg';
import './footer.scss';

const Footer = ({siteTitle}) => {

  return (
    <footer
    className="footer">
      <div className="footer__column footer__column--left">
        <h3 className="h1">Want to collaborate with me?</h3>
        <p className="footer__content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil cumque voluptatibus totam eos, sequi commodi?</p>

        <a href="/contact" className="button button--primary">Let&rsquo;s talk</a>

        &copy; {new Date().getFullYear()} &middot; Liam Merlyn
      </div>

      <div className="footer__column footer__column--right">
        <img
          alt={`${siteTitle} logo`}
          height={50}
          loading="lazy"
          src={logo}
        />

        <div className="footer__list-wrapper">
          <div className="footer__list">
            <h4 className="footer__list-title">Services</h4>
            <ul>
              <li>Shopify Development</li>
              <li>Shopify Development</li>
              <li>Shopify Development</li>
              <li>Shopify Development</li>
            </ul>
          </div>

          <div className="footer__list">
            <h4 className="footer__list-title">
              How can I help?
            </h4>
            <ul>
              <li>Shopify Development</li>
              <li>Shopify Development</li>
              <li>Shopify Development</li>
              <li>Shopify Development</li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer;
