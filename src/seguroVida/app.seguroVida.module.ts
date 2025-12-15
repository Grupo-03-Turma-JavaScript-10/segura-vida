import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SeguroVidaController } from "./controller/seguroVida.controller";
import { SeguroVidaService } from "./services/seguroVida.service";
import { SeguroVida } from "./entities/seguroVida.entity";


@Module({
    imports: [TypeOrmModule.forFeature([SeguroVida])],
    controllers: [SeguroVidaController],
    providers: [SeguroVidaService],
    exports: [SeguroVidaService]
})

export class SeguroVidaModule{}