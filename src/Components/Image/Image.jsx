function Image({ className, nameImage, alt, title, width, height }) {
	const ImageURL = require(`../../Assets/Images/${nameImage}`);

	return (
		<img
			width={width}
			height={height}
			src={ImageURL}
			alt={alt}
			title={title}
			className={className}
		/>
	);
}

export default Image;
