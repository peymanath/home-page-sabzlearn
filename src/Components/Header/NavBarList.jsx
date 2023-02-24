import * as React from "react";
import { NavLink } from "react-router-dom";

function NavBarList({ List }) {
	return (
		List &&
		List.map((navItem, index) => (
			<li
				key={index}
				className="text-secondary dark:text-white hover:opacity-80">
				<NavLink to={navItem.link}>{navItem.title}</NavLink>
			</li>
		))
	);
}

export default NavBarList;
