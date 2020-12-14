import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Person } from "./Person";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ name: "email", unique: true })
    email: string;

    @OneToOne(type => Person, person => person.user, { cascade: true, onDelete: "CASCADE" })
    @JoinColumn()
    person: Person; 

}
