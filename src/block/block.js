/**
 * BLOCK: figma-embed-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-figma-embed-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Figma' ), // Block title.
	icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect id="Rectangle" fill="#333333" x="0" y="0" width="24" height="24" rx="4"/><path d="M9,21 C10.6565,21 12,19.6565 12,18 L12,15 L9,15 C7.3435,15 6,16.3435 6,18 C6,19.6565 7.3435,21 9,21" id="Fill-1" fill="#0ACF83"/><path d="M6,12 C6,10.3435 7.3435,9 9,9 L12,9 L12,15 L9,15 C7.3435,15 6,13.6565 6,12" id="Fill-3" fill="#A259FF"/><path d="M6,6 C6,4.3435 7.3435,3 9,3 L12,3 L12,9 L9,9 C7.3435,9 6,7.6565 6,6" id="Fill-5" fill="#F24E1E"/><path d="M12,3 L15,3 C16.6565,3 18,4.3435 18,6 C18,7.6565 16.6565,9 15,9 L12,9 L12,3 Z" id="Fill-7" fill="#FF7262"/><path d="M18,12 C18,13.6565 16.6565,15 15,15 C13.3435,15 12,13.6565 12,12 C12,10.3435 13.3435,9 15,9 C16.6565,9 18,10.3435 18,12" id="Fill-9" fill="#1ABCFE"/></svg>,
	category: 'embed', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Figma' ),
		__( 'Design' ),
		__( 'Image' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		// Creates a <p class='wp-block-cgb-block-figma-embed-block'></p>.
		return (
			<div className={ props.className }>
				<p>— Hello from the backend.</p>
				<p>
					CGB BLOCK: <code>figma-embed-block</code> is a new Gutenberg block
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		return (
			<div>
				<p>— Hello from the frontend.</p>
				<p>
					CGB BLOCK: <code>figma-embed-block</code> is a new Gutenberg block.
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	},
} );
