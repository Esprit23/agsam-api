import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { ProfilModule } from './profil/profil.module';
import { DataSource } from 'typeorm';
import { diskStorage } from 'multer';
import { MulterModule } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static'
import { isAuthenticated } from './app.middlware';


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
    MulterModule.register({
      storage: diskStorage({
        destination: './public',
        filename: (req, file, cb) => {
          const ext = file.mimetype.split('/')[1];
          cb(null, `${uuidv4()}-${Date.now()}.${ext}`);
        },
      })
    }),
   ServeStaticModule.forRoot({
     rootPath: join(__dirname, '..', 'public'),
   }),
    ProfilModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(isAuthenticated)
      // .exclude(
      //   { path: '/:id', method: RequestMethod.GET }
      // )
      // .forRoutes(VideoController);
  }
  constructor( private dataSource: DataSource){}
}
