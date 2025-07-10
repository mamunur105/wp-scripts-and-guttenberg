import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

registerBlockType(metadata.name, {
    ...metadata,
    edit: ({ attributes, setAttributes }) => {
        const blockProps = useBlockProps();
        return (
            <div {...blockProps}>
                <TextControl
                    label={__('Product ID', 'my-multi-blocks')}
                    value={attributes.productId || ''}
                    onChange={(val) => setAttributes({ productId: parseInt(val) })}
                />
            </div>
        );
    },
    save: () => null // Server-side render only
});