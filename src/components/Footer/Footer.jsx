import {
  TwitterLogo,
  DribbbleLogo,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const info = {
  personalName: "Juan Garcia",
  phone: "https://wa.me/525613731029",
  email: "juanjgarcia230@gmail.com",
  linkedIn: "https://www.linkedin.com/in/juanjgarcia23/",
  github: "https://github.com/JJGarciaMartinez",
};
const Footer = () => {
  return (
    <div className={styles.container}>
      <footer>
        <div className={styles.info}>
          <p className={styles.title}>compleet labs</p>
          <p className={styles.description}>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper
            nulla.
          </p>
          <div className={styles.socials}>
            <figure>
              <TwitterLogo size={32} weight="fill" />
            </figure>

            <figure>
              <DribbbleLogo size={32} weight="fill" />
            </figure>
            <figure>
              <FacebookLogo size={32} weight="fill" />
            </figure>
            <figure>
              <InstagramLogo size={32} weight="fill" />
            </figure>
          </div>
        </div>
        <div className={styles.links}>
          <span>
            <p>Sitemap</p>
            <ul>
              <li className={styles.disabled}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.disabled}>
                <Link to="/">Technology</Link>
              </li>
              <li className={styles.disabled}>
                <Link to="/">Services</Link>
              </li>
              <li className={styles.disabled}>
                <Link to="/">About</Link>
              </li>
            </ul>
          </span>

          <span className="disabled">
            <p>Case studies</p>
            <ul>
              <li className={styles.disabled}>Swiss Airlines</li>
              <li className={styles.disabled}>Google</li>
              <li className={styles.disabled}>Apple</li>
              <li className={styles.disabled}>Nike</li>
            </ul>
          </span>

          <span>
            <p>Contact me</p>
            <ul>
              <li>
                <a href={`mailto:${info.email}`}>Email</a>
              </li>
              <li>
                <a href={info.phone} target="_blank">
                  Whatsapp
                </a>
              </li>
              <li>
                <a href={info.linkedIn} target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={info.github} target="_blank">
                  Github
                </a>
              </li>
            </ul>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
