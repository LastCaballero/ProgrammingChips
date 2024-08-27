
line = [ 1, 2, 3, 4, 5 , 6 , 7, 8, 9, 10 ]

// enrich the array with a function

line.rand = () => {
    const len    = line.length
    const times  = len * 10
    const get_index = () => Number.parseInt( Math.random() * len )
    for (let i = 0; i < times ; i++) {
        let index_a = get_index()
        let index_b = get_index()
        if ( index_a != index_b ) {
            let values = [ line[index_a], line[index_b] ]
            line[index_a] = values[1]
            line[index_b] = values[0]
        }    
    }
}

// then simply call the function. No matter, what is in the array it will be randomized

line.rand()
