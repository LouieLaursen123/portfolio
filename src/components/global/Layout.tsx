import { ReactNode } from 'react'

// Components
import { Header } from '../global/Header'
import { Footer } from '../global/Footer'

// Chakra
import { Box } from '@chakra-ui/react'

type Props = {
    children: ReactNode
}

export const Layout = ({ children }: Props ) => {
    return(
        <Box>
            <Header />
                <Box as="main" role={'main'} flex={1}>
                    {children}
                </Box>
            <Footer />
        </Box>
    )
}