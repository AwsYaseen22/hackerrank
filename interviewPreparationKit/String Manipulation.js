// Making Anagrams

/*
 * Complete the 'makeAnagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function makeAnagram ( a, b ) {
    // Write your code here
    let objA = a.split( '' ).reduce( ( acc, cur ) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1
        return acc
    }, {} )
    let objB = b.split( '' ).reduce( ( acc, cur ) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1
        return acc
    }, {} )
    // console.log( objA );
    // console.log( objB );
    let counter = 0
    let all = [...new Set( ( a + b ) )]
    // console.log( all );
    for ( const l of all ) {
        if ( !objA[l] ) {
            counter += objB[l]
        } else if ( !objB[l] ) {
            counter += objA[l]
        } else if ( objA[l] > objB[l] ) {
            counter += objA[l] - objB[l]
        } else if ( objB[l] > objA[l] ) {
            counter += objB[l] - objA[l]
        }
    }
    return counter
}

// console.log( makeAnagram( 'cde', 'dcf' ) );
// console.log( makeAnagram( 'cde', 'abc' ) );

// ######################################################

// Alternating Characters

/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternatingCharacters ( s ) {
    // Write your code here
    let counter = 0
    for ( let i = 1; i < s.length; i++ ) {
        if ( s[i - 1] === s[i] ) {
            counter++
        }
    }
    return counter
}

// console.log( alternatingCharacters( 'AAABBB' ) );

// ######################################################

// Sherlock and the Valid String

/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid ( s ) {
    let obj = s.split( '' ).reduce( ( acc, cur ) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1
        return acc
    }, {} )
    let arr = Object.values( obj ).sort( ( a, b ) => a - b )
    // console.log( arr );
    let fi = arr[0]
    let se = arr[1]
    let la = arr[arr.length - 1]
    let bla = arr[arr.length - 2]
    if ( arr.length === 1 ) {
        return 'YES'
    }
    if ( fi === la ) {
        return 'YES'
    }
    if ( fi === 1 && se === la ) {
        return 'YES'
    }
    if ( fi === se && se === bla && bla + 1 === la ) {
        return 'YES'
    }
    return 'NO'
}

// console.log( isValid( 'aabbcc' ), 'YES' );
// console.log( isValid( 'aabbcd' ), 'NO' );
// console.log( isValid( 'aabbccddeefghi' ), 'NO' );
// console.log( isValid( 'abcdefghhgfedecba' ), 'YES' );
// console.log( isValid( 'aabbc' ), 'YES' );
// console.log( isValid( 'aabbc' ) )

// ######################################################

// Special String Again

// Complete the substrCount function below.
function substrCount ( n, s ) {
    let counter = n
    for ( let i = 0; i < n; i++ ) {
        let same = 0
        while ( s[i + 1] && s[i] === s[i + 1] ) {
            same++
            i++
        }
        counter += ( same * ( same + 1 ) ) / 2
        let index = 1
        // reverse
        while ( i - index >= 0 && i + index < n && s[i + index] === s[i - 1] && s[i - index] === s[i - 1] ) {
            counter++
            index++
        }
    }
    return counter
}




// console.log( substrCount( 8, 'mnonopoo' ) );
// console.log( substrCount( 5, 'asasd' ) );
// console.log( substrCount( 7, 'abcbaba' ) );
console.log( substrCount( 4, 'aaaa' ) );
// console.log( substrCount( 4, 'aasaas' ) );

// ######################################################