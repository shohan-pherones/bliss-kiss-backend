import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SignupInput } from './dto/signup.input';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  hello(): string {
    return 'Hello, World!';
  }

  @Mutation(() => String)
  async signup(@Args('input') input: SignupInput): Promise<string> {
    await this.userService.createUser(input);
    return 'User created successfully';
  }
}
