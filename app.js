import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process'
import { createInterface } from 'node:readline';
import chalk from "chalk"

class ListaPropriedades {
    constructor() {
        this.propCss = [];
        
        
        this.rl = createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    começa() {
        console.log(chalk.blue("              ||Seja bem-vindo(a) ao REKTjojo insert's||"))
        
        console.log(chalk.yellow("          Lembre-se de digitar apenas uma propriedade por vez!"))
        
        console.log("------------------------------------------------------------------------------------------------")
        console.log("| Digite a propriedade CSS que deseja inserir na lista ou digite 'sair' para encerrar o programa |");
        console.log("-------------------------------------------------------------------------------------------------")
        this.rl.on('line', input => {
            const sair = input.toLowerCase() === 'sair'

            if (sair) {
                this.rl.close();
            }

            const isValid = this.validaCampo(input)

            if (isValid) {
                this.addPropCss(input);
                
            }
        })
        this.rl.on('close', () => {
            this.MostraNaTela();
            console.log(chalk.redBright("Programa encerrado!"))
            console.log("Até mais")
        })
    }

    addPropCss(propriedades) {
        this.propCss.push(propriedades);
        
    }


    MostraNaTela() {
       
        const verifLista = this.propCss.length === 0
        const AlinhadoCss = this.propCss.sort();

        if (verifLista){
            console.log(chalk.red('A lista está vazia!'))
        } else {
            console.log(chalk.green('Propriedades organizadas'))
            AlinhadoCss.forEach(propriedades => console.log(propriedades));
        }
       

        
    }

    validaCampo(input) {
        const isNotNumber = isNaN(parseInt(input))
        const isNotEmpty = input.trim() != ""
        const isValid = isNotNumber && isNotEmpty 

        if (!isValid) {
            console.log("Digite algo valido!")
        }
        return isValid;
    }
}

const listaPropriedades = new ListaPropriedades();
listaPropriedades.começa();




