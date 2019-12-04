
export const View = ( props ) => {
	const { className, url, aspectRatio } = props;
	const embedURL = `https://www.figma.com/embed?embed_host=share&url=${ encodeURIComponent( url ) }`;
	return (
		/* this extra wrapper div gets max-width set */
		<div className={ className }>
			<div className={ `figma-embed-block figma-embed-block--${ aspectRatio }` }>
				<iframe
					className="figma-embed-block__embed"
					key={ aspectRatio } /* force creation of a new iframe to force figma to update its layout */
					src={ embedURL }
					allowFullScreen
					title="A figma file" /* TODO: figure out something more accessible */
				/>
			</div>
		</div>
	);
};
