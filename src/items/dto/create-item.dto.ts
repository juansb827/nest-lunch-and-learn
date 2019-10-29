import { IsNotEmpty, IsNumber, MinLength, MaxLength } from 'class-validator';

export class CreateItemDTO {
    @IsNumber()
    readonly id: number;
    @MinLength(3)
    @MaxLength(10)
    readonly name: string;    
    @IsNotEmpty()
    @IsNumber()
    readonly price: number;
}