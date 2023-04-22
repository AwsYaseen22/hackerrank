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