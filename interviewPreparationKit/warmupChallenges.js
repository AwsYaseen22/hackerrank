
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