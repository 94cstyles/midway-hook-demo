import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import Member from '../entity/Member';

@Provide()
export class MemberService {
    @InjectEntityModel(Member)
    model: Repository<Member>;

    async index() {
        return  this.model.find({
          where: {
              isDeleted: false
          },
      });
    }
}
