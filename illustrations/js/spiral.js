(function(){
    "use strict"
    const tls = tools()

    const [N, M] = [8, 8]

    const field = document.getElementById('field')
    const matrix = tls.buildField(N, M, field)
    //tls.fillMatrixRandoms(matrix)

    tls.speralItterator(N, M, (x, y, index) =>{
        matrix[y][x].innerHTML = '' + tls.spiralCircleIndex(index, N, M)
    })
})()