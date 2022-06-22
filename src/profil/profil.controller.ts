import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { ProfilService } from './profil.service';

@Controller('profil')
export class ProfilController {

    constructor(private readonly profilService : ProfilService){}

    @Get()
    async findAll(){
        Logger.log('get all profil', 'profil controler');
        const rep = await this.profilService.getAll();
        return rep
    }

    @Get(':id')
    async findOne(@Param("id") id :number){
        Logger.log(`get id ${id}`,'profil controler');
        // const rep = await this.profilService.getOne(id);
        return  [`ID ${id}`]
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
