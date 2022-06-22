import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfilEntity as profil} from './entities/profil.entity';

@Injectable()
export class ProfilService {
    constructor(
        @InjectRepository(profil)
        private profilRepository: Repository<profil>,
    ){}

    getAll():Promise<profil[]>{

        return this.profilRepository.find();
    }
    getOne(Id ):Promise<profil>{

        return this.profilRepository.findOne(Id)
    }

    create(Profile:profil):Promise<profil>{

        return this.profilRepository.save(Profile)
    }

    async update(id:number, Profile:profil) {
         await this.profilRepository.update(id,Profile)
    }

    async remove(id:number):Promise<void> {
        
        await this.profilRepository.delete(id)
    }
}
