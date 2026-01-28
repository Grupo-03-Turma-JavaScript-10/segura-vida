import { Body, Controller, Get, Post, Put, Delete, Param, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { SeguroVidaService } from "../services/seguroVida.service";
import { SeguroVida } from "../entities/seguroVida.entity";
import { CreateSeguroVidaDto } from '../dto/create-seguro.dto';
import { UpdateSeguroVidaDto } from '../dto/update-seguro.dto';

@ApiTags('seguros-vida')
@Controller("/seguros-vida")
export class SeguroVidaController {
    constructor(private readonly seguroVidaService: SeguroVidaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<SeguroVida[]> {
        return this.seguroVidaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id') id: number): Promise<SeguroVida> {
        return this.seguroVidaService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Criar novo seguro de vida' })
    @ApiBody({ type: CreateSeguroVidaDto })
    @ApiResponse({ status: 201, description: 'Seguro criado com sucesso' })
    create(@Body() createSeguroDto: CreateSeguroVidaDto): Promise<SeguroVida> {
        return this.seguroVidaService.create(createSeguroDto as any);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Atualizar seguro de vida' })
    @ApiBody({ type: UpdateSeguroVidaDto })
    update(@Body() updateSeguroDto: UpdateSeguroVidaDto): Promise<SeguroVida> {
        return this.seguroVidaService.update(updateSeguroDto as any);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number) {
        return this.seguroVidaService.remove(id);
    }
}