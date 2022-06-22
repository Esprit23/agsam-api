import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('profil')
export class ProfilEntity{
    @PrimaryGeneratedColumn({type:'int', name:'profilId'})
    id:number;

    @Column({name:'profiltype'})
    type:string;
}