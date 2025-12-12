import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Endereco } from '../entities/endereco.entity';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(Endereco)
    private readonly enderecoRepository: Repository<Endereco>,
  ) {}

  findAll(): Promise<Endereco[]> {
    return this.enderecoRepository.find();
  }

  async findOne(id: number): Promise<Endereco> {
    const endereco = await this.enderecoRepository.findOneBy({ id });

    if (!endereco) {
      throw new NotFoundException('Endereço não encontrado');
    }

    return endereco;
  }

  async remove(id: number): Promise<void> {
    const result = await this.enderecoRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Endereço não encontrado');
    }
  }
}
