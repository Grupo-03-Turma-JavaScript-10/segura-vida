import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SeguroVida } from "../entities/seguroVida.entity";
import { CreateSeguroVidaDto } from "../dto/create-seguro.dto";
import { Repository } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Injectable()
export class SeguroVidaService {
    constructor(
        @InjectRepository(SeguroVida)
        private readonly seguroRepository: Repository<SeguroVida>,
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>
    ) { }

    findAll(): Promise<SeguroVida[]> {
        return this.seguroRepository.find({ relations: ['usuario'] });
    }

    async findOne(id: number): Promise<SeguroVida> {
        const seguroVida = await this.seguroRepository.findOne({ 
            where: { id },
            relations: ['usuario']
        });

        if (!seguroVida) {
            throw new NotFoundException('Seguro não encontrado!');
        }

        return seguroVida;
    }

    async create(createSeguroDto: CreateSeguroVidaDto): Promise<SeguroVida> {
        const usuario = await this.usuarioRepository.findOne({ 
            where: { id: createSeguroDto.usuarioId } 
        });

        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado!');
        }

        const seguro = this.seguroRepository.create({
            valorAssegurado: createSeguroDto.valorAssegurado,
            tipoSeguro: createSeguroDto.tipoSeguro,
            usuario
        });

        return await this.seguroRepository.save(seguro);
    }

    async update(seguroVida: SeguroVida): Promise<SeguroVida> {
        const seguroExistente = await this.findOne(seguroVida.id);

        if (!seguroExistente) {
            throw new NotFoundException('Seguro não encontrado!');
        }

        return await this.seguroRepository.save(seguroVida);
    }

    async remove(id: number): Promise<void> {
        const result = await this.seguroRepository.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException('Seguro não encontrado!');
        }
    }
}