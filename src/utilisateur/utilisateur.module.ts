import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './entities/utilisateur.entity';
import { UtilisateurController } from './utilisateur.controller';
import { UtilisateurService } from './utilisateur.service';
import { JwtModule } from '@nestjs/jwt';
import { secret } from 'src/utilis/constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateur]),
    JwtModule.register({
      secret,
      signOptions: { expiresIn: 3600 },
    })
  ],
  controllers: [UtilisateurController],
  providers: [UtilisateurService]
})
export class UtilisateurModule {}
