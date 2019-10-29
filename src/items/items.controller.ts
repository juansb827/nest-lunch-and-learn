import { Controller, Get, Param, Post, Body, Query, Delete, UsePipes, ValidationPipe, UseGuards, SetMetadata } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDTO } from './dto/create-item.dto';
import { RolesGuard } from '../common/role.guard';

@Controller('items')
@UseGuards(RolesGuard)
export class ItemsController {
    constructor(private itemsService: ItemsService) { }

    @Get()
    @SetMetadata('roles', ['admin', 'superadmin'])
    async getItems() {
        const items = await this.itemsService.getItems();
        return items;
    }

    @Get(':itemID')
    async getItem(@Param('itemID') itemID) {
        const item = await this.itemsService.getItem(itemID);
        return item;
    }

    @Post()
    async addItem(@Body() createItemDTO: CreateItemDTO) {
        const item = await this.itemsService.addItem(createItemDTO);
        return item;
    }

    @Delete()
    async deleteItem(@Query() query) {
        const items = await this.itemsService.deleteItem(query.itemID);
        return items;
    }
}