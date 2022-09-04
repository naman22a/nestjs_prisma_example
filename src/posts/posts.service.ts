import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/createPost.dto';
import { updatePostTitleDto } from './dto/updatePostTitle.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.post.findMany();
  }

  async create(createPostDto: CreatePostDto) {
    return await this.prisma.post.create({
      data: createPostDto,
    });
  }

  async updateTitle(id: number, title: string) {
    return await this.prisma.post.update({
      data: {
        title,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    return await this.prisma.post.delete({
      where: {
        id,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.post.findFirst({ where: { id } });
  }
}
