(function(){
    "use strict"
    const tls = tools()

    const [N, M] = [10, 12]

    const field = document.getElementById('field')
    const matrix = tls.buildField(N, M, field)
    tls.fillMatrixRandoms(matrix)
})()