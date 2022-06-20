import inquirer from 'inquirer';

export interface iInquirerAnswers {
    name: string;
    cerveza: string;
}

export function setup(): Promise<iInquirerAnswers> {
    return inquirer.prompt([
        { name: 'name', message: 'Cual es tu nombre' },
        { name: 'cerveza', message: 'Cual es tu cerveza favorita' },
    ]);
}
