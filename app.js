import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process'

class ListaPropriedades {
    constructor() {
        this.propCss = [];
        this.rl = createInterface({
            input: ProcessingInstruction.stdin,
            output: ProcessingInstruction.stdout
        });
    }

    start() {
        console.log('Digite a propriedade CSS, ou digite "sair" para encerrar');
        this.rl.on('line', input => {
            if (input.toUperCase() === 'sair'){
                this.rl.close();

            }else {
                

            }
        })
    }
    addPropCss(propriedades) {
        this.propCss.push(propriedades);
    }

}
