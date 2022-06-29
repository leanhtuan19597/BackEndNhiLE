import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  getBlog(@GetUser('id') user_id: number) {
    return this.blogsService.getBlogs(user_id);
  }

  @Get(':id')
  getBlogsById(
    @GetUser('id') user_id: number,
    @Param('id', ParseIntPipe) blog_id: number
  ) {
    return this.blogsService.getBlogsById(
      user_id,
      blog_id,
    );
  }

  @Post()
  createBlog(@Body() dto: CreateBlogDto
  ) {
    return this.blogsService.createBlog(dto);
  }

  @Patch(':id')
  updateBlogById(
    @GetUser('id') user_id: number,
    @Param('id', ParseIntPipe) blob_id: number,
    @Body() updateBlogDto: UpdateBlogDto
  ) {
    return this.blogsService.updateBlogById(
      user_id,
      blob_id,
      updateBlogDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogsService.remove(+id);
  }
}
