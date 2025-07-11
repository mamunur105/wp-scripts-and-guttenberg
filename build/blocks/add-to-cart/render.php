<?php
/**
 * Template variables:
 *
 * @var $attributes                    atrributes.
 */
if ( ! function_exists( 'atttrrrrrr' ) ) {
	function atttrrrrrr( $attributes ) {
		if ( empty( $attributes['productId'] ) ) {
			return '<div style="color:red;">No product selected.</div>';
		}
        global $product;
        $product = wc_get_product( $attributes['productId'] );
		ob_start();
		woocommerce_template_single_add_to_cart();
		return ob_get_clean();
	}
}
echo atttrrrrrr( $attributes );
