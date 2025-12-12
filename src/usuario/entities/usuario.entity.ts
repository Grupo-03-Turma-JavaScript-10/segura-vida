import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Endereco } from '../../endereco/entities/endereco.entity';
import { ContatoEmergencia } from '../../contatoEmergencia/entities/contatoEmergencia.entity';
import { IsNotEmpty, IsEmail, IsPositive } from 'class-validator';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nome: string;

    @IsNotEmpty()
    @Column({ nullable: false })
    dataNascimento: number;

    @IsNotEmpty()
    @Column({ length: 14, nullable: false })
    cpf: string;

    @IsNotEmpty()
    @IsEmail()
    @Column({ length: 100, nullable: false })
    email: string;

    @IsNotEmpty()
    @IsPositive()
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    rendaMensal: number;

    @OneToOne(() => Endereco, (endereco) => endereco.usuario, { cascade: true })
    @JoinColumn()
    endereco: Endereco;

    @OneToOne(() => ContatoEmergencia, (contato) => contato.usuario, { cascade: true })
    @JoinColumn()
    contatoEmergencia: ContatoEmergencia;
}
