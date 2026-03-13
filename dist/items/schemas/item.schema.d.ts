import { HydratedDocument } from 'mongoose';
export type ItemDocument = HydratedDocument<Item>;
export declare class Item {
    name: string;
    description: string;
    price: number;
    isActive: boolean;
}
export declare const ItemSchema: import("mongoose").Schema<Item, import("mongoose").Model<Item, any, any, any, (import("mongoose").Document<unknown, any, Item, any, import("mongoose").DefaultSchemaOptions> & Item & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, Item, any, import("mongoose").DefaultSchemaOptions> & Item & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Item>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Item, import("mongoose").Document<unknown, {}, Item, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Item & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Item, import("mongoose").Document<unknown, {}, Item, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Item & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Item, import("mongoose").Document<unknown, {}, Item, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Item & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    price?: import("mongoose").SchemaDefinitionProperty<number, Item, import("mongoose").Document<unknown, {}, Item, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Item & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Item, import("mongoose").Document<unknown, {}, Item, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Item & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Item>;
