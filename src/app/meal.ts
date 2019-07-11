export class Meal {
    showDescription: boolean;
    constructor (public id:number, public name:string,public calories:number, public description:string){
        this.showDescription= false;
    }
}
