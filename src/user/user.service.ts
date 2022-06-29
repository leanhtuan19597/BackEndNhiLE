import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(
    user_id: number,
    dto: EditUserDto,
  ) {
    const users = await this.prisma.users.update({
      where: {
        user_id: user_id,
      },
      data: {
        ...dto,
      },
    });

    delete users.hash;

    return users;
  }
}
