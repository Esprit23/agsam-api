import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profil } from './entities/profil.entity';
import { ProfilController } from './profil.controller';
import { ProfilService } from './profil.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([Profil])
    ],
    controllers: [ProfilController],
    providers: [ProfilService]
})
export class ProfilModule {}
