import {Component}  from "@angular/core";
import { CurrencyPipe, DecimalPipe} from "@angular/common";
import {UsersService} from "./user.service";
import {User} from "./shared/user";
import {BirthdayPipe} from  "./shared/birthday.pipe";
 @Component ({
    templateUrl:"./app/user/user.component.html",
    pipes:[CurrencyPipe, DecimalPipe, BirthdayPipe],
    providers:[UsersService]
    
    
})

export class Usercomponent{
    data:User[];
    constructor(private  service:UsersService){
        this.data = service.getUser();
    }

}