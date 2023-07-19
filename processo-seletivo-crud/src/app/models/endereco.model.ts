export interface Email {
    endereco: string;
    principal: boolean;
}

export interface Endereco {
    idendereco: number;
    email: Email[];
    principal: boolean;
    funcionario_id: number; // Chave estrangeira para o funcionário
}