export interface Email {
    endereco: string;
    principal: boolean;
}
  
export interface Funcionario {
    nome: string;
    idade: number;
    emails: Email[];
    cargo: string;
    salario: string;
    dataAdmissao: string;
    dataDemissao: string;
    ativo: boolean;
}