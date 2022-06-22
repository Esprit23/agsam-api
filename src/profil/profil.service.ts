import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profil } from './entities/profil.entity';

@Injectable()
export class ProfilService {
    constructor(
        @InjectRepository(Profil)
        private profilRepository: Repository<Profil>,
    ){}

    getAll():Promise<Profil[]>{

        return this.profilRepository.find();
    }
    async getOne({id}):Promise<Profil>{

        return this.profilRepository.findOne(id);
    }

    create(Profile:Profil):Promise<Profil>{

        return this.profilRepository.save(Profile);
    }

    async update({ id, Profile }: { id: number; Profile: Profil; }) {
         await this.profilRepository.update(id,Profile);
    }

    async remove(id:number):Promise<void> {
        
        await this.profilRepository.delete(id)
    }
}


