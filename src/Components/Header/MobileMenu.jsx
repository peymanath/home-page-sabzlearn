import { BiMenuAltLeft } from "react-icons/bi";

function MobileMenu() {
	return (
		<button
			className="flex lg:hidden border border-[#e5e7eb] dark:border-white rounded py-1 px-1.5 shadow"
			title="منو موبایل">
			<BiMenuAltLeft size="1.2rem" className="text-secondary dark:text-white" />
		</button>
	);
}

export default MobileMenu;
