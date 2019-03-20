(function(){
    "use strict"
    const tls = tools()

    const [N, M] = [9, 9]

    const field = document.getElementById('field')
    const matrix = tls.buildField(N, M, field)
    //tls.fillMatrixRandoms(matrix)

    tls.spiralCordinates(32, N, M)

    tls.speralItterator(N, M, (x, y, index) =>{
        const [xc, yc] = tls.spiralCordinates(index, N, M)
        //matrix[y][x].innerHTML = '' + xc + ';'+  yc
        matrix[y][x].innerHTML = '' + xc + ';'+  yc + ';' + index
        //matrix[y][x].innerHTML = '' + x + ';'+  y
    })

    
})()