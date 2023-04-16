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
console.log( hourglassSum( arr ) );