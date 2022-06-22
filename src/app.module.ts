import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { ProfilModule } from './profil/profil.module';
import { DataSource } from 'typeorm';


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
      synchronize: false,
      logging:true,
      entities:["dist/**/**.entity.{ts,js}"]
    }
    ),
    ProfilModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor( private dataSource: DataSource){}
}
