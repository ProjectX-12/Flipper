export class Entity{
    constructor(){
        this.id = Math.floor(Math.random() * 1000000);//Gera um ID aleatório (Arrendonar aqui depois)
        this.components = {};//Cria um objeto vazio para pode receber os componentes futuramente
    }

    addComponent(component){
        this.components[component.constructor.name/*Busca o nome da classe do componente instanciado para usar como chave*/] = component;
    }

    returnComponent(componentName){
        return this.components[componentName];
    } 
}       
      