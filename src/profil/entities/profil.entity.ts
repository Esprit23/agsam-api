import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Utilisateur } from '../../utilisateur/entities/utilisateur.entity';

@Entity('profil')
export class Profil{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:'profiltype'})
    type:string;
    
    @OneToOne(()=>Utilisateur,user=> user.profil ,{onDelete:"CASCADE"})
    user:Utilisateur;
   
}