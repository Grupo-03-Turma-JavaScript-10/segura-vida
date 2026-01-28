import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { ContatoEmergenciaService } from "../services/contatoEmergencia.service";
import { ContatoEmergencia } from "../entities/contatoEmergencia.entity";
import { CreateContatoEmergenciaDto } from '../dto/create-contato.dto';
import { UpdateContatoEmergenciaDto } from '../dto/update-contato.dto';

@ApiTags('contatos-emergencia')
@Controller("/contatos-emergencia")
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
    @ApiOperation({ summary: 'Criar novo contato de emergência' })
    @ApiBody({ type: CreateContatoEmergenciaDto })
    @ApiResponse({ status: 201, description: 'Contato criado com sucesso' })
    create(@Body() createContatoDto: CreateContatoEmergenciaDto): Promise<ContatoEmergencia> {
        return this.contatoService.create(createContatoDto as any);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Atualizar contato de emergência' })
    @ApiBody({ type: UpdateContatoEmergenciaDto })
    update(@Body() updateContatoDto: UpdateContatoEmergenciaDto): Promise<ContatoEmergencia> {
        return this.contatoService.update(updateContatoDto as any);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number) {
        return this.contatoService.remove(id);
    }
}