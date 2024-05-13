import { Theme } from '@aws-amplify/ui-react'
const theme: Theme = {
    name: 'custom-theme',
    tokens: {
        components: {
            checkbox: {
                button: {
                    color: undefined,
                    _focus: {
                        outlineColor: undefined,
                        outlineOffset: undefined,
                        outlineWidth: '',
                        borderColor: undefined,
                        boxShadow: undefined,
                    },
                    before: {
                        borderWidth: undefined,
                        borderRadius: undefined,
                        borderStyle: undefined,
                        borderColor: undefined,
                    },
                },
            }
        },
    },
};

export default theme;