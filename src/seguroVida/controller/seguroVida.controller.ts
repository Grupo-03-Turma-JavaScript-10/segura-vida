import { Body, Controller, Get, Post, Put, Delete, Param, HttpCode, HttpStatus } from "@nestjs/common";
import { SeguroVidaService } from "../services/seguroVida.service";
import { SeguroVida } from "../entities/seguroVida.entity";


@Controller("/segurovida")
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
    create(@Body() seguroVida: SeguroVida): Promise<SeguroVida> {
        return this.seguroVidaService.create(seguroVida);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() seguroVida: SeguroVida): Promise<SeguroVida> {
        return this.seguroVidaService.update(seguroVida);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number) {
        return this.seguroVidaService.remove(id);
    }
}