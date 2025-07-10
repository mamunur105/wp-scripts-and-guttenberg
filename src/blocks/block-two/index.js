import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import metadata from './block.json';

registerBlockType(metadata.name, {
    ...metadata,
    edit({ attributes, setAttributes }) {
        return (
            <RichText
                tagName="div"
                value={attributes.content}
                onChange={(content) => setAttributes({ content })}
                placeholder="Write content..."
            />
        );
    },
    save({ attributes }) {
        return <RichText.Content tagName="div" value={attributes.content} />;
    },
});