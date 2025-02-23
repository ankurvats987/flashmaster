import { Link } from "react-router";

const NavbarListItem = ({ itemIcon, itemName, linkTo }) => {
  return (
    <Link to={linkTo}>
      <button>
        {itemIcon}
        {itemName}
      </button>
    </Link>
  );
};

export default NavbarListItem;
