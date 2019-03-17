function tools(){
    return {
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
        }
    }
}