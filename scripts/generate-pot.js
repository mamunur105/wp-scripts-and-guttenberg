import wpPot from 'wp-pot';

wpPot({
    package: 'Guten Add to Cart',
    domain: 'wp-scripts-and-guttenberg',
    src: '**/*.php',
    destFile: 'languages/wp-scripts-and-guttenberg.pot'
});