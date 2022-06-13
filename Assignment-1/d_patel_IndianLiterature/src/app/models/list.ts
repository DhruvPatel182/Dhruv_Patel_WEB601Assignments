import { Title } from "@angular/platform-browser";
import { Content } from "./content";

export class List {
    private _items : Content[];

    constructor(){
        this._items = [];
    }

    get items(): Content[]{
        return this._items;
    }

    addContent(oneContentItem : Content):void{
        this._items.push(oneContentItem);
    }
    

    getLength():number{
    return  this._items.length;
    }

    printOutput(index:number):any{
       return `
       <div class='ListItem'>
       <head><h1>${this.items[index].title}</h1></head>
       <body><p>${this.items[index].body}</p>
       <h4>${this.items[index].author}</h4>
       <img src="${this.items[index].imageLink}"></img>
       <div class='type'></div>
       </div> `;
    }  
}