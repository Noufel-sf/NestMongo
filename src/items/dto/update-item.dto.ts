import { CreateItemDto } from './create-item.dto';

export class UpdateItemDto implements Partial<CreateItemDto> {
  name?: string;
  description?: string;
  price?: number;
  isActive?: boolean;
}
