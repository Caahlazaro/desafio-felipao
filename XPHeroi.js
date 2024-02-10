//usei readline para interagir com o usuário no terminal Node.js.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, //indica que a entrada será lida do console (teclado).
    output: process.stdout//indica que a saída será escrita no console.
});

// Obter entrada do usuário
rl.question("Digite o nome do herói: ", function(nomeHeroi) {
    rl.question("Digite a quantidade de XP do herói: ", function(xpHeroi) {
        xpHeroi = parseInt(xpHeroi);

        // Classificar o nível do herói
        let nivel;

        if (xpHeroi < 1000) {
            nivel = "Ferro";
        } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
            nivel = "Bronze";
        } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
            nivel = "Prata";
        } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
            nivel = "Ouro";
        } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
            nivel = "Platina";
        } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
            nivel = "Ascendente";
        } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        // Exibir resultado
        console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);

        // Fechar a interface readline
        rl.close();
    });
});

