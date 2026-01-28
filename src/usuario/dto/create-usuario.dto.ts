import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsPositive, IsDateString } from 'class-validator';

export class CreateEnderecoDto {
  @ApiProperty({ example: 'Rua das Flores' })
  @IsNotEmpty()
  rua: string;

  @ApiProperty({ example: '123' })
  @IsNotEmpty()
  numero: string;

  @ApiProperty({ example: 'São Paulo' })
  @IsNotEmpty()
  cidade: string;

  @ApiProperty({ example: '01234-567' })
  @IsNotEmpty()
  cep: string;
}

export class CreateContatoEmergenciaDto {
  @ApiProperty({ example: 'Maria Silva' })
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: '(11) 98765-4321' })
  @IsNotEmpty()
  telefone: string;

  @ApiProperty({ example: 'Mãe' })
  @IsNotEmpty()
  grauParentesco: string;
}

export class CreateUsuarioDto {
  @ApiProperty({ example: 'João Silva' })
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: '1990-05-15' })
  @IsNotEmpty()
  @IsDateString()
  dataNascimento: string;

  @ApiProperty({ example: '123.456.789-00' })
  @IsNotEmpty()
  cpf: string;

  @ApiProperty({ example: 'joao@email.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 5000.00 })
  @IsNotEmpty()
  @IsPositive()
  rendaMensal: number;

  @ApiProperty({ type: CreateEnderecoDto })
  @IsNotEmpty()
  endereco: CreateEnderecoDto;

  @ApiProperty({ type: CreateContatoEmergenciaDto, required: false })
  contatoEmergencia?: CreateContatoEmergenciaDto;
}
