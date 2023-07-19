export interface Email {
    endereco: string;
    principal: boolean;
}

export interface Endereco {
    idendereco: number;
    email: Email[];
    funcionario_id: number; // Chave estrangeira para o funcionário
}