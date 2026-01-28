import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SeguroVidaController } from "./controller/seguroVida.controller";
import { SeguroVidaService } from "./services/seguroVida.service";
import { SeguroVida } from "./entities/seguroVida.entity";
import { UsuarioModule } from "../usuario/app.usuario.module";


@Module({
    imports: [TypeOrmModule.forFeature([SeguroVida]),
    UsuarioModule],
    controllers: [SeguroVidaController],
    providers: [SeguroVidaService],
    exports: [SeguroVidaService]
})

export class SeguroVidaModule{}