import CourseCards from "../Components/Cards/Course/CourseCards";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import HeroSectionAbout from "../Components/HeroSection/HeroSectionAbout";

function HomePage() {
	return (
		<>
			<Header />
			<HeroSectionAbout />
			<CourseCards />
			<Footer />
		</>
	);
}

export default HomePage;
