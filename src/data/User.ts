import { IsBoolean, IsEmail, IsInt, IsNotEmpty, Max, Min, MinLength } from 'class-validator';

export class User {
    /**
     * User id
     * @jsonschema
     *
     */
    @IsNotEmpty()
    @IsInt()
    @Min(1)
    public id!: number;

    /**
     * User email
     */
    @IsNotEmpty()
    @IsEmail()
    public email!: string;

    /**
     * User first name
     */
    @IsNotEmpty()
    @MinLength(2)
    public firstName!: string;

    /**
     * User last name
     */
    @IsNotEmpty()
    @MinLength(2)
    public lastName!: string;

    /**
     * User age
     */
    @IsInt()
    @Min(0)
    @Max(120)
    public age!: number;

    /**
     * Is active user
     * @type {boolean}
     */
    @IsBoolean()
    public isActive = false;

    /**
     * Encoded password
     */
    private _password!: string; // tslint:disable-line

    /**
     * Password setter
     * @param {string} password
     */
    @IsNotEmpty()
    @MinLength(6)
    set password(password: string) {
        this._password = Buffer.from(password).toString('base64');
    }

    /**
     * Get password
     * @return {string}
     */
    get password(): string {
        return this._password;
    }

    /**
     * Get user full name
     * @return {string}
     */
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    /**
     * Is adult
     * @return {boolean}
     */
    isAdult(): boolean {
        return this.age > 36 && this.age < 60;
    }
}
