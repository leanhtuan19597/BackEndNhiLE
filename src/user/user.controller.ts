import {
  Body,
  Controller,
  Get,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { users } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@GetUser() users: users) {
    return users;
  }

  @Patch()
  editUser(
    @GetUser('id') user_id: number,
    @Body() dto: EditUserDto,
  ) {
    return this.userService.editUser(user_id, dto);
  }
}
