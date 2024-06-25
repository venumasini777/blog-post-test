import type { EntryFieldTypes } from "contentful";

// src/types/contentful.d.ts
export interface SubContentNode {
    nodeType: string;
    value: string;
    marks: any[];
    data: Record<string, unknown>;
}

export interface ContentNode {
nodeType: string;
data: Record<string, unknown>;
content: Array<ContentNode | TextNode>;
}

export interface DocumentNode {
    nodeType: 'document';
    data: Record<string, unknown>;
    content: Array<ContentNode>;
}

export interface FeaturedMediaType {
    metadata : EntryFieldTypes.Object;
    sys : EntryFieldTypes.Object;
    fields : MediaFieldsType;
}


export interface MediaFieldsType {
    title : string;
    description : string;
    file : {
        url : string;
    };
}
