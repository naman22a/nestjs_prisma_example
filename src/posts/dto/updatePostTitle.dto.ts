import { IsNotEmpty } from 'class-validator';

export class updatePostTitleDto {
  @IsNotEmpty()
  title: string;
}
