import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { ContatoEmergencia } from '../entities/contatoEmergencia.entity';

@Injectable()
export class ContatoEmergenciaService {
  constructor(
    @InjectRepository(ContatoEmergencia)
    private readonly contatoRepository: Repository<ContatoEmergencia>,
  ) {}

  findAll(): Promise<ContatoEmergencia[]> {
    return this.contatoRepository.find({
      relations:  [ 'usuario' ],
      where:{usuario:{id: Not(IsNull())}}
    });
  }

  async findOne(id: number): Promise<ContatoEmergencia> {
    const contato = await this.contatoRepository.findOneBy({ id });

    if (!contato) {
      throw new NotFoundException('Contato de emergência não encontrado');
    }

    return contato;
  }

  async remove(id: number): Promise<void> {
    const result = await this.contatoRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Contato de emergência não encontrado');
    }
  }
}
