import {Text, ITextProps } from "native-base"
import {ReactNode} from "react"


interface TituloPros extends ITextProps {
    children: ReactNode
}

export function Titulo({ children, ...rest }: TituloPros){ //criando codigos que se repetem, para usarmos em outra tela
    return (
        <Text 
      fontSize="2xl" 
      fontWeight="bold" 
      color="gray.500"
      textAlign="center"
      mt={5} //Margin top = afastar da logo
      {...rest}
      >
        {children}

      </Text>

    )
}