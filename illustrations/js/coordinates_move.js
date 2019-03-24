(function(){
    "use strict"
    const tls = tools()

    const [N, M] = [7, 7]

    const field = document.getElementById('field')
    const xTrackCurve = document.getElementById('xtrack')
    const xcurve = document.getElementById('xcurve')

    const matrix = tls.buildField(N, M, field)
    tls.fillMatrixRandoms(matrix)
    const flashOneByOne = async function(){
        let delay = 150
        const acceleration = 2
        let curve_x_point = ''
        const [shiftx, shifty, shiftt] = [10, 10, 10]
        for(let i = 0; i < N*M; i++){
            await tls.timeout(delay)
            delay -= acceleration
            const [xc, yc] = tls.spiralCordinates(i, N, M)
            matrix[yc][xc].classList = "flashMe"
            curve_x_point += `${xc*15},${i*15} `
            const point = xcurve.createSVGPoint()
            point.x = xc*30 + shiftx
            point.y = i*10 + shiftt
            xTrackCurve.points.appendItem(point)
            const cir1 = document .createElementNS("http://www.w3.org/2000/svg", "circle");
            cir1.setAttribute("cx", point.x );
            cir1.setAttribute("cy", point.y );
            cir1.classList = 'svgPoint'
            xcurve.appendChild(cir1)
       }
    }

    flashOneByOne()
    
})()
