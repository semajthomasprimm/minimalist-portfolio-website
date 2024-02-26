const nav = {
    name: 'nav',
    title: 'Nav',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'object',
            fields: [
                {
                    name: 'name',
                    title: 'Name',
                    type: 'string'
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
        },
        {
            name: 'closedMenuIcon',
            title: 'Closed Menu Icon',
            type: 'object',
            fields: [
                {
                    name: 'name',
                    title: 'Name',
                    type: 'string'
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
        },
        {
            name: 'openMenuIcon',
            title: 'Open Menu Icon',
            type: 'object',
            fields: [
                {
                    name: 'name',
                    title: 'Name',
                    type: 'string'
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

export default nav;