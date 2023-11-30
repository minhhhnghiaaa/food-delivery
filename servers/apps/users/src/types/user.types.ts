import { ObjectType, Field } from '@nestjs/graphql';
import { User } from './user.types';

@ObjectType()
export class ErrorType {
  @Field()
  message: string;

  @Field({ nullable: true })
  code?: number;
}

@ObjectType()
export class RegisterResponse {
  @Field(() => User, { nullable: true })
  user?: User | any;
  
  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType | any;
}

@ObjectType()
export class LoginResponse {
  @Field(() => User)
  user: User | any;
  
  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType | any;
}