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


// console.log( processData( '30\n1\n4\n9\n16\n25\n36\n49\n64\n81\n100\n121\n144\n169\n196\n225\n256\n289\n324\n361\n400\n441\n484\n529\n576\n625\n676\n729\n784\n841\n907\n' ) );

// ###############################################################

// Day 26: Nested Logic

function processData ( input ) {
    let [ret, due] = input.split( '\n' )
    let [d1, m1, y1] = due.split( ' ' ).map( n => +n )
    let [d2, m2, y2] = ret.split( ' ' ).map( n => +n )
    let fine = 0
    if ( y2 < y1 ) {
        fine = 0
    } else if ( y2 > y1 ) {
        fine = 10000
    } else {
        if ( m2 < m1 ) {
            fine = 0
            // console.log( 'here' );
        } else if ( m2 > m1 ) {
            fine = ( m2 - m1 ) * 500
        } else {
            if ( d2 > d1 ) {
                fine = ( d2 - d1 ) * 15
            }
        }
    }
    // if ( y2 <= y1 && m2 <= m1 && d2 <= d1 ) {
    //     fine = 0
    // } else if ( y2 > y1 ) {
    //     fine = 10000
    // } else if ( m2 > m1 ) {
    //     fine = ( m2 - m1 ) * 500
    // } else if ( d2 > d1 ) {
    //     fine = ( d2 - d1 ) * 15
    // } else if ( d2 < d1 ) {
    //     fine = 0
    // }
    console.log( fine );
}

// console.log( processData( "9 6 2015\n6 6 2015" ) );
console.log( processData( "31 12 2009\n1 1 2010" ) );
// console.log( processData( "24 12 1898\n18 9 1898" ) );

// ###############################################################

// Day 28: RegEx, Patterns, and Intro to Databases

function main () {
    const N = parseInt( readLine().trim(), 10 );
    let arr = []
    for ( let NItr = 0; NItr < N; NItr++ ) {
        const firstMultipleInput = readLine().replace( /\s+$/g, '' ).split( ' ' );

        const firstName = firstMultipleInput[0];

        const emailID = firstMultipleInput[1];
        if ( /@gmail\.com/g.test( emailID ) ) {
            arr.push( firstName )
        }
    }
    arr.sort()
    console.log( arr.join( '\n' ) )
}


// ###############################################################

// Day 29: Bitwise AND

/*
How bitwise & work:
convert each number to binary
compart each two bit from each binary 
the create new number form the binary
(4) => 00000000000000000000000000000100
(5) => 00000000000000000000000000000101
==================
(4&5)=>00000000000000000000000000000100 => (4 in decimal)

*/

function bitwiseAnd ( N, K ) {
    let max = -Infinity
    for ( let i = 1; i <= N; i++ ) {
        for ( let j = i + 1; j <= N; j++ ) {
            // console.log( i & j );
            let ij = i & j
            if ( ij < K && ij > max ) {
                max = ij
            }
        }
    }
    return max
}

console.log( bitwiseAnd( 5, 2 ) );
console.log( bitwiseAnd( 8, 5 ) );
console.log( bitwiseAnd( 2, 2 ) );

// ###############################################################