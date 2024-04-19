import { UserRepository } from '@/users/domain/repositories/user.repository';
import { UserOutput, UserOutputMapper } from '../dtos/user-output';
import { UseCase as DefaultUseCase } from './use-case';
import { BadRequestError } from '@/shared/domain/errors/bad-request-error';

export namespace UpdateUserUseCase {
  export type Input = {
    id: string;
    name?: string;
    isSeller?: boolean;
    email?: string;
  };

  export type Output = UserOutput;

  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private userRepository: UserRepository.Repository) {}

    async execute(input: Input): Promise<Output> {
      const entity = await this.userRepository.findById(input.id);

      switch (true) {
        case !!input.name:
          entity.updateName(input.name);

        case !!input.isSeller:
          entity.updateIsSeller(input.isSeller);

        case !!input.email:
          entity.updateEmail(input.email);
          break;

        default:
          throw new BadRequestError('No valid properties provided');
      }

      await this.userRepository.update(entity);
      return UserOutputMapper.toOutput(entity);
    }
  }
}
