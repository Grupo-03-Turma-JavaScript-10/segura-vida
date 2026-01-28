import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../entities/usuario.entity';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';

@ApiTags('usuarios')
@Controller('/usuarios')
export class UsuarioController {
    
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Usuario[]> {
        return this.usuarioService.findByNome(nome);
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id') id: number): Promise<Usuario> {
        return this.usuarioService.findById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Criar novo usuário' })
    @ApiBody({ type: CreateUsuarioDto })
    @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
    @ApiResponse({ status: 400, description: 'Dados inválidos' })
    create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
        return this.usuarioService.create(createUsuarioDto as any);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Atualizar usuário' })
    @ApiBody({ type: UpdateUsuarioDto })
    @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso' })
    @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
    update(@Body() updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
     return this.usuarioService.update(updateUsuarioDto as any);
    }
 
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number) {
        return this.usuarioService.delete(id);
    }
}
