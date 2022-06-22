import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';

@Controller('profil')
export class ProfilController {


    @Get()
    findAll(){
        Logger.log('get all profil', 'profil controler');
        return `getAll Profil`
    }

    @Get(':id')
    findOne(@Param("id") id :number){
        Logger.log(`get id ${id}`,'profil controler');
        return [`ID ${id}`]
    }

    @Post()
    create(@Body() createProfilDto:[]){
        Logger.log('create P','profil controler');
        return 'profil created'
    }

    @Put(':ProfilId')
    update( @Param('ProfilId') ProfilId, @Body() creatProfilDto:[]){
        Logger.log(`Profil ${ProfilId} is updated`)
        return `Profil ${ProfilId} is updated`
    }
    @Delete(':ProfilId')
    delete(@Param('ProfilId')ProfilId){
        Logger.log(`Profile deleted `)
        return `Profil ${ProfilId} is deleted`
    }

}
