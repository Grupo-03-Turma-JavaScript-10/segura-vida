import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { EnderecoService } from "../services/endereco.service";
import { Endereco } from "../entities/endereco.entity";
import { CreateEnderecoDto } from '../dto/create-endereco.dto';
import { UpdateEnderecoDto } from '../dto/update-endereco.dto';

@ApiTags('enderecos')
@Controller("/enderecos")
export class EnderecoController {
    constructor(private readonly enderecoService: EnderecoService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Endereco[]> {
        return this.enderecoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id') id: number): Promise<Endereco> {
        return this.enderecoService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Criar novo endereço' })
    @ApiBody({ type: CreateEnderecoDto })
    @ApiResponse({ status: 201, description: 'Endereço criado com sucesso' })
    create(@Body() createEnderecoDto: CreateEnderecoDto): Promise<Endereco> {
        return this.enderecoService.create(createEnderecoDto as any);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Atualizar endereço' })
    @ApiBody({ type: UpdateEnderecoDto })
    update(@Body() updateEnderecoDto: UpdateEnderecoDto): Promise<Endereco> {
        return this.enderecoService.update(updateEnderecoDto as any);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number) {
        return this.enderecoService.remove(id);
    }
}
