import { CreateItemDto } from './create-item.dto';
export declare class UpdateItemDto implements Partial<CreateItemDto> {
    name?: string;
    description?: string;
    price?: number;
    isActive?: boolean;
}
