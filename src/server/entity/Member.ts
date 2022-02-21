import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@EntityModel()
export default class Member {
    @PrimaryColumn({ unique: true, length: 20 })
    id: string;

    @Column({ length: 50 })
    ad: string;
   
    @Column({ type: 'boolean', default: false, select: false })
    isDeleted: boolean;
    
    @CreateDateColumn({ select: false })
    ctime: Date;

    @UpdateDateColumn({ select: false })
    mtime: Date;
}
