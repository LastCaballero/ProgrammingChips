let memory = []
function save ( div = document.createElement('div') ) {
    let main    = []
    for (let index = 3; index < div.children.length; index += 3) {
        let sub     = []
        sub.push( div.children[index].cloneNode(true), div.children[index + 1].cloneNode(true) , div.children[index + 2].cloneNode(true)  )
        main.push( sub )
    }
    memory = main
}
function remove ( div = document.createElement('div') ) {
    for(let i = div.children.length -1 ; i > 2 ; i-- ) {
        div.children[i].remove()
    }
}
function sort( mode = 0 ) {
    switch (mode) {
        case 0:
            memory.sort( ( a, b ) => a[0].innerText.localeCompare(b[0].innerText) )        
            break;
        case 1:
            memory.sort( ( a, b ) => a[1].innerText.localeCompare(b[1].innerText) )
            break;
        case 2:
            memory.sort( ( a, b ) => Number.parseFloat(a[2].innerText) - Number.parseFloat(b[2].innerText) )
            break;
        default:
            break;
    }
}
function insert ( div ) {
    div.append( ...memory.flat() )
}

function action (div, mode) {
      save(div)
    remove(div)
      sort(mode)
    insert(div)
}