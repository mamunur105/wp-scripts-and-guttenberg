import React from 'react';
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';

const BLOCK_NAME = 'guten/add-to-cart';

wp.blocks.registerBlockType(BLOCK_NAME, {
    edit: ({ attributes, setAttributes }) => {
        const blockProps = useBlockProps();

        return (
            <div {...blockProps}>
                <TextControl
                    label={__('Product ID', 'guten-add-to-cart')}
                    value={attributes.productId || ''}
                    onChange={(value) => setAttributes({ productId: parseInt(value) })}
                />
                <p>{__('This will render the variation dropdown and add to cart on the frontend.', 'guten-add-to-cart')}</p>
            </div>
        );
    },

    save: () => null, // SSR only
});