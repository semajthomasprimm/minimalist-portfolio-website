const contact = {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'icons',
            title: 'Icons',
            type: 'array',
            of: [
                {
                    name: 'icon',
                    title: 'Icon',
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string'
                        },
                        {
                            name: 'url',
                            title: 'URL',
                            type: 'url'
                        },
                        {
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            fields: [
                                {
                                    name: 'alt',
                                    title: 'Alt',
                                    type: 'string'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

export default contact;