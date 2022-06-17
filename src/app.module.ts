import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurModule } from './utilisateur/utilisateur.module';


@Module({
  imports: [
    UtilisateurModule,
    TypeOrmModule.forRoot({
      name: 'default',
      type:"mysql",
      host:"localhost",
      port:3306,
      username:"root",
      password:null,
      database:"agsam_db",
      synchronize: true,
      logging:true,
      entities:["dist/**/**.entity.{ts,js}"]
    }
    )
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
