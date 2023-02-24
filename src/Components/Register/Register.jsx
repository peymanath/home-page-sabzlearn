import ButtonGradient from "../Button/ButtonGradient";

function Register() {
	return (
		<div className="hidden lg:flex gap-2 items-center justify-between">
			<ButtonGradient
				title="ورود"
				link="/login"
				className="bg-white text-secondary dark:bg-secondary dark:text-white"
			/>

			<ButtonGradient
				title="ثبت نام"
				link="/register"
				className="bg-white text-secondary dark:bg-secondary dark:text-white"
			/>
		</div>
	);
}

export default Register;
