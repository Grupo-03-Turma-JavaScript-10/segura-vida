import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SeguroVida } from "../entities/seguroVida.entity";
import { Repository } from "typeorm";

@Injectable()
export class SeguroVidaService{
    constructor(
        @InjectRepository(SeguroVida)
        private readonly seguroRepository: Repository<SeguroVida>
    ){}

    findAll(): Promise<SeguroVida[]> {
        return this.seguroRepository.find();
    }

    async findOne(id: number): Promise<SeguroVida> {
        const seguroVida = await this.seguroRepository.findOneBy({ id });
    
        if (!seguroVida) {
          throw new NotFoundException('Seguro não encontrado!');
        }
    
        return seguroVida;
    }

    async create(seguroVida: SeguroVida): Promise<SeguroVida> {
        return await this.seguroRepository.save(seguroVida);
    }
}