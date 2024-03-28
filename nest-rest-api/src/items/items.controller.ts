import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from "./items.service"
import { Item } from "./interfaces/item.interface"

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService){}
    
    @Get()
    async getAllItems(): Promise<Item[]>{
        return await this.itemsService.findAll()
    }

    @Get(':id')
    async getItemById(@Param() param): Promise<Item>{
        return await this.itemsService.findOne(param.id)
    }

    @Post('create')
    async createItem(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return await this.itemsService.createItem(createItemDto)
    }

    @Put(':id')
    async updateItem(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item>{
        return this.itemsService.updateItem(updateItemDto, id)
    }

    @Delete(':id')
    async deleteItemById(@Param() param): Promise<Item>{
        return this.itemsService.deleteOne(param.id)
    }
} 
