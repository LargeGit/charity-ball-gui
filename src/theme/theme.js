import {createSystem, defineConfig, chakra, defaultConfig} from '@chakra-ui/react';
import { defineRecipe } from '@chakra-ui/react';

const breakpoints = {
    base: "0px",  //0px
    sm: "480px",  //320px
    md: "760px",  //768px
    lg: "940px",  //992px
    xl: "1200px", //1280px
    "2xl": "1536px",  //1536px
}

const colors = {
    agebar: {
        400: 'pink', //'#f1e8f1',   // '#ffd230', 
        900: 'black',
    },
    agebarHighlight: {
        400: 'black',
    },
    notificationbar: {
        400: '#87CEEB', // light pink,  // cyan.400
        900: 'Black',
    },
    notificationColour: {
        100: '#fca5a5', // 'red.300', // ERROR
        200: '#bbf7d0',   //'green.200',  // SUCCESS
        300: '#fed7aa',   //'orange.200',  // WARNING
        400: '#d4d4d8',   //'gray.300',  //  INFO
    },
    timeline: {
        100: '#db2777', // heading
        200: '#f9a6d4',   //base bar color
    },
    navbar: {
        400: 'black',
        900: 'white',
    },
    title: {
        400: 'white',
        900: 'pink.600',
    },
    header: {
        400: "#48BB78",  // = green.400
        900: 'black',
    },
    matchbackground: {
        400: '#e2e8f0',  // = gray.200
        900: '#171923',    // = gray.900
    },
    greencolor: {
        400: "#48BB78",  // = green.400
        900: 'black',  
    },
    redcolor: {
        400: "#E53E3E",  // = red.500
        900: 'black',
    },
    yellow: {
        400: '#ffd230', // changed from the default value of #ECC94B,
    },
    cyan: {  
        300: "#76E4F7",
        400: "#87CEEB",  // was "#0BC5EA",   // use this for notifcation bar
    }
}

const buttonRecipe = defineRecipe({
    base: {
        fontWeight: 'normal',
        border: '1px solid',
        mx: 4,
        my: 4,
        colorPalette: 'pink'
    },
    sizes: {
        md: {
            fontSize: '0.9rem',
            h: 9,
        }
    },
    defaultProps: {
        colorPalette: 'pink',
    },
})

const headingRecipe = defineRecipe({
    base: {
        my: 4,
        color: 'pink.600',
        fontSize: '1.2rem',
        fontWeight: 'medium',
        fontFamily: 'Asap'        
    },
})

const components = {
    Button: {
        base: {
            fontWeight: 'normal',
            border: '1px solid',
            mx: 4,
            my: 4,
        },
        sizes: {
            md: {
                fontSize: '0.9rem',
                h: 9,
            }
        },  
    },
    Input: {
        defaultProps: {
            focusBorderColor: 'pink.400',
        },
    },
    Heading: {
        baseStyle: {
            color: 'pink.600',
            my: 3,
        },
        sizes: {
            xl: {
                fontSize: '1.2rem',
            }
        },
    }
}


const myTheme = defineConfig({
    theme: {
        recipes: {
            button: buttonRecipe,
            heading: headingRecipe,
        },
        breakpoints,
        tokens: {
            colors,
            components
        }
    }
})

export const mySystem = createSystem(defaultConfig, myTheme)

const Button = chakra(
    "button",
    {
        base: {
            bg: 'blue.500',
            color: 'white'
        },
    },
    { defaultProps: { type: 'button'} },
)


/* 
export const components = {
    Button: {
        variants: {
            'ageBar': {
                color: 'black',
                bg: '#2e2cba',
                p: '5px',
                border: 'solid 1px'
            }
        }
    },
    Modal: {
        variants: {
            colorPalette: 'red',
    }
},
}
 */