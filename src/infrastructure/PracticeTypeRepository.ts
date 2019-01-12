import { PracticeType } from '../core/model/PracticeType';
import { IPracticeTypeRepository } from '../core/interfaces/IPracticeTypeRepository';
import { Service } from 'typedi';
import { Connection } from 'typeorm';
import { InjectConnection } from 'typeorm-typedi-extensions';
import {RepositoryBase} from "@afyahmis/commonjs";

@Service()
export class PracticeTypeRepository  extends RepositoryBase<PracticeType> implements IPracticeTypeRepository {
    constructor(@InjectConnection() connection: Connection) {
        super(PracticeType, connection);
    }
}
