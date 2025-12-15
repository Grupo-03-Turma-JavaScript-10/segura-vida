import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ContatoEmergencia } from "./entities/contatoEmergencia.entity";
import { ContatoEmergenciaService } from "./services/contatoEmergencia.service";
import { ContatoEmergenciaController } from "./controllers/contatoEmergencia.controller";

@Module({
    imports: [TypeOrmModule.forFeature([ContatoEmergencia])],
    controllers: [ContatoEmergenciaController],
    providers: [ContatoEmergenciaService],
    exports: [ContatoEmergenciaService]
})

export class ContatoEmergenciaModule {}
