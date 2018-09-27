import { IsInt, IsOptional, Max, Min } from 'class-validator';
import { IPagination } from '../interface';

export abstract class Pagination implements IPagination {
    /**
     * Offset list
     */
    @IsOptional()
    @IsInt()
    @Min(0)
    offset?: number;

    private _limit!: number;

    /**
     * Limit list
     */
    @IsInt()
    @Min(1)
    @Max(20)
    @IsOptional()
    set limit(limit: number) {
        this._limit = +limit;
    }

    get limit(): number {
        return this._limit;
    }
}
