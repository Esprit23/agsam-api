import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class UtilisateurEntity{
    @PrimaryGeneratedColumn({type:'int'})
    id:number;

    @Column()
    fname:string;

    @Column()
    username:string;

    @Column()
    email:string;

    @Column()
    password:string;
}