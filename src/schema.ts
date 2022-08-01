import { schema as tsSchema } from 'typescript-kodyfire'

export const concept = {
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

export const conceptArray = {
  type: 'array',
  items: concept,
};
export const component = {
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

export const componentArray = {
  type: 'array',
  items: component,
};
export const schema = {
  type: 'object',
  properties: {
    ...tsSchema.properties,
    project: { type: 'string' },
    name: { type: 'string' },
    rootDir: { type: 'string' },
    concept: conceptArray,
    component: componentArray,
  },
  required: ['name'],
};
