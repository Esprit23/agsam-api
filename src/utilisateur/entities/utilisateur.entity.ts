
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import * as crypto from 'crypto';

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
 
    // photo de profil
    @Column()
    pdp:string;

    // @BeforeInsert()
    // hashPassword() {
    //   this.password = crypto.createHmac('sha256', this.password).digest('hex');
    // }
    @Column()
    password:string;

    
}


