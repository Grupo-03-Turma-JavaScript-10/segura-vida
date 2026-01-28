import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

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
