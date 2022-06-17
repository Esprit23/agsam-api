import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UtilisateurEntity } from './entities/utilisateur.entity';

@Injectable()
export class UtilisateurService {
    constructor(
        @InjectRepository(UtilisateurEntity)
        private  utilisateurRepository: Repository<UtilisateurEntity>,
    ){}

    getAll(){
        //get all 
        return this.utilisateurRepository.find();
    }
    getOne(Id):Promise<UtilisateurEntity>{
        // get one user
        return this.utilisateurRepository.findOne(Id)
    }
    create(utilisateur:UtilisateurEntity):Promise<UtilisateurEntity>{
        // create utilsateur
        return this.utilisateurRepository.save(utilisateur);
    }
    async update(id:number ,utilisateur:UtilisateurEntity) {
        // update utilisateur
        await this.utilisateurRepository.update(id, utilisateur);
    }
    async remove(id:number):Promise<void> {
        // delete utilisateur
        await this.utilisateurRepository.delete(id);
    }

}
