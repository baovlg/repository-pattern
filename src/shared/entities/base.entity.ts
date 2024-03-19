import { CreateDateColumn, Column, UpdateDateColumn } from 'typeorm';

export type Constructor<T = {}> = new (...args: any[]) => T;

export function entityWithDate<TBase extends Constructor>(Base: TBase) {
  abstract class AbstractBase extends Base {
    @CreateDateColumn({
      name: 'CRE_DT',
      type: 'timestamp',
      precision: 6,
      nullable: false,
      default: () => 'CURRENT_TIMESTAMP(6)',
    })
    createdDate: Date;

    @UpdateDateColumn({
      name: 'UPD_DT',
      type: 'timestamp',
      precision: 6,
      nullable: false,
      default: () => 'CURRENT_TIMESTAMP(6)',
      onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updatedDate: Date;
  }
  return AbstractBase;
}

export function entityWithBy<TBase extends Constructor>(Base: TBase) {
  abstract class AbstractBase extends Base {
    @Column({
      name: 'CRE_USR_ID',
      type: 'varchar',
      length: 100,
      nullable: false,
    })
    createUserID: string;

    @Column({
      name: 'UPD_USR_ID',
      type: 'varchar',
      length: 100,
      nullable: false,
    })
    updateUserID: string;
  }
  return AbstractBase;
}

export function entityWithEdw<TBase extends Constructor>(Base: TBase) {
  abstract class AbstractBase extends Base {
    @Column({
      name: 'EDW_UPD_DT',
      type: 'timestamp',
      precision: 6,
      nullable: true,
    })
    edwUpdateDate: Date;
  }
  return AbstractBase;
}
