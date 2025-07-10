<?php
if ( !  function_exists( 'atttrrrrrr' ) ) {
	function atttrrrrrr( $attributes ) {
		if ( empty( $attributes['productId'] ) ) {
			return '<div style="color:red;">No product selected.</div>';
		}
		return '<div style="color:green;">Product ID: ' . intval( $attributes['productId'] ) . '</div>';
	}
}
echo atttrrrrrr( $attributes );