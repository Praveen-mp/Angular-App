import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    allowNewServer:boolean=false;
    constructor(){
        setTimeout(()=>{
            this.allowNewServer=true;
        },4000);
    }
    serverStatus="server not created"
    onCreateServer(){
         this.serverStatus="server created";
    }
    title="hello home works";
}
