import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogsService {
  constructor(private prisma: PrismaService) {}

  getBlogs(user_id: number) {
    return this.prisma.blogs.findMany({
      where: {
        user_id,
      },
    });
  }

  getBlogsById(
    user_id: number,
    blog_id: number
  ) {
    return this.prisma.blogs.findFirst({
      where: {
        blog_id: blog_id,
        user_id,
      },
    });
  }

 async createBlog(dto: CreateBlogDto) {
    const blog = await this.prisma.blogs.create({
        data:{
          ...dto
          // user_id: dto.user_id,
          // title: dto.title,
          // content: dto.content
        },
      });
    return blog;
  }

  async updateBlogById
  (
    user_id: number,
    blog_id: number,
    dto: UpdateBlogDto,
  ){
    await this.prisma.blogs.findUnique({
      where:
      {
      blog_id: blog_id,
      },
    });
  }

  findAll() {
    return `This action returns all blogs`;
  }
  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
