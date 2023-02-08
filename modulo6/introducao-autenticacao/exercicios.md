### Exercício 1
a)  Acho as duas maneiras válidas. Acho mais comodo usar strings

b)  import { v4 } from 'uuid'
    export class generate {
        generatedId = () => {
            return v4
        }
    }

### Exercício 2
a)  as string servir para a confirmação de que o que vem no process.env.JWT_KEY é, de fato, uma string