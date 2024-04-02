import { VStack, Image, Text, Box, Link, Checkbox, ScrollView } from 'native-base'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo03.png'
import { Botao } from './componetes/Botao';
import { EntradaTexto } from './componetes/EntradaTexto';
import { Titulo } from './componetes/Titulo';
import { secoes } from './utils/CadastroEntradoTexto';

export default function Cadastro() {
  const [numSecao, setNumSecao] = useState(0);
  
  function avancarSecao(){
    if(numSecao < secoes.length - 1) {
      setNumSecao(numSecao+1)
    }
  }

  function voltarSecao(){
    if(numSecao > 0){
      setNumSecao(numSecao -1)
    }
  }


  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Unattimo"  alignSelf="center"/>

      <Titulo>

        {secoes[numSecao].titulo}

      </Titulo>

      <Box>
        {
          secoes[numSecao]?.entradaTexto?.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
          })
        }
      </Box>

        {/* Checkbox abaixo */}

      <Box>
        <Text color="red.400" fontWeight="bold" fontSize="md" mt="2" mb={2}>
          Selecione o Grupo:
        </Text>

        {
          secoes[numSecao].checkbox.map(checkbox => {
            return <Checkbox key={checkbox.id} value={checkbox.value}> 
              {checkbox.value}
              
            </Checkbox>
          })
        }

      </Box>

        {/* Chaves foi acrescentada para que esse botão não apareça na primeira tela */}
      {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor="gray.400">Voltar</Botao>} 

      <Botao onPress={() => avancarSecao()} mt={4} mb={20}>Avançar</Botao>

    </ScrollView>
  );
}