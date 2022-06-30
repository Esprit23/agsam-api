import { Body, Controller, Delete, Get, HttpStatus, Logger, Param, Post, Put, Res } from '@nestjs/common'
import { Utilisateur} from './entities/utilisateur.entity';
import { UtilisateurService } from './utilisateur.service';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UtilisateurController {

    constructor(private readonly UtilisateurService :UtilisateurService,
         private jwtService: JwtService){}



    @Get()
    async findAll(@Res() response) {
        const user =await this.UtilisateurService.getAll();
        Logger.log('get all utilisateur ', 'utilisateur controler');
        return {
            statusCode: HttpStatus.OK,
            message: 'User fetched successfully',
            user
        } 
    }
    @Get(":id")
    async getOne(@Param("id") id){
        Logger.log('get one utilisateur ', 'utilisateur controler');
        const user =await this.UtilisateurService.getOne(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'User fetched successfully',
            user
        }  
       
    }

    // pour le registre
    @Post('/signup')
    async Signup(@Res() response, @Body() user: Utilisateur) {
        console.log(user)
        const newUSer = await this.UtilisateurService.signup(user);
        return response.status(HttpStatus.CREATED).json({
            newUSer
        })
    }

    //post pour connection
    @Post('/signin')
    async SignIn(@Res() response, @Body() user: Utilisateur) {
        const token = await this.UtilisateurService.signin(user, this.jwtService);
        return response.status(HttpStatus.OK).json(token)
    }
    
  

    @Put(':id')
    async updateUser(@Param('id') id :number,@Body() createUtilisateurDto:Utilisateur){
        const user = await this.UtilisateurService.update({ Id: id, utilisateur: createUtilisateurDto });
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
