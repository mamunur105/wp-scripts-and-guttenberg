<?php
// No named function here
return function( $attributes ) {
    ob_start();
    echo "Hellooooo";
    return ob_get_clean();
};