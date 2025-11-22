import { GitContentSource } from '@stackbit/cms-git';
import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "custom",
    "contentSources": [
        new GitContentSource({
            rootPath: '.',
            contentDirs: ['content'],
            models: [
                {
                    name: 'BlogPost',
                    type: 'page',
                    urlPath: '/blog/{slug}',
                    filePath: 'content/blog/{slug}.md',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            required: true,
                            label: 'Title'
                        },
                        {
                            name: 'description',
                            type: 'text',
                            label: 'Description'
                        },
                        {
                            name: 'coverImage',
                            type: 'image',
                            label: 'Cover Image',
                            description: 'Upload a cover image for this blog post'
                        },
                        {
                            name: 'publishDate',
                            type: 'date',
                            required: true,
                            label: 'Publish Date'
                        },
                        {
                            name: 'author',
                            type: 'string',
                            label: 'Author'
                        },
                        {
                            name: 'tags',
                            type: 'list',
                            items: {
                                type: 'string'
                            },
                            label: 'Tags'
                        },
                        {
                            name: 'draft',
                            type: 'boolean',
                            label: 'Draft',
                            default: false
                        },
                        {
                            name: 'content',
                            type: 'list',
                            label: 'Content Blocks',
                            items: {
                                type: 'model',
                                models: ['TextBlock', 'ImageBlock', 'HeadingBlock', 'QuoteBlock', 'ListBlock']
                            }
                        }
                    ]
                },
                {
                    name: 'TextBlock',
                    type: 'object',
                    label: 'Paragraph',
                    fields: [
                        {
                            name: 'type',
                            type: 'string',
                            const: 'text',
                            default: 'text'
                        },
                        {
                            name: 'text',
                            type: 'markdown',
                            label: 'Text'
                        }
                    ]
                },
                {
                    name: 'HeadingBlock',
                    type: 'object',
                    label: 'Heading',
                    fields: [
                        {
                            name: 'type',
                            type: 'string',
                            const: 'heading',
                            default: 'heading'
                        },
                        {
                            name: 'level',
                            type: 'enum',
                            options: ['h2', 'h3', 'h4'],
                            default: 'h2',
                            label: 'Heading Level'
                        },
                        {
                            name: 'text',
                            type: 'string',
                            label: 'Heading Text'
                        }
                    ]
                },
                {
                    name: 'ImageBlock',
                    type: 'object',
                    label: 'Image',
                    fields: [
                        {
                            name: 'type',
                            type: 'string',
                            const: 'image',
                            default: 'image'
                        },
                        {
                            name: 'url',
                            type: 'image',
                            label: 'Image'
                        },
                        {
                            name: 'alt',
                            type: 'string',
                            label: 'Alt Text'
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            label: 'Caption'
                        }
                    ]
                },
                {
                    name: 'QuoteBlock',
                    type: 'object',
                    label: 'Quote',
                    fields: [
                        {
                            name: 'type',
                            type: 'string',
                            const: 'quote',
                            default: 'quote'
                        },
                        {
                            name: 'text',
                            type: 'text',
                            label: 'Quote Text'
                        },
                        {
                            name: 'author',
                            type: 'string',
                            label: 'Author'
                        }
                    ]
                },
                {
                    name: 'ListBlock',
                    type: 'object',
                    label: 'List',
                    fields: [
                        {
                            name: 'type',
                            type: 'string',
                            const: 'list',
                            default: 'list'
                        },
                        {
                            name: 'style',
                            type: 'enum',
                            options: ['bullet', 'numbered'],
                            default: 'bullet',
                            label: 'List Style'
                        },
                        {
                            name: 'items',
                            type: 'list',
                            label: 'Items',
                            items: {
                                type: 'string'
                            }
                        }
                    ]
                }
            ],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/images/'
            }
        })
    ],
    "postInstallCommand": "npm i --no-save @stackbit/types @stackbit/cms-git"
})