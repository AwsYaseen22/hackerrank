// Day 25: Running Time and Complexity

function processData ( input ) {
    //Enter your code here
    let arr = input.split( '\n' ).slice( 1 ).map( n => +n )
    const isPrime = ( num ) => {
        for ( let i = 2; i < Math.ceil( num / 2 ); i++ ) {
            if ( num % i === 0 ) {
                return false
            }
        }
        return true
    }
    arr.forEach( n => {
        if ( n === 1 || n === 0 ) {
            console.log( 'Not prime' )
        } else if ( n === 2 ) {
            console.log( 'Prime' )
        }
        else if ( n !== 2 && n % 2 === 0 ) {
            console.log( 'Not prime' )
        } else if ( String( n ).length > 1 && String( n ).split( '' ).reduce( ( acc, cur ) => acc + +cur, 0 ) % 3 === 0 ) {
            console.log( 'Not prime' )
        } else if ( isPrime( n ) ) {
            console.log( 'Prime' )
        } else {
            console.log( 'Not prime' )
        }
    } )

}


console.log( processData( '30\n1\n4\n9\n16\n25\n36\n49\n64\n81\n100\n121\n144\n169\n196\n225\n256\n289\n324\n361\n400\n441\n484\n529\n576\n625\n676\n729\n784\n841\n907\n' ) );

// ###############################################################