import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SeguroVidaController } from "./controller/seguroVida.controller";
import { SeguroVidaService } from "./services/seguroVida.service";
import { SeguroVida } from "./entities/seguroVida.entity";
import { Usuario } from "../usuario/entities/usuario.entity";

@Module({
    imports: [TypeOrmModule.forFeature([SeguroVida, Usuario])],
    controllers: [SeguroVidaController],
    providers: [SeguroVidaService],
    exports: [SeguroVidaService]
})

export class SeguroVidaModule{}