import { VStack, Text, Image, Box, ScrollView, Divider } from 'native-base';
import Logo from '../assets/Logo03.png';
import { Botao } from "../componetes/Botao";
import { EntradaTexto } from '../componetes/EntradaTexto';
import { Titulo } from '../componetes/Titulo';
 

export default function Principal() {
    return(
        <ScrollView flex={1} bgColor="white">
        <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
            <Image source={Logo} alt="logo" mt={10} />

            <Titulo color="red.500">Principal</Titulo>

            <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightColor="md">

                <EntradaTexto placeholder='Digite a especialidade do pintor' />

                <EntradaTexto placeholder='Digite a localização desejada' />

                <Botao mt={3} mb={3}>
                    Buscar
                </Botao>

            </Box>
        </VStack>

        </ScrollView>
    )
}