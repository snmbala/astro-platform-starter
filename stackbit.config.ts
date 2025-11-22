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