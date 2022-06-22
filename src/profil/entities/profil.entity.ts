import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Utilisateur } from '../../utilisateur/entities/utilisateur.entity';

@Entity('profil')
export class Profil{
    @PrimaryGeneratedColumn({name:'profilId'})
    id:number;

    @Column({name:'profiltype'})
    type:string;
    
   
}