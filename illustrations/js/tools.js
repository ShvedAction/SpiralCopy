function tools(){
    const tools = {
        /*
            Build field from divs representing a two dimension matrix.
            n is count of columns
            m is count of rows 
            parent is tag to output
            result is a two dimension matrix like array of array with divs
        */
        buildField: (n, m, parent) => {
            const result = []
            for(let i = 0; i < m; i++){
                const row = document.createElement("div")
                row.classList = "row"
                parent.appendChild(row)

                result.push([])
                for(let j = 0; j < n; j++){
                    result[i][j] = document.createElement("div")
                    row.appendChild(result[i][j])
                }
            }
            return result
        },

        fillMatrixRandoms: matrix => {
            for(const rowIndex in matrix){
                const row = matrix[rowIndex]
                for(const columnIndex in row){
                    row[columnIndex].innerHTML = Math.round(Math.random() * 9)
                }
            }
        },

        /*
            Itterate spiral
            def callback(x, y, index)
        */
        speralItterator: (n, m, callback, startPoint = [0, 0], direct=[1,0], offset=0) => {
            if (n*m < 1)
                return false

            const [xdirect, ydirect] = direct
            let [x, y] = startPoint

            const countEdgeStep = Math.abs(xdirect) * n + Math.abs(ydirect) * m
            for(let index = offset; index < countEdgeStep + offset - 1; index++){
                callback(x, y, index)
                x += xdirect
                y += ydirect
            }


            const rotateDirect = [-ydirect, xdirect]

            callback(x, y, countEdgeStep + offset - 1)

            x += rotateDirect[0]
            y += rotateDirect[1]

            tools.speralItterator(n - Math.abs(rotateDirect[0]), m - Math.abs(rotateDirect[1]), callback, [x, y], rotateDirect, countEdgeStep + offset)
        },

        /*
            calculate circle index
        */
        spiralCircleIndex: (index, n, m) => {
            //index from center
            const i = n * m - 1 - index 

            const minDim = Math.min(n, m)
            let a0, a1
            if (m == n){
                a0 = minDim % 2
                a1 = 4 + (minDim  % 2) * 4
            }else{
                a0 = (minDim % 2) * (Math.abs(m - n) + 1)
                a1 = (minDim % 2 + 1) *(Math.abs(m - n) + 1) + 6 * (minDim % 2)
            }

            return Math.floor((Math.sqrt(Math.pow(4 - a1, 2) - 16*(a0 - i)) + 4 - a1) / 8) + 1
        },

        /*
            calculate cordinates by index for spiral copy problem
        */
        spiralCordinates: (index, n, m) => {
            //todo:
        }
    }

    return tools
}