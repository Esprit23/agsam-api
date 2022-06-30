<<<<<<< HEAD
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
=======
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
>>>>>>> f264d06a782cf3af4e2a8bd5706f0b080af6ef77
import { Utilisateur } from '../../utilisateur/entities/utilisateur.entity';

@Entity('profil')
export class Profil{
<<<<<<< HEAD
    @PrimaryGeneratedColumn()
=======
    @PrimaryGeneratedColumn({name:'profilId'})
>>>>>>> f264d06a782cf3af4e2a8bd5706f0b080af6ef77
    id:number;

    @Column({name:'profiltype'})
    type:string;
    
<<<<<<< HEAD
    @OneToOne(()=>Utilisateur,user=> user.profil ,{onDelete:"CASCADE"})
    user:Utilisateur;
=======
>>>>>>> f264d06a782cf3af4e2a8bd5706f0b080af6ef77
   
}