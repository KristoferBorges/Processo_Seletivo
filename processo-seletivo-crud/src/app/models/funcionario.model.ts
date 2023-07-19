export enum AtivoEnum {
    Sim = 'Sim',
    Nao = 'Não',
}
export interface Funcionario {
    idfuncionario: number;
    nome: string;
    nascimento: string; 
    email: string;
    cargo: string;
    salario: number;
    ativo: AtivoEnum;
    dataAdmissao: string;
    dataDemissao: string;
}
