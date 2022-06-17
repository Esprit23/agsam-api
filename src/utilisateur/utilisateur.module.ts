import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurEntity } from './entities/utilisateur.entity';
import { UtilisateurController } from './utilisateur.controller';
import { UtilisateurService } from './utilisateur.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UtilisateurEntity])
  ],
  controllers: [UtilisateurController],
  providers: [UtilisateurService]
})
export class UtilisateurModule {}
