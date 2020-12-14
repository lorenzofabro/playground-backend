import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Task } from "./Task";
import { User } from "./User";

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    firstName: string;

    @Column({ length: 45 })
    lastName: string;

    @Column({ nullable: true })
    birthDate: Date

    @Column({
        nullable: true,
        type: "enum",
        enum: ["Male", "Female", "Other"]
    })
    gender: string;

    @Column({ nullable: true })
    phoneNumber: string;

    @Column({ nullable: true })
    nationality: string;

    @Column({ nullable: true })
    profilePicture: string;

    @Column({ nullable: true })
    description: string;

    @OneToOne(type => User, user => user.person)
    user: User;

    @OneToMany(type => Task, task => task.person, { nullable: true })
    tasks: Task[];
}
