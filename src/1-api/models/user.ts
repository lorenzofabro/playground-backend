export class UserModel {

    id: string;
    firstName: string;
    lastName: string;
    age: number;

    constructor(user: any) {
        this.id = user.id || null,
        this.firstName = user.firstName || null,
        this.lastName = user.lastName || null,
        this.age = user.age || null
    }
}