
export const View = ( props ) => {
	const { className, url, aspectRatio } = props;
	const embedURL = `https://www.figma.com/embed?embed_host=share&url=${ encodeURIComponent( url ) }`;
	return (
		<div className={ `${ className } is-${ aspectRatio }` }>
			<iframe
				key={ aspectRatio } /* force creation of a new iframe to force figma to update its layout */
				src={ embedURL }
				allowFullScreen
				title="A figma file" /* TODO: figure out something more accessible */
			/>
		</div>
	);
};
