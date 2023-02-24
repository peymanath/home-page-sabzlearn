import { NavLink } from "react-router-dom";
import Image from "../Image/Image";

function Footer() {
	return (
		<section className="relative dark:bg-secondary pt-20 lg:pt-60 text-white">
			<Image
				className="absolute top-0 h-20 lg:h-60 w-full"
				nameImage="footer.svg"
			/>

			<div className="bg-secondary800 py-6">
				<div className="container flex flex-col gap-6">
					<p className="text-primary">ضمانت سبز لرن برای کلیه محصولات آموزشی</p>

					<div className="flex flex-wrap items-center justify-center xl:justify-between gap-10">
						<p className="leading-8 text-justify w-full xl:w-10/12">
							وقتی تازه شروع به یادگیری برنامه نویسی کردم. یکی از مشکلاتی که در
							فرآیند یادگیری داشتم، کمبود آموزش های خوب با پشتیبانی قابل قبول
							بود که باعث شد اون موقع تصمیم بگیرم اگر روزی توانایی مالی و فنی
							قابل قبولی داشتم یک وب سایت برای حل این مشکل راه اندازی کنم! و خب
							امروز آکادمی آموزش برنامه نویسی سبزلرن به عنوان یک آکادمی خصوصی
							فعالیت میکنه و این به این معنی هست که هر مدرسی اجازه تدریس در اون
							رو نداره و باید از فیلترینگ های خاص آکادمی سبزلرن رد شه! این به
							این معنی هست که ما برامون فن بیان و نحوه تعامل مدرس با دانشجو
							بسیار مهمه! ما در آکادمی سبزلرن تضمین پشتیبانی خوب و با کیفیت رو
							به شما میدیم . چرا که مدرسین وب سایت سبزلرن حتی برای پشتیبانی دوره
							های رایگان شون هم هزینه دریافت میکنند و متعهد هستند که هوای کاربر
							های عزیز رو داشته باشند
						</p>

						<NavLink to="/trust">
							<Image
								className="bg-white rounded-md p-3"
								nameImage="enamad.png"
							/>
						</NavLink>
					</div>

					<p className="text-[#ffffff80] text-center text-sm">
						© کلیه حقوق برای
						<span className="text-primary">
							<NavLink to="/"> سبزلرن </NavLink>
						</span>
						محفوظ است ۱۴۰۱
					</p>
				</div>
			</div>
		</section>
	);
}

export default Footer;
