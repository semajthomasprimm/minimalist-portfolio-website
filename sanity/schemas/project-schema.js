const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'}
        },
        {
            name: 'shortDescription',
            title: 'Short Description',
            type: 'string'
        },
        {
            name: 'longDescription',
            title: 'Long Description',
            type: 'string'
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'string'
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'string'
        },
        {
            name: 'prevProject',
            title: 'Previous Project',
            type: 'string'
        },
        {
            name: 'prevProjectSlug',
            title: 'Previous Project Slug',
            type: 'slug',
            options: {
                source: (doc) => `/portfolio/${doc.prevProject.toLowerCase()}`,
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
            }
        },
        {
            name: 'nextProject',
            title: 'Next Project',
            type: 'string'
        },
        {
            name: 'nextProjectSlug',
            title: 'Next Project Slug',
            type: 'slug',
            options: {
                source: (doc) => `/portfolio/${doc.nextProject.toLowerCase()}`,
                slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
            }
        },
        {
            name: 'portfolioPageImageDesktop',
            title: 'PortfolioPage Image Desktop',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'portfolioPageImageTablet',
            title: 'PortfolioPage Image Tablet',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'portfolioPageImageMobile',
            title: 'PortfolioPage Image Mobile',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'heroDesktop',
            title: 'Hero Desktop',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'previewImage1Desktop',
            title: 'Preview Image 1 Desktop',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'previewImage2Desktop',
            title: 'Preview Image 2 Desktop',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'heroTablet',
            title: 'Hero Tablet',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'previewImage1Tablet',
            title: 'Preview Image 1 Tablet',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'previewImage2Tablet',
            title: 'Preview Image 2 Tablet',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'heroMobile',
            title: 'Hero Mobile',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'previewImage1Mobile',
            title: 'Preview Image 1 Mobile',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'previewImage2Mobile',
            title: 'Preview Image 2 Mobile',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
    ]
}

export default project;