import {extendTheme} from '@chakra-ui/react'


const theme = extendTheme({
    initialColorMode : 'light',
    useSystemColorMode : true,

    fonts: {
        heading: `"Quicksand", serif`,
        body: `"Quicksand", serif`,
      },
})

export default theme;