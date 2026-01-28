import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsNumber } from 'class-validator';

export class CreateSeguroVidaDto {
  @ApiProperty({ example: 100000.00 })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  valorAssegurado: number;

  @ApiProperty({ example: 'Vida Individual' })
  @IsNotEmpty()
  tipoSeguro: string;

  @ApiProperty({ example: 1, description: 'ID do usuário' })
  @IsNotEmpty()
  @IsNumber()
  usuarioId: number;
}
