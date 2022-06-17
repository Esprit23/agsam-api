import { Body, Controller, Delete, Get, HttpStatus, Logger, Param, Post, Put, Res } from '@nestjs/common'
import { UtilisateurEntity } from './entities/utilisateur.entity';
import { UtilisateurService } from './utilisateur.service';

@Controller('utilisateur')
export class UtilisateurController {

    constructor(private UtilisateurService :UtilisateurService){
    }

    @Get()
    async findAll() {
        const response =await this.UtilisateurService.getAll();
        Logger.log('get all utilisateur ', 'utilisateur controler');
        return response;
        // res.status(HttpStatus.OK).json({payload:response})
    }
    @Get(":id")
    async getOne(@Param("id") id:number): Promise<UtilisateurEntity>{
        Logger.log('get one utilisateur ', 'utilisateur controler');
        const response =await this.UtilisateurService.getOne(id);
        return response;
    }
    @Post()
    async create(@Body() createUtilisateurDto:UtilisateurEntity) {
        const response = await this.UtilisateurService.create(createUtilisateurDto);
        Logger.log('create utilisateur ', 'utilisateur controler');
        return response;

    }
    @Put(":id")
    async update(@Param('id') id :number,@Body() createUtilisateurDto:UtilisateurEntity){
        const response = await this.UtilisateurService.update(id,createUtilisateurDto);
        Logger.log('update utilisateur ', 'utilisateur controler');
        return response;
    }
    @Delete(":id")
    async delete(@Param('id') id: number){
        const response = await this.UtilisateurService.remove(id);
        Logger.log('delete utilisateur ', 'utilisateur controler');
        return response;
    }
}
