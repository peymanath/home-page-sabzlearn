import SectionsCardTitle from "../../Titles/SectionsCardTitle";
import CourseCard from "./CourseCard";


function CourseCards() {

    // Get data from API
	const course = [
		{
			title: "آموزش تخصصی Redux مقدماتی تا پیشرفته",
			link:"/course/redux",
			category: "آموزش برنامه نویسی فرانت اند",
			price: "۷۰۰.۰۰۰ تومان",
			image: "sabz-redux.png",
			students: "۱۰۱۲",
		},
		{
			title: "آموزش Next.js بصورت پروژه محور",
			link:"/course/next",
			category: "آموزش برنامه نویسی فرانت اند",
			price: "۸۵۰.۰۰۰ تومان",
			image: "sabz-next.png",
			students: "۱۰۱۵",
		},
		{
			title: "آموزش ۲۰ کتابخانه کاربردی ReactJS برای بازارکار",
			link:"/course/react",
			category: "آموزش برنامه نویسی فرانت اند",
			price: "۵۷۰.۰۰۰ تومان",
			image: "sabz-react.png",
			students: "۱۰۳۷",
		},

		{
			title: "آموزش جامع و پروژه محور Tailwind css",
			link:"/course/css",
			category: "آموزش برنامه نویسی فرانت اند",
			price: "۳۵۰.۰۰۰ تومان",
			image: "sabz-css.jpg",
			students: "۱۶۸",
		},
		{
			title: "آموزش کاربردی Typescript بصورت پروژه محور",
			link:"/course/typeScript",
			category: "آموزش برنامه نویسی فرانت اند",
			price: "۹۰۰.۰۰۰ تومان",
			image: "sabz-typeScript.jpg",
			students: "۲۱۳",
		},
		{
			title: "آموزش git و github",
			link:"/course/git",
			category: "آموزش برنامه نویسی",
			price: "۳۴۰.۰۰۰ تومان",
			image: "sabz-git.jpg",
			students: "۳۴۴",
		},
	];

	return (
		<section className="py-10 bg-white dark:bg-secondary">
			<div className="container flex flex-col gap-8">
				<SectionsCardTitle
					title="جدید‌ترین دوره‌های سبزلرن"
					titleClass="text-primary"
					dashClass="border-gary-600 dark:border-secondary800"
				/>

				<div className="flex flex-wrap gap-3 justify-between">
					<CourseCard items={course} />
				</div>
			</div>
		</section>
	);
}

export default CourseCards;
