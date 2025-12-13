import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity("tb_seguro_vida")
export class SeguroVida {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    valorAssegurado: number

    @Column({length: 70, nullable: false})
    tipoSeguro: string

    @ManyToOne(() => Usuario, (usuario) => usuario.seguroVida, {nullable: false, onDelete: 'CASCADE'})
    usuario: Usuario
}