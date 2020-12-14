import { PersonModel } from "./person";

export class TaskModel {

    id: string;
    name: string;
    description: number;
    person: PersonModel;

    constructor(task: any) {
        this.id = task.id || null,
        this.name = task.name || null,
        this.description = task.description || null,
        this.person = task.person || null
    }

}