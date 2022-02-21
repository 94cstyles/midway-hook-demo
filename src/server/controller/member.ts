import { Api, Get, useInject } from '@midwayjs/hooks';
import { MemberService } from '../service/member';

export const index = Api(Get('/member'), async () => {
    const service = await useInject(MemberService);

    return service.index();
});
