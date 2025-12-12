import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Endereco } from "./entities/endereco.entity";
import { EnderecoService } from "./services/endereco.service";

@Module({
    imports: [TypeOrmModule.forFeature([Endereco])],
    controllers: [],
    providers: [EnderecoService],
    exports: [EnderecoService]
})

export class EnderecoModule {}
