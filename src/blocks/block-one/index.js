import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import metadata from './block.json';

registerBlockType(metadata.name, {
    ...metadata,
    edit({ attributes, setAttributes }) {
        return (
            <RichText
                tagName="p"
                value={attributes.content}
                onChange={(content) => setAttributes({ content })}
                placeholder="Write something..."
            />
        );
    },
    save({ attributes }) {
        return <RichText.Content tagName="p" value={attributes.content} />;
    },
});