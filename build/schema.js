"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.componentArray = exports.component = exports.conceptArray = exports.concept = void 0;
const typescript_kodyfire_1 = require("typescript-kodyfire");
exports.concept = {
    type: 'object',
    properties: {
        name: { type: 'string', description: 'Name of the component' },
        template: {
            type: 'string',
            description: 'Name of the template',
            enum: [
                'functional.js.template',
                'class.js.template',
                'pure-class.js.template',
            ],
            default: 'functional.js.template'
        },
        extension: {
            description: 'Extension of the file (default: js)',
            enum: ['js', 'jsx', 'tsx', 'ts'],
            default: 'js',
        },
        isFolder: { type: 'boolean', default: false, description: 'Is a folder. Will include an index for imports.' },
        cssModule: { type: 'boolean', default: false, description: 'Include a css module file.' },
        outputDir: { type: 'string', default: 'src/components' },
    },
};
exports.conceptArray = {
    type: 'array',
    items: exports.concept,
};
exports.component = {
    type: 'object',
    properties: {
        name: { type: 'string', description: 'Name of the component' },
        template: {
            type: 'string',
            description: 'Name of the template',
            enum: [
                'functional.js.template',
                'class.js.template',
                'pure-class.js.template',
            ],
            default: 'functional.js.template'
        },
        extension: {
            description: 'Extension of the file (default: js)',
            enum: ['js', 'jsx', 'tsx', 'ts'],
            default: 'js',
        },
        isFolder: { type: 'boolean', default: false, description: 'Is a folder. Will include an index for imports.' },
        cssModule: { type: 'boolean', default: false, description: 'Include a css module file.' },
        outputDir: { type: 'string', default: 'src/components' },
    },
};
exports.componentArray = {
    type: 'array',
    items: exports.component,
};
exports.schema = {
    type: 'object',
    properties: Object.assign(Object.assign({}, typescript_kodyfire_1.schema.properties), { project: { type: 'string' }, name: { type: 'string' }, rootDir: { type: 'string' }, concept: exports.conceptArray, component: exports.componentArray }),
    required: ['name'],
};
//# sourceMappingURL=schema.js.map