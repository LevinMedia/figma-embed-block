const { __ } = wp.i18n;
const { BlockControls } = wp.editor;
const { Toolbar, ToolbarButton } = wp.components;

export const PluginToolbar = ( props ) => {
	const { isEditMode, onEditModeToggle } = props;
	return (
		<BlockControls>
			<Toolbar>
				<ToolbarButton
					icon="edit"
					label={ __( 'Change url' ) }
					isActive={ isEditMode }
					onClick={ onEditModeToggle }
				/>
			</Toolbar>
		</BlockControls>
	);
};
