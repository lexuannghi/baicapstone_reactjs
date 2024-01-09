import React from "styled-components";
import { randomRgbaColor } from "../../Utility/index";
import { Link } from "react-scroll";

function MenuItem(props) {
  const { name, Icon, to } = props;
  return (
    <Link
      className="subMenu"
      to={to}
      spy={true}
      smooth={true}
      offset={-90}
      duration={500}
      isDynamic={true}>
      <Icon className="icon" style={{ color: randomRgbaColor(1) }} />
      <span>{name}</span>
    </Link>
  );
}
export default MenuItem;
