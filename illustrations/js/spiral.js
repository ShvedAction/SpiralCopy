(function(){
    "use strict"
    const tls = tools()

    const [N, M] = [9, 9]

    const field = document.getElementById('field')
    const matrix = tls.buildField(N, M, field)
    tls.fillMatrixRandoms(matrix)
    const flashOneByOne = async function(){
        for(let i = 0; i < N*M; i++){
            await timeout(120)
            const [xc, yc] = tls.spiralCordinates(i, N, M)
            matrix[yc][xc].classList = "flashMe"
       }
    }

    flashOneByOne()

    // tls.speralItterator(N, M, (x, y, index) =>{
    //     const [xc, yc] = tls.spiralCordinates(index, N, M)
    //     const circleIndex = tls.spiralCircleIndex(index, N, M)
    //     //matrix[y][x].innerHTML = '' + xc + ';'+  yc
    //     matrix[y][x].innerHTML = ''   + index //+ ' ;' +  circleIndex
    //     //matrix[y][x].innerHTML = '' + x + ';'+  y
    // })

    
})()

function timeout(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}