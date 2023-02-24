import FeaturesHeroSection from "./FeaturesHeroSection";

function HeroSectionAbout() {
	// Get data from API
	const DataHero = {
		learning: "۱۲۱۵۴ دقیقه",
		teacher: "۱۲۴ مدرس",
		student: "۵۰۱۴ دانشجو",
	};

	return (
		<section>
			<div className="relative bg-hero bg-no-repeat bg-cover text-white">
				<div className="bg-[#2f3041d7] absolute inset-0 w-full h-full"></div>

				<div className="relative container flex flex-col gap-14 items-center justify-center py-20 sm:py-52 lg:py-48 xl:py-52 xl:px-56">
					<div className="text-xl leading-10 lg:text-3xl lg:leading-[3.5rem] xl:text-4xl xl:leading-[3.5rem] text-center">
						<span>
							خود آموزی، کسب تجربه، ورود به بازار کار با سبزلرن با کمترین هزینه
							خودت حرفه ای یادبگیر
						</span>
					</div>

					<div className="flex flex-wrap gap-2 w-full justify-around">
						<FeaturesHeroSection title="ساعت آموزش" data={DataHero.learning} />
						<FeaturesHeroSection title="تعداد مدرس" data={DataHero.teacher} />
						<FeaturesHeroSection title="تعداد دانشجو" data={DataHero.student} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSectionAbout;
