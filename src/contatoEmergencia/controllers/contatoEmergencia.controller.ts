import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { ContatoEmergenciaService } from "../services/contatoEmergencia.service";
import { ContatoEmergencia } from "../entities/contatoEmergencia.entity";



@Controller("/contatoemergencia")
export class ContatoEmergenciaController {
    constructor(private readonly contatoService: ContatoEmergenciaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<ContatoEmergencia[]> {
        return this.contatoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id') id: number): Promise<ContatoEmergencia> {
        return this.contatoService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() contato: ContatoEmergencia): Promise<ContatoEmergencia> {
        return this.contatoService.create(contato);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() contato: ContatoEmergencia): Promise<ContatoEmergencia> {
        return this.contatoService.update(contato);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number) {
        return this.contatoService.remove(id);
    }
}