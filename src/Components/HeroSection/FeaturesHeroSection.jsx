import Image from "../Image/Image";
function FeaturesHeroSection({ title, total }) {
	return (
		<div className="flex flex-col gap-2 items-center justify-center w-full sm:w-[31%]">
			<Image
				nameImage="stat-time.svg"
				className="text-white w-[80px] sm:w-[130px] md:w-[180px]"
			/>
			<p>{title}</p>
			<p>{total}</p>
		</div>
	);
}

export default FeaturesHeroSection;
