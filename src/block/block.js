/**
 * BLOCK: figma-embed-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import { FigmaIcon } from './icons';
import { PluginToolbar } from './toolbar';
import { PluginSidebar } from './sidebar';
import { Edit } from './edit';
import { View } from './view';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { useState, Fragment } = wp.element;

const defaultAspectRatio = 'landscape';

registerBlockType( 'cgb/block-figma-embed-block', {
	icon: <FigmaIcon />,
	title: __( 'Figma' ),
	description: __( 'Embed a Figma frame into your post or page.' ),
	category: 'embed',
	keywords: [
		__( 'Figma' ),
		__( 'Design' ),
		__( 'Image' ),
	],

	attributes: {
		url: {
			type: 'string',
		},
		aspectRatio: {
			type: 'string',
		},
	},

	edit: ( props ) => {
		const { className, attributes: { url, aspectRatio = defaultAspectRatio }, setAttributes } = props;
		const [ isEditMode, setEditMode ] = useState( false );

		/** @param {string} newURL The new URL */
		const handleURLChange = ( newURL ) => {
			setEditMode( false );
			setAttributes( { url: newURL } );
		};

		/** @param {string} newAspectRatio The new aspect ratio */
		const handleAspectRatioChange = ( newAspectRatio ) => {
			setAttributes( { aspectRatio: newAspectRatio } );
		};

		const handleEditModeToggle = () => {
			setEditMode( state => ! state );
		};

		const toolbar = <PluginToolbar className={ `${ className }-toolbar` } isEditMode={ isEditMode } onEditModeToggle={ handleEditModeToggle } />;
		const sidebar = <PluginSidebar className={ `${ className }-sidebar` } aspectRatio={ aspectRatio } onAspectRatioChange={ handleAspectRatioChange } />;

		if ( isEditMode || ! url ) {
			return (
				<Fragment>
					{ toolbar }
					{ sidebar }
					<Edit className={ className } url={ url } onURLChange={ handleURLChange } />
				</Fragment>
			);
		}
		return (
			<Fragment>
				{ toolbar }
				{ sidebar }
				<View url={ url } className={ className } aspectRatio={ aspectRatio } />
			</Fragment>
		);
	},

	save: ( props ) => {
		const { className, attributes: { url, aspectRatio = defaultAspectRatio } } = props;
		return (
			<View className={ className } url={ url } aspectRatio={ aspectRatio } />
		);
	},
} );
