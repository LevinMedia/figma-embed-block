const { __ } = wp.i18n;
const { InspectorControls } = wp.editor;
const { RadioControl } = wp.components;

export const PluginSidebar = ( props ) => {
	const { className, aspectRatio, onAspectRatioChange } = props;
	return (
		<InspectorControls>
			<div className={ className }>
				<hr />
				<RadioControl
					label={ __( 'Aspect Ratio' ) }
					help={ __( 'Choose the aspect ratio best suited for your frame.' ) }
					selected={ aspectRatio }
					options={ [
						{ label: 'Landscape', value: 'landscape' },
						{ label: 'Portrait', value: 'portrait' },
						{ label: 'Square', value: 'square' },
					] }
					onChange={ ( newAspectRatio ) => onAspectRatioChange( newAspectRatio ) }
				/>
			</div>
		</InspectorControls>
	);
};
