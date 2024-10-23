//Criando a classe base Roupas
function Roupas(marca, cor, colecao){
    this.marca = marca;
    this.cor = cor;
    this.colecao = colecao;
}

Roupas.prototype.displayInfo = function(){
    console.log(`Marca: ${this.marca} Cor: ${this.cor} Colecao: ${this.colecao}`);
}

//Classe Camisa herdando de Roupas
function Camisa(marca, cor, colecao, tamanho ){
    Roupas.call(this, marca, cor, colecao);
    this.tamanho = tamanho;
}

Camisa.prototype = Object.create(Roupas.prototype);
Camisa.prototype.constructor = Camisa;

Camisa.prototype.displayInfo = function(){
    Roupas.prototype.displayInfo.call(this);
    console.log(`Tamanho: ${this.tamanho}`);
};

//Nova classe Calca herdando de roupas
function Calca(marca, cor, colecao, comprimento){
    Roupas.call(this, marca, cor, colecao);
    this.comprimento = comprimento;
};

Calca.prototype = Object.create(Roupas.prototype);
Calca.prototype.constructor = Calca;

Calca.prototype.displayInfo = function(){
    Roupas.prototype.displayInfo.call(this);
    console.log(`Comprimento: ${this.comprimento}`);
}

//Nova classe Jaquetas herdando de Roupas
function Jaqueta(marca, cor, colecao, material){
    Roupas.call(this, marca, cor, colecao);
    this.material = material;
}

Jaqueta.prototype = Object.create(Roupas.prototype);
Jaqueta.prototype.constructor = Jaqueta;

Jaqueta.prototype.displayInfo = function(){
    Roupas.prototype.displayInfo.call(this);
    console.log(`Material: ${this.material}`);
}

//Criando as instancia de objetos
const roupa1 = new Roupas('Billabong', 'Azul', 2022);
const camisa1 = new Camisa('Nike', 'Preta', 2023, 'M');
const calca1 = new Calca('Levis', 'Vermelha', 2021, '32');
const jaqueta1 = new Jaqueta('Zara', 'Bege', 2020, 'Couro' )

//Exibindo informacoes do objeto
roupa1.displayInfo();
camisa1.displayInfo();
calca1.displayInfo();
jaqueta1.displayInfo();

