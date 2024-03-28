

// Using Mongoose model
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose"

import { Injectable } from "@nestjs/common";
import { Item } from "./interfaces/item.interface"
import { CreateItemDto } from "./dto/create-item.dto";

@Injectable()
export class ItemsService{
    constructor(@InjectModel('Item') private itemModel: Model<Item>) {}

    async findAll(): Promise<Item[]>{
        return this.itemModel.find()
    }

    async findOne(id: string): Promise<Item>{
        return this.itemModel.findOne({_id:id})
    }

    async createItem(item: CreateItemDto): Promise<Item>{
        const newItem = new this.itemModel(item)
        return await newItem.save()
    }

    async updateItem(data: CreateItemDto, id: string): Promise<Item>{
        const updateObjById = this.itemModel.findByIdAndUpdate(id, data, {new: true})
        return updateObjById
    }

    async deleteOne(id: string): Promise<Item>{
        const deleteItemById = this.itemModel.findByIdAndDelete(id, {new: true})
        return deleteItemById
    }
}