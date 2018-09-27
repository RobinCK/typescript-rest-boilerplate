import {
    Body,
    Delete,
    Get, HttpError,
    JsonController,
    Param,
    Post,
    Put,
    QueryParam,
    QueryParams,
    UseBefore,
} from 'routing-controllers';
import { Container } from 'typedi';
import { LoggingMiddleware } from '../middlewares';
import { User } from '../data';
import { UserRepository } from '../repository';
import { validate } from 'class-validator';
import { UserFilter } from '../filter';

const userRepository: UserRepository = Container.get(UserRepository);

@JsonController('/users')
@UseBefore(LoggingMiddleware)
export class UserController {
    /**
     * Users list
     * @param foo
     * @param {UserFilter} filter
     * @return {User[]}
     */
    @Get()
    async getAll(@QueryParams() filter: UserFilter, @QueryParam('foo') foo: string): Promise<User[]> {
        if (!await validate(filter)) {
            throw new HttpError(400, 'Bad Request');
        }

        return userRepository.findAll();
    }

    /**
     * Get user by id
     * @param {number} id
     * @return {User}
     */
    @Get('/:id')
    async getOne(@Param('id') id: number): Promise<User | undefined> {
        return userRepository.findById(id);
    }

    /**
     * Create user
     * @param {User} user
     */
    @Post()
    async post(@Body() user: User): Promise<void> {
        userRepository.insert(user);
    }

    /**
     * Update user by id
     * @param {number} id
     * @param {User} user
     */
    @Put('/:id')
    async put(@Param('id') id: number, @Body() user: User): Promise<void> {
        userRepository.updateById(id, user);
    }

    /**
     * Remove user by id
     * @param {number} id
     */
    @Delete('/:id')
    async remove(@Param('id') id: number): Promise<void> {
        userRepository.removeById(id);
    }

    /**
     * Users count
     */
    @Get('/count')
    count() {
        return userRepository.count();
    }
}
