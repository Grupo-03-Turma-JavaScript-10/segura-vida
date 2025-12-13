import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Endereco } from '../../endereco/entities/endereco.entity';
import { ContatoEmergencia } from '../../contatoEmergencia/entities/contatoEmergencia.entity';
import { IsNotEmpty, IsEmail, IsPositive, isNotEmpty } from 'class-validator';
import { SeguroVida } from '../../seguroVida/entities/seguroVida.entity';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nome: string;

    @IsNotEmpty()
    @Column({ type: 'date', nullable: false })
    dataNascimento: Date;

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
    
    @IsNotEmpty()
    @OneToOne(() => Endereco, (endereco) => endereco.usuario, { cascade: true, nullable: false })
    @JoinColumn()
    endereco: Endereco;
    
    @IsNotEmpty()
    @OneToOne(() => ContatoEmergencia, (contato) => contato.usuario, { cascade: true,nullable: false })
    contatoEmergencia: ContatoEmergencia;

    @OneToMany(() => SeguroVida, (usuario) => usuario.usuario, {cascade: true, nullable:false})
    seguroVida: SeguroVida[]
}
