var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while (true){
    const [M, N] = lines.shift().split(' ').map(Number);
    if (M <=0 || N <=0){
        break;
    }
    let sum = 0;
    let sequencia = [];
    for (let i = Math.min(M, N); i <= Math.max(M, N); i++){
        sum +=i;
        sequencia.push(i);
    }
    console.log(`${sequencia.toString().replace(/,/g,' ')} Sum=${sum}`);
}