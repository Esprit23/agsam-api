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

    // fk_type_id 
    @Column({type:'int'})
    typeId:number
 
    // photo de profil
    @Column()
    pp:string;

    @Column()
    password:string;
}