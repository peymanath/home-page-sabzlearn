import NavBarList from "./NavBarList";

function NavBar() {

    // Get data from API
	const NavList = [
		{
			title: "خانه",
			link: "/",
		},
		{
			title: "دوره های آموزشی",
			link: "/course",
		},
		{
			title: "مقالات",
			link: "/blog",
		},
		{
			title: "درباره ما",
			link: "/about-us",
		},
		{
			title: "سرویس ها",
			link: "/services",
		},
	];

	return (
		<ul className="hidden lg:flex gap-4">
			<NavBarList List={NavList} />
		</ul>
	);
}

export default NavBar;
