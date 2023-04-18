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