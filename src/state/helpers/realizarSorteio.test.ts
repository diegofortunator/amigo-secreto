import { realizarSorteio } from "./realizarSorteio"

describe('dado um sortei de amigo secreto', () => {
    test('cada participante não sorteie o próprio nome', () => {
        const participantes = [
            'Ana',
            'Maria',
            'Vitória',
            'Laís',
            'José',
            'Vinicios'
        ]

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})