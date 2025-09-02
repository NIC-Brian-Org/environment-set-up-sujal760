console.log('main.js');
(() => {
    console.log('Here we are!')
    window.addEventListener("load", (event) => {
        const multiplier = document.getElementById( 'multiplier' );
        const multiplicand = document.getElementById( 'multiplicand' );
        const product = document.getElementById( 'product' );

        const update = () => {
            product.innerHTML = parseFloat( multiplier.value ) * parseFloat( multiplicand.value );
        };

        multiplier.addEventListener("input", update);
        multiplicand.addEventListener("input", update);
    });      
})();
