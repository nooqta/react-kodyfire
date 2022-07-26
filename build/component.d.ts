import { IConcept, ITechnology } from 'kodyfire-core';
import { Concept as BaseConcept } from 'basic-kodyfire';
export declare class Component extends BaseConcept {
    constructor(concept: Partial<IConcept>, technology: ITechnology);
    generate(_data: any): Promise<void>;
    getFilename(data: any): any;
    getExtension(extension: string): string;
    getTemplatesPath(): string;
}
