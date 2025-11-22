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
            models: [],
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