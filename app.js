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
}