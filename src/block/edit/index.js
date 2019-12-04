import { Form, Field } from 'react-final-form';

const { __ } = wp.i18n;
const { Placeholder, TextControl, Button } = wp.components;
import { FigmaIcon } from '../icons';

export const Edit = ( props ) => {
	const { className, url, onURLChange } = props;

	const validate = ( { url: newURL } ) => {
		const messages = {};

		if ( ! /^https:\/\/www.figma.com\/(file|proto)\/[^\/]+\/[^\/]+/.test( newURL ) ) {
			messages.url = __( 'Please enter a valid link URL' );
		}

		return messages;
	};

	const handleSubmit = ( { url: newURL } ) => onURLChange( newURL );

	return (
		<div className={ className }>
			<Placeholder
				icon={ <FigmaIcon className="logo" /> }
				label={ __( 'Figma' ) }
				instructions={ __( 'Embed a frame, page or prototype.' ) }
			>
				<Form
					onSubmit={ handleSubmit }
					validate={ validate }
					initialValues={ { url } }
					render={ ( { handleSubmit: onSubmit } ) => (
						<form onSubmit={ onSubmit }>
							<Field
								name="url"
								render={ ( { input, meta } ) => (
									<TextControl
										label={ __( 'Link URL:' ) }
										help={ meta.touched && meta.error && meta.error }
										{ ...input }
									/>
								) }
							/>
							<Button type="submit" isDefault>Save</Button>
						</form>
					) }
				/>
			</Placeholder>
		</div>
	);
};
