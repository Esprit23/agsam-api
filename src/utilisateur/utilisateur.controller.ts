import { Body, Controller, Delete, Get, HttpException, HttpStatus, Logger, Param, Patch, Post, Put, Res } from '@nestjs/common'
import { Utilisateur} from './entities/utilisateur.entity';
import { UtilisateurService } from './utilisateur.service';
import { JwtService } from '@nestjs/jwt'
import { userDto} from './utilisateur.Dto'

@Controller('user')
export class UtilisateurController {

    constructor(private UtilisateurService :UtilisateurService){
    }

    

    @Get()
    async findAll() {
        const user =await this.UtilisateurService.getAll();
        Logger.log('get all utilisateur ', 'utilisateur controler');
        return {
            statusCode: HttpStatus.OK,
            message: 'User fetched successfully',
            user
        } 
        // res.status(HttpStatus.OK).json({payload:response})
    }
    @Get(":id")
    async getOne(@Param("id") id)/*:Promise<UtilisateurEntity>*/{
        Logger.log('get one utilisateur ', 'utilisateur controler');
        const user =await this.UtilisateurService.getOne(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'User fetched successfully',
            user
        }  
       
    }
    
    @Get(":email")
    async getEmail(@Param("email") email){
        const user =await this.UtilisateurService.findByEmail(email);
        return {
            statusCode: HttpStatus.OK,
            message: 'User fetched successfully',
            user
        } 
    }
    
    @Post()
    async createUser(@Body() data: userDto/* createUtilisateurDto:Utilisateur*/ ) {
        const user= await this.UtilisateurService.create(data);
        Logger.log('create utilisateur ', 'utilisateur controler');
        return {
            statusCode: HttpStatus.OK,
            message: 'User created successfully',
            user
        } 

    }
    @Put(':id')
    async updateUser(@Param('id') id :number,@Body() createUtilisateurDto:Utilisateur){
        const user = await this.UtilisateurService.update(id,createUtilisateurDto);
        Logger.log('update utilisateur ', 'utilisateur controler');
        return {
            statusCode: HttpStatus.OK,
            message: 'User updated successfully',
            user
        } 
    }
    @Delete(":id")
    async delete(@Param("id") id:number){
        await this.UtilisateurService.remove(id);
        Logger.log('delete utilisateur ', 'utilisateur controler');
        return {
            statusCode: HttpStatus.OK,
            message: 'User deleted successfully',
        };
    }
}
