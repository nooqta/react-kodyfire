export declare const concept: {
    type: string;
    properties: {
        name: {
            type: string;
        };
        template: {
            type: string;
            enum: string[];
        };
        outputDir: {
            type: string;
        };
    };
};
export declare const conceptArray: {
    type: string;
    items: {
        type: string;
        properties: {
            name: {
                type: string;
            };
            template: {
                type: string;
                enum: string[];
            };
            outputDir: {
                type: string;
            };
        };
    };
};
export declare const component: {
    type: string;
    properties: {
        name: {
            type: string;
            description: string;
        };
        template: {
            type: string;
            description: string;
            enum: string[];
            default: string;
        };
        extension: {
            description: string;
            enum: string[];
            default: string;
        };
        isFolder: {
            type: string;
            default: boolean;
            description: string;
        };
        cssModule: {
            type: string;
            default: boolean;
            description: string;
        };
        outputDir: {
            type: string;
            default: string;
        };
    };
};
export declare const componentArray: {
    type: string;
    items: {
        type: string;
        properties: {
            name: {
                type: string;
                description: string;
            };
            template: {
                type: string;
                description: string;
                enum: string[];
                default: string;
            };
            extension: {
                description: string;
                enum: string[];
                default: string;
            };
            isFolder: {
                type: string;
                default: boolean;
                description: string;
            };
            cssModule: {
                type: string;
                default: boolean;
                description: string;
            };
            outputDir: {
                type: string;
                default: string;
            };
        };
    };
};
export declare const schema: {
    type: string;
    properties: {
        project: {
            type: string;
        };
        name: {
            type: string;
        };
        rootDir: {
            type: string;
        };
        concept: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    template: {
                        type: string;
                        enum: string[];
                    };
                    outputDir: {
                        type: string;
                    };
                };
            };
        };
        component: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                        description: string;
                    };
                    template: {
                        type: string;
                        description: string;
                        enum: string[];
                        default: string;
                    };
                    extension: {
                        description: string;
                        enum: string[];
                        default: string;
                    };
                    isFolder: {
                        type: string;
                        default: boolean;
                        description: string;
                    };
                    cssModule: {
                        type: string;
                        default: boolean;
                        description: string;
                    };
                    outputDir: {
                        type: string;
                        default: string;
                    };
                };
            };
        };
    };
    required: string[];
};
