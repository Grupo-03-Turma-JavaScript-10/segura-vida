import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { EnderecoService } from "../services/endereco.service";
import { Endereco } from "../entities/endereco.entity";

@Controller("/endereco")
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
    create(@Body() endereco: Endereco): Promise<Endereco> {
        return this.enderecoService.create(endereco);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() endereco: Endereco): Promise<Endereco> {
        return this.enderecoService.update(endereco);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number) {
        return this.enderecoService.remove(id);
    }
}
