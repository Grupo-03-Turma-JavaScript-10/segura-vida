import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { SeguroVidaService } from "../services/seguroVida.service";
import { SeguroVida } from "../entities/seguroVida.entity";


@Controller("/segurovida")
export class SeguroVidaController{
    constructor(private readonly seguroVidaService: SeguroVidaService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<SeguroVida[]>{
        return this.seguroVidaService.findAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() seguroVida: SeguroVida): Promise<SeguroVida>{
        return this.seguroVidaService.create(seguroVida);
    }
}