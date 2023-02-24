import { NavLink } from "react-router-dom";

function ButtonGradient({ title, link, className, fullWidth }) {
	return (
		<NavLink to={link} className={fullWidth ? "w-full" : null}>
			<button
				className={`flex items-center justify-center bg-gradient-to-r from-green-600 to-cyan-500 p-0.5 rounded hover:to-green-600 hover:from-cyan-500 shadow w-full`}
				title={title}>
				<div
					className={`flex items-center justify-center w-full h-full pt-1 pb-2 px-4 leading-none ${className}`}>
					<span>{title}</span>
				</div>
			</button>
		</NavLink>
	);
}

export default ButtonGradient;
