import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import metadata from './block.json';
registerBlockType( metadata.name, {
    ...metadata,
    edit: ({ attributes, setAttributes }) => {
        const blockProps = useBlockProps();

        return (
            <div {...blockProps}>
                <TextControl
                    label={__('Product ID', 'wp-scripts-and-guttenberg')}
                    value={attributes.productId || ''}
                    onChange={(value) => setAttributes({ productId: parseInt(value) })}
                />
                <p>{__('This will render the variation dropdown and add to cart on the frontend.', 'wp-scripts-and-guttenberg')}</p>
            </div>
        );
    },

    save: () => null, // SSR only
});