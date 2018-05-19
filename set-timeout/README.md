# Set Timeout

## Problem Domain

Why does this output "5" to the console 5 times?

How can we fix this?

for ( var i = 0; i < 5; i++ ) {
 setTimeout(function() {
   console.log( i );
 }, i * 100 );
}

## Answer

JavaScript only has function scope. A way to create a scope that is different for every loop is to wrap the contents of the loop in a function. This way the `setTimeout` function creates a closure around `i` for that iteration of the loop.