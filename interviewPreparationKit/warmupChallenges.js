
// Jumping on the Clouds

function jumpingOnClouds ( c ) {
    // Write your code here
    let res = 0
    let i = 0
    while ( i < c.length - 1 ) {
        if ( c[i + 2] === 0 ) {
            res++
            i += 2
        } else {
            res++
            i += 1
        }
    }
    return res
}

// console.log( jumpingOnClouds( [0, 1, 0, 0, 0, 1, 0] ) );
// console.log( jumpingOnClouds( [0, 0, 1, 0, 0, 1, 0] ) );
// console.log( jumpingOnClouds( [0, 0, 0, 0, 1, 0] ) );

// ######################################################

// Repeated String

function repeatedString ( s, n ) {
    let aCounter = ( str ) => str.length ? str.split( '' ).filter( l => l === 'a' ).length : 0

    let len = n / s.length
    let remain = n % s.length
    let string = s.slice( 0, Math.floor( remain ) )

    let stringA = aCounter( string )
    if ( s.length > n ) {
        return stringA
    } else {
        return stringA + ( aCounter( s ) * Math.floor( len ) )
    }
}

// console.log( repeatedString( 'abcac', 10 ) );
// console.log( repeatedString( 'aba', 10 ) );
// console.log( repeatedString( 'a', 1000000000000 ) );


// ######################################################