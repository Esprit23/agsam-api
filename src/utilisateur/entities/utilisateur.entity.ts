

import { Profil } from "src/profil/entities/profil.entity";
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, OneToOne, JoinColumn } from "typeorm";

@Entity('users')
export class Utilisateur{
    @PrimaryGeneratedColumn({type:'int'})
    id:number;

    @Column()
    fname:string;

    @Column()
    username:string;

    @Column()
    email:string;

    @Column({type:'boolean'})
    isActive:boolean
   
    @Column()
    profilId:number
 
    @OneToOne(()=>Profil,profil=>profil.user, {onDelete:"SET NULL"})
    @JoinColumn()
    profil:Profil;
  
    @Column()
    password:string;

    
}


