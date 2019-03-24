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

        timeout: (ms) =>{
            return new Promise(resolve => setTimeout(resolve, ms))
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

        periodicFuncеtions: {
            miander: (T, w) => {
                if (w > 0.5)
                    console.error("Wrong weight of impuls! It should be less or equal 0.5")
                return x => (x % T - (x % T) % (T - T*w))/ (T - T*w)
            },

            saw: T => x => Math.abs(Math.abs(x + T/2) % T - T/2) / (T/2),

            obtuseSaw: T =>{
                const sideMiander = x => tools.periodicFuncеtions.miander(T/2, 0.5)(x + T/4)
                const topMiander = x => tools.periodicFuncеtions.miander(T, 0.25)(x + T/2)

                const saw = x => tools.periodicFuncеtions.saw(T)(x + T/8)* (T/2) - T/8

                return x => sideMiander(x) * saw(x) + topMiander(x) * T / 4
            }
        
        },

        /*
            calculate the index of a circle by an element index
        */
        spiralCircleIndex: (index, n, m) => {
            //index from center
            const i = n * m - 1 - index 

            const d = n - m

            //TODO: get rid of this "if"
            let n1
            if ( n < m){
                n1 = (n + 1) % 2 + 1
            }else{
                n1 = (m + 1) % 2 + 1 + d
            }

            return Math.floor((Math.sqrt(Math.pow(2*n1 - d, 2) - 4*(n1*n1 - n1*d - i)) - 2*n1 + d)/4) + 2
        },

        /*
            calculate cordinates by index for spiral copy problem
        */
        spiralCordinates: (index, n, m) => {
            //Now for square only
            if (n != m)
                console.error("now for square only")

            const circlIndex  = tools.spiralCircleIndex(index, n, m)

            //the width of the current square circle
            const widCircle = circlIndex * 2 - n % 2

            const passedCircleElements = n * n - widCircle * widCircle

            const piremetr = widCircle == 1 ?  1 : widCircle * 4 - 4

            const period = piremetr

            const xFunc = tools.periodicFuncеtions.obtuseSaw(period)
            const yFunc = (t) => tools.periodicFuncеtions.obtuseSaw(period)(t - period/4)
            
            return [
                xFunc(index-passedCircleElements) + (n-widCircle)/2, 
                yFunc(index-passedCircleElements) + (n-widCircle)/2
            ]

            //todo: for rectangle
        }
    }

    return tools
}