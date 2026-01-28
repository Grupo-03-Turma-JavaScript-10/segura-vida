import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

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
