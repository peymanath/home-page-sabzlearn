import ButtonGradient from "../../Button/ButtonGradient";
import Image from "../../Image/Image";

function CourseCard({ items }) {
	return (
		items &&
		items.map(({ title, link, category, price, image, students }, index) => (
			<div
				key={index}
				className="flex flex-col items-center justify-center rounded-md lg:w-[31%] overflow-hidden bg-white dark:bg-secondary800 shadow-md">
				<Image nameImage={image} />

				<div className="flex flex-col items-center justify-between gap-6 p-4 h-full w-full">
					<span className="text-xs text-center bg-blue-600 text-white rounded-full p-1 px-2">
						{category}
					</span>

					<span className="text-secondary800 dark:text-white">{title}</span>

					<div className="flex flex-wrap items-center justify-between w-full text-secondary800 dark:text-white">
						<p>{price}</p>

						<p className="flex flex-col gap-۱ items-center">
							<span className="text-[#cdb187]">{students}</span>
							دانشجو
						</p>
					</div>

					<ButtonGradient
						title="مشاهده دوره"
						link={link}
						className="bg-white text-secondary800 dark:bg-secondary800 dark:text-white"
						fullWidth={true}
					/>
				</div>
			</div>
		))
	);
}

export default CourseCard;
