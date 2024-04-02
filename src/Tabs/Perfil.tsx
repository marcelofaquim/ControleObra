import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Titulo } from '../componetes/Titulo'

export default function Perfil() {
    return(
        <ScrollView flex={1}> 
            <VStack flex={1} alignItems="center" p={5}>

                <Titulo color="blue.500">Meu Perfil</Titulo>

                {/* // Carregando foto de pesso através de link externo */}
                <Avatar  size="xl" source={{uri: "https://github.com/marcelofaquim.png"}} mt={5} />

                <Titulo color="red.500"> Informações pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}> Marcelo Faquim</Titulo>
                <Text> 26/02/1999</Text>
                <Text> São Paulo</Text>

                <Divider mt={5} />

                <Titulo color="red.500" mb={1}> Historico de Obra</Titulo>
                <Text> Pintura Industrial</Text>
                <Text> Pintura Corporativa</Text>

            </VStack>
        
        </ScrollView>
    )
}