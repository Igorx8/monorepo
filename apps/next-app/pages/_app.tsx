import { ChakraProvider } from '@chakra-ui/react';
import SidebarWithHeader from 'components/Sidebar';

interface PropTypes {
    Component: React.FC;
    pageProps: any;
}

export default function MyApp({ Component, pageProps }: PropTypes) {
    return (
        <ChakraProvider>
            <SidebarWithHeader>
                <Component {...pageProps} />
            </SidebarWithHeader>
        </ChakraProvider>
    );
}
