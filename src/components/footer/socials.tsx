import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";
import { Link } from "react-router";

interface Props {
  className?: string;
}

const Socials = ({ className }: Props) => {
  return (
    <ul className={className}>
      <li>
        <Link to="#">
          <SlSocialFacebook />
        </Link>
      </li>
      <li>
        <Link to="#">
          <SlSocialInstagram />
        </Link>
      </li>
      <li>
        <Link to="#">
          <SlSocialTwitter />
        </Link>
      </li>
      <li>
        <Link to="#">
          <SlSocialYoutube />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
