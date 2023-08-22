var matrizA = [[1, 2],
                [3, 4]]
var matrizB = [[2, 3]
            , [5, 4]]
var matrizC = [];

if (matrizA.length != matrizB.length) {
    console.log("Não é possivel calcular")
} else {
    var result = []
    for (let i = 0; i < matrizA[0].length; i++) {
        let teste = [];
        let testeA = matrizA[i]

        for (let j = 0; j <= 1; j++) {
            let testeB = []
            for (let arr of matrizB) {
                testeB.push(arr[j])
            }


            let soma = 0

            for (let index = 0; index < testeA.length; index++) {
                soma += testeA[index] * testeB[index]
            }

            teste.push(soma)
        }
        result.push(teste)
    }

}

console.log(result)