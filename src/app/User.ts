import { IUsers } from 'src/app/login-page/IUsers';

export class User implements IUsers{
    firstname : string;
    lastname : string;
    email : string;
    gender : string;
    password : string;
    userid:number;
}