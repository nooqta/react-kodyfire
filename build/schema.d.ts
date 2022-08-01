export declare const concept: {
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
export declare const conceptArray: {
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
        class: {
            type: string;
            items: any;
        };
        interface: {
            type: string;
            items: any;
        };
        tsconfig: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        enum: any[];
                    };
                    outputDir: {
                        type: string;
                    };
                };
            };
        };
    };
    required: string[];
};
