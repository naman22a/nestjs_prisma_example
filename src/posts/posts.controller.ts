import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { CreatePostDto } from './dto/createPost.dto';
import { updatePostTitleDto } from './dto/updatePostTitle.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async findAll() {
    return await this.postsService.findAll();
  }

  @Post()
  async create(@Body() post: CreatePostDto) {
    return await this.postsService.create(post);
  }

  @Patch(':id')
  async updateTitle(
    @Param('id', ParseIntPipe) id: number,
    @Body() { title }: updatePostTitleDto,
  ) {
    return await this.postsService.updateTitle(id, title);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const post = await this.postsService.findOne(id);
    if (!post) {
      return {
        ok: false,
      };
    }
    await this.postsService.delete(id);
    return {
      ok: true,
    };
  }
}
