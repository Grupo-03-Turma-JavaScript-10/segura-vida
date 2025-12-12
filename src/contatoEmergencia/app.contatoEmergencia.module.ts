import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ContatoEmergencia } from "./entities/contatoEmergencia.entity";
import { ContatoEmergenciaService } from "./services/contatoEmergencia.service";

@Module({
    imports: [TypeOrmModule.forFeature([ContatoEmergencia])],
    controllers: [],
    providers: [ContatoEmergenciaService],
    exports: [ContatoEmergenciaService]
})

export class ContatoEmergenciaModule {}
