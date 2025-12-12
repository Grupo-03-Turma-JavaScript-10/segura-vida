import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContatoEmergencia } from '../entities/contatoEmergencia.entity';

@Injectable()
export class ContatoEmergenciaService {
    constructor(  
        @InjectRepository(ContatoEmergencia)
        private readonly contatoRepo: Repository<ContatoEmergencia>,
    ) {}

    async findAll(): Promise<ContatoEmergencia[]> {
        return this.contatoRepo.find();
    }

    async findById(id: number): Promise<ContatoEmergencia> {
        const contato = await this.contatoRepo.findOne({ where: { id } });

        if (!contato) {
            throw new NotFoundException("Contato de emergência não encontrado");
        }

        return contato;
    }

    async create(data: ContatoEmergencia): Promise<ContatoEmergencia> {
        const novo = this.contatoRepo.create(data);
        return this.contatoRepo.save(novo);
    }

    async update(id: number, data: Partial<ContatoEmergencia>): Promise<ContatoEmergencia> {
        const contato = await this.findById(id);

        Object.assign(contato, data);

        return this.contatoRepo.save(contato);
    }

    async delete(id: number): Promise<void> {
        const contato = await this.findById(id);
        await this.contatoRepo.remove(contato);
    }
}
