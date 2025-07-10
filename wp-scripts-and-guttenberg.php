<?php
/**
 * Plugin Name: Guten Add to Cart
 * Description: Custom Gutenberg block for WooCommerce Add to Cart with variations.
 * Version: 1.0.0
 * Author: Your Name
 * Text Domain: guten-add-to-cart
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
function mmb_register_blocks() {
	$dir = __DIR__ . '/build/blocks';

	foreach ( [ 'add-to-cart', 'block-one', 'block-two' ] as $block ) {
		register_block_type( "$dir/$block" );
	}

	wp_register_script(
		'mmb-blocks-script',
		plugins_url( 'build/index.js', __FILE__ ),
		[],
		filemtime( __DIR__ . '/build/index.js' ),
		true
	);
}
add_action( 'init', 'mmb_register_blocks' );
