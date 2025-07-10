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

function guten_add_to_cart_block_init() {
	wp_register_script(
		'guten-add-to-cart-editor',
		plugins_url( 'dist/add-to-cart.js', __FILE__ ),
		[ 'wp-blocks', 'wp-element', 'wp-i18n', 'wp-components', 'wp-block-editor' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'dist/add-to-cart.js' ),
		true
	);

	wp_register_style(
		'guten-add-to-cart-style',
		plugins_url( 'dist/style.css', __FILE__ ),
		[],
		filemtime( plugin_dir_path( __FILE__ ) . 'dist/style.css' )
	);

	register_block_type(
		__DIR__ . '/blocks/add-to-cart/block.json',
		[
			'editor_script'   => 'guten-add-to-cart-editor',
			'style'           => 'guten-add-to-cart-style',
			'render_callback' => 'guten_add_to_cart_render',
		]
	);
}
add_action( 'init', 'guten_add_to_cart_block_init' );

function guten_add_to_cart_render( $attributes ) {
	if ( empty( $attributes['productId'] ) ) {
		return '<p>No product selected.</p>';
	}

	$product = wc_get_product( $attributes['productId'] );
	$text = __('Add to cart', 'wp-scripts-and-guttenberg');


	ob_start();
	woocommerce_template_single_add_to_cart();
	return ob_get_clean();
}
