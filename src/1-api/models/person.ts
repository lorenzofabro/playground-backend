export class PersonModel {

    id: string;
    firstName: string;
    lastName: number;
    birthDate: Date;
    gender: Date;
    phoneNumber: Date;
    nationality: Date;
    profilePicture: Date;
    description: Date;
    // tasks: Task[];

    constructor(person: any) {
        this.id = person.id || null,
        this.firstName = person.firstName || null,
        this.lastName = person.lastName || null,
        this.birthDate = person.birthDate || null,
        this.gender = person.gender || null,
        this.phoneNumber = person.phoneNumber || null,
        this.nationality = person.nationality || null,
        this.profilePicture = person.profilePicture || null,
        this.description = person.description || null
    }

}