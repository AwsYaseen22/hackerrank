// 2D Array - DS

function hourglassSum ( arr ) {
    let all = []
    for ( let i = 0; i < arr.length / 2 + 1; i++ ) {
        let hourGlass = []
        for ( let j = 0; j < 4; j++ ) {
            let top = ( arr[i].slice( j, j + 3 ) ).reduce( ( acc, cur ) => acc + cur )
            let mid = arr[i + 1].slice( j, j + 3 )[1]
            let bot = arr[i + 2].slice( j, j + 3 ).reduce( ( acc, cur ) => acc + cur )
            hourGlass.push( top + mid + bot )
        }
        all.push( Math.max( ...hourGlass ) )
    }

    return Math.max( ...all )
}

let arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
]
// console.log( hourglassSum( arr ) );

// ###########################################################

// Arrays: Left Rotation

function rotLeft ( a, d ) {
    // Write your code here
    let chunck = a.splice( 0, d )
    return a.concat( chunck )
}

// console.log( rotLeft( [1, 2, 3, 4, 5], 2 ) );

// ###########################################################

// New Year Chaos

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

// Write your code here
function minimumBribes ( q ) {
    let counter = 0;
    for ( let i = q.length - 1; i >= 0; i-- ) {
        if ( q[i] - i - 1 > 2 ) {
            console.log( "Too chaotic" );
            return;
        }
        let j = Math.max( 0, q[i] - 2 )
        for ( ; j < i; j++ ) {
            if ( q[j] > q[i] ) counter++;
        }
    }
    console.log( counter );
}

// console.log( minimumBribes( [1, 2, 3, 5, 4, 6, 7, 8] ) );
// console.log( minimumBribes( [4, 1, 2, 3] ) );
// console.log( minimumBribes( [2, 1, 5, 3, 4] ) );
// console.log( minimumBribes( [5, 1, 2, 3, 7, 8, 6, 4] ) );
// console.log( minimumBribes( [1, 2, 5, 3, 4, 7, 8, 6] ) );


// ###########################################################


function minimumSwaps ( arr ) {
    let counter = 0;
    let i = 0;
    while ( i < arr.length ) {
        let cur = arr[i];
        if ( cur - 1 != i ) {
            [arr[cur - 1], arr[i]] = [arr[i], arr[cur - 1]]
            counter++;
        } else {
            i++;
        }
    }
    return counter;
}

// console.log( minimumSwaps( [7, 1, 3, 2, 4, 5, 6] ) );

// ###########################################################

// Array Manipulation

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation ( n, queries ) {
    // Write your code here
    let arr = new Array( n ).fill( 0 )
    let max = -Infinity
    for ( let i = 0; i < queries.length; i++ ) {
        let from = queries[i][0]
        let to = queries[i][1]
        let num = queries[i][2]
        arr[from - 1] += num
        arr[to] -= num
    }
    let cur = 0
    for ( let i = 0; i < n; i++ ) {
        cur += arr[i]
        if ( cur > max ) {
            max = cur
        }
    }
    // arr = arr.map( ( e, i ) => {
    //     if ( i >= from - 1 && i < to ) {
    //         e += num
    //         if ( e > max ) {
    //             max = e
    //         }
    //     }
    //     return e
    // } )
    // if ( from >= 1 && to <= arr.length ) {

    // for ( let i = from - 1; i < to; i++ ) {
    //     arr[i] += num
    //     if ( arr[i] > max ) {
    //         max = arr[i]
    //     }
    // }
    // }

    return max
}

// console.log( arrayManipulation( 10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]] ) );

// ###########################################################