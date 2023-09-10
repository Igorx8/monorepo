import { Button, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();

    return (
        <VStack w="100%" h="100vh" bg="lightcyan" justifyContent="center">
            <Text color="orange" fontSize="40pt">
                Seja bem vindo a loja
            </Text>
            <Button
                rounded="2xl"
                colorScheme="telegram"
                onClick={() => router.push('/products')}
            >
                Acesse a loja
            </Button>
        </VStack>
    );
}
