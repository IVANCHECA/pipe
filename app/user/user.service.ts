import {Injectable} from "@angular/core";
import {User}  from  "./shared/user"
@Injectable()
export class UsersService{
    user:User[];
    getUser(){
        if(this.user == null){
            this.user =[];
            let u1:User  = new User();
            u1.name = "djose martin";
            u1.age  =24;
           u1.indentify = 12234456;
            u1.birthday =new Date("2003-10-09");
            u1.type  = " administrador";
            u1.cash  =45000;
            this.user.push(u1);

            let u2:User  = new User();
            u2.name = "pepito perez";
            u2.age  =26;
            u2.indentify = 12555456;
            u2.birthday =new Date("2003-10-09");
            u2.type  = " supervisor";
            u2.cash  =29000;
            this.user.push(u2);

            let u3:User  = new User();
            
            u3.name = "juanita ju";
            u3.age  =22;
             u3.indentify = 34554456;
            u3.birthday =new Date("1990-09-07");
            u3.type  = " aux";
            u3.cash  =50000;
            this.user.push(u3);

        }
        return  this.user;

    }  
     
}