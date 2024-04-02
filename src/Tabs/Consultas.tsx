import { VStack, Divider, ScrollView } from 'native-base'
import CardConsulta from '../componetes/CardConsulta'
import { Titulo } from '../componetes/Titulo'
import { Botao } from '../componetes/Botao'

export default function Consultas() {
    return(
        <ScrollView p="5">
            <Titulo color="red.500" mt="10"> Minhas Obras </Titulo>
            <Botao mt={5} mb={5}> Agendar Novas Obras </Botao>

            <Titulo color="red.500" fontSize="lg" alignSelf="flex-star" mb={2}> Proximas Obras </Titulo>

            <CardConsulta 
            
            nome='Marcelo Faquim'
            especialidade='Pintor Junior'
            foto='https://github.com/marcelofaquim.png'
            data='20/12/2023'
            LocalObra='Rua Martinico Prado 361'
            FoiParaObra
            />

            <Divider mt={5} />

            
            <Titulo color="red.500" fontSize="lg" alignSelf="flex-star" mb={2}> Obras Passadas </Titulo>

            <CardConsulta 
            
            nome='Marcelo Faquim'
            especialidade='Pintor Junior'
            foto='https://github.com/marcelofaquim.png'
            data='20/12/2023'
            LocalObra='Rua Martinico Prado 361'
            FoiAgendando
            />

        </ScrollView>

        
    )
}