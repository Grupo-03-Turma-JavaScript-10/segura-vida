import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { ContatoEmergenciaService } from "../services/contatoEmergencia.service";
import { ContatoEmergencia } from "../entities/contatoEmergencia.entity";



@Controller("/contatoemergencia")
export class ContatoEmergenciaController{
    constructor(private readonly contatoService: ContatoEmergenciaService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<ContatoEmergencia[]>{
        return this.contatoService.findAll();
    }

}