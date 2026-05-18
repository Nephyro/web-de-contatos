'use strict'

import { getContatos, postContato, putContato, deleteContato } from './contatos.js'

const novoContato = {
    "nome": "Anderson Ribeiro Atualizar",
    "celular": "11 9 7171-6464",
    "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
    "email": "anderson@gmail.com",
    "endereco": "Av. São Joaquim, 234",
    "cidade": "Carapicuiba Atualizar"
    }

console.log(await deleteContato(6))