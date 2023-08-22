var matriz = [
    [10,20],
    [30,40],
    [50,60]
]

console.log("Matriz:\n")
console.log(matriz)

function transposta(matriz){
    let trans = [];
    for (let i = 0; i < matriz[0].length; i++) {
        let numlinha = [];
        for (const j of matriz){
                numlinha.push(j[i]);
            } 
        trans.push(numlinha);
    }

    return trans;
}


console.log("\nMatriz Transposta:\n");
console.log(transposta(matriz));



