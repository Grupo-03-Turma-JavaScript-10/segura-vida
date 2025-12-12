import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'tb_enderecos' })
export class Endereco {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255, nullable: false })
    rua: string;

    @Column({ length: 20, nullable: false })
    numero: string;

    @Column({ length: 100, nullable: false })
    cidade: string;

    @Column({ length: 9, nullable: false })
    cep: string;

    @OneToOne(() => Usuario, (usuario) => usuario.endereco)
    usuario: Usuario;
}
