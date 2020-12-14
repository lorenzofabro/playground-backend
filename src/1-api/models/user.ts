import { PersonModel } from "./person";

export class UserModel {

    id: string;
    username: string;
    email: number;
    person: PersonModel;

    constructor(user: any) {
        this.id = user.id || null,
        this.username = user.username || null,
        this.email = user.email || null,
        this.person = user.person || null
    }


}