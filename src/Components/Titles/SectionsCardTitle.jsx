function SectionsCardTitle({ title, titleClass, dashClass }) {
	return (
		<div className="flex items-center justify-center gap-4">
			<hr className={`border border-dashed flex-1 ${dashClass}`} />
			<p className={titleClass}>{title}</p>
			<hr className={`border border-dashed flex-1 ${dashClass}`} />
		</div>
	);
}

export default SectionsCardTitle;
