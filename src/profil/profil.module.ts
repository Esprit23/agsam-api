import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilEntity as profil } from './entities/profil.entity';
import { ProfilController } from './profil.controller';
import { ProfilService } from './profil.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([profil])
    ],
    controllers: [ProfilController],
    providers: [ProfilService]
})
export class ProfilModule {}
