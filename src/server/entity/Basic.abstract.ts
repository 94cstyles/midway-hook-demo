import { Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export default abstract class Basic {
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 删除状态
     */
    @Column({ type: 'boolean', default: false, select: false })
    isDeleted: boolean;

    /**
     * 创建时间
     */
    @CreateDateColumn({})
    ctime: Date;

    /**
     * 修改时间
     */
    @UpdateDateColumn({})
    mtime: Date;
}
