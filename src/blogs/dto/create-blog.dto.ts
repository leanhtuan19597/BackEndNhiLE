import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
  } from 'class-validator';

export class CreateBlogDto {
    @IsNumber()
    @IsNotEmpty()
    user_id : number;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    title: string;
}
