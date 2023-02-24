import React, { useEffect } from "react";
import { BiBrightness } from "react-icons/bi";

function DarkMode() {
    
	useEffect(() => {
		document.documentElement.classList.add(localStorage.theme);
	}, []);

	const ChangeMode = () => {
		localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";

		localStorage.theme === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	};

	return (
		<button
			className="border border-[#e5e7eb] dark:border-white rounded py-1 px-1.5 shadow"
			onClick={ChangeMode}
			title="تغییر مود سایت">
			<BiBrightness size="1.2rem" className="text-secondary dark:text-white" />
		</button>
	);
}

export default DarkMode;
