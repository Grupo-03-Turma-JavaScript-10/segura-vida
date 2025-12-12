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
      relations: ['endereco', 'contatoEmergencia'],
    });
  }

  async findById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
      relations: ['endereco', 'contatoEmergencia'],
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
      .where('usuario.nome LIKE :nome', { nome: `%${nome}%` })
      .getMany();
  }

  async create(usuario: Usuario): Promise<Usuario> {
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

    await this.usuarioRepository.delete(id);
  }
}
