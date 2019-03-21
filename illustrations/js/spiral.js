(function(){
    "use strict"
    const tls = tools()

    const [N, M] = [5, 5]

    const field = document.getElementById('field')
    const linerOut = document.getElementById('line')
    const matrix = tls.buildField(N, M, field)
    tls.fillMatrixRandoms(matrix)
    const flashOneByOne = async function(){
        let delay = 150
        const acceleration = 2
        for(let i = 0; i < N*M; i++){
            await timeout(delay)
            delay -= acceleration
            const [xc, yc] = tls.spiralCordinates(i, N, M)
            matrix[yc][xc].classList = "flashMe"
            const cell = document.createElement('div')
            cell.classList = "flashMe"
            cell.innerHTML = matrix[yc][xc].innerHTML
            linerOut.appendChild(cell)
       }
    }

    flashOneByOne()

    const [xc, yc] = tls.spiralCordinates(0, N, M)

    // tls.speralItterator(N, M, (x, y, index) =>{
    //     const [xc, yc] = tls.spiralCordinates(index, N, M)
    //     const circleIndex = tls.spiralCircleIndex(index, N, M)
    //     matrix[y][x].innerHTML = '' + xc + ';'+  yc+ ' ;' +  circleIndex
    //     //matrix[y][x].innerHTML = ''   + index + ' ;' +  circleIndex
    //     //matrix[y][x].innerHTML = '' + x + ';'+  y
    // })

    
})()

function timeout(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}