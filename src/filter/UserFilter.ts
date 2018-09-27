import { IsOptional, IsString, MinLength } from 'class-validator';
import { ValidationOptions } from 'class-validator/decorator/ValidationOptions';
import { Pagination } from '../model';

export class UserFilter extends Pagination {
    /**
     * Search string
     */
    @IsOptional()
    @IsString()
    @MinLength(3, {
        message: 'Short search line',
    })
    q?: string;

    /**
     * Entity id
     */
    @IsOptional()
    @IsString(<ValidationOptions>{
        skipMissingProperties: true,
    })
    id?: string[];
}
