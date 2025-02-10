class Entity{
    constructor(){
        this.id = Math.random();
        this.components = {};
    }

    addComponent(component){
        this.components[component.constructor.name] = component;
    }

    returnComponent(componentName){
        return this.components[componentName];
    } 
}       
