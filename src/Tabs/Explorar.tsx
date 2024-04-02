import { VStack, Box, ScrollView, Divider } from 'native-base'
import { EntradaTexto } from '../componetes/EntradaTexto'
import { Botao } from '../componetes/Botao'
import { Titulo } from '../componetes/Titulo'
import CardConsulta from '../componetes/CardConsulta'


export default function Explorar() {
    return(

        <ScrollView flex={1} bgColor="white">
            <VStack flex={1} alignItems="flex-star" justifyContent="flex-star" p={5}>
                <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
                    <EntradaTexto 
                    placeholder='Digite a especialidade do pintor'
                    />

                    <EntradaTexto 
                    placeholder='Digite a Localização'
                    />
                    <Botao mt={3} mb={3}>
                        Buscar
                    </Botao>    
                </Box>

                <Titulo color="red.500" alignSelf="center">Resultado da Busca </Titulo>
                {[1, 2, 3].map((_,index) => (
                    <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" mt="2" key={index}>
                       
                       <CardConsulta
                            especialidade='Pintor Junior'
                            foto='https://github.com/marcelofaquim.png'
                            nome='Marcelo Faquim' 
                            data='20/12/2023'
                            LocalObra={'Rua Domingos Paiva 206'}                        
                            />

                            <Divider />
                        </VStack>
                ))}
                

        </VStack>
        </ScrollView>
    )
}