import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      relations:{endereco:true, contatoEmergencia:true, seguroVida: true}});
  }

  async findById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
      relations: ['endereco', 'contatoEmergencia', 'seguroVida'],
    });

    if (!usuario) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    return usuario;
  }

  async findByNome(nome: string): Promise<Usuario[]> {
    return await this.usuarioRepository
      .createQueryBuilder('usuario')
      .leftJoinAndSelect('usuario.endereco', 'endereco')
      .leftJoinAndSelect('usuario.contatoEmergencia', 'contatoEmergencia')
      .leftJoinAndSelect('usuario.seguroVida', 'seguroVida')
      .where('usuario.nome LIKE :nome', { nome: `%${nome}%` })
      .getMany();
  }

  async create(usuario: Usuario): Promise<Usuario> {

    const idade = new Date().getFullYear() - new Date(usuario.dataNascimento).getFullYear();
    if(idade < 18){
      throw new HttpException('Usuário deve ter pelo menos 18 anos', HttpStatus.BAD_REQUEST);
    }
    
    return await this.usuarioRepository.save(usuario);
  }

  async update(usuario: Usuario): Promise<Usuario> {
    const usuarioExistente = await this.findById(usuario.id);

    if (!usuarioExistente) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    return await this.usuarioRepository.save(usuario);
  }

  async delete(id: number): Promise<void> {
    const usuario = await this.findById(id);

    if (!usuario) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    await this.usuarioRepository.remove(usuario);
  }
}
