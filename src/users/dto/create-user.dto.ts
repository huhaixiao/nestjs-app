import {
  IsEmail,
  IsEnum,
  isNotEmpty,
  IsNotEmpty,
  IsString,
} from 'class-validator';

/**
 * @description 注册用户DTO
 * Data Transfer Object
 */
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTER', 'ENGINEER', 'ADMIN'], {
    message: '角色必须是INTER、ENGINEER、ADMIN中的一个',
  })
  role: 'INTER' | 'ENGINEER' | 'ADMIN';
}
