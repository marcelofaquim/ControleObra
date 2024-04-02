import { Text, Avatar, VStack} from 'native-base'
import { Botao } from './Botao'


interface CardPropos {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    LocalObra: string;
    FoiParaObra?: boolean;
    FoiAgendando?: boolean;
}

export default function CardConsulta({
    nome,
    foto,
    especialidade,
    data,
    LocalObra,
    FoiParaObra,
    FoiAgendando

}: CardPropos) {
    return(
        <VStack w="100%" bg={FoiParaObra ? 'red.100': 'white'} p="5" borderRadius="lg" shadow="2" mb={2}>

            <VStack flexDir="row">
                <Avatar size="xl" source={{uri: foto}} />

            <VStack pl="4">
                <Text fontSize="md" bold>{nome} </Text>
                <Text> {especialidade} </Text>
                <Text> {data} </Text>
                <Text> {LocalObra} </Text>
            </VStack>    

            </VStack>

            <Botao mt={4}> 

                {FoiParaObra ? 'Cancelar ': 'Agendar obra'}
            </Botao>
            
        </VStack>
    )
} 