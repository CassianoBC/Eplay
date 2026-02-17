import Hero from '../../components/Hero'
import Section from '../../components/Section'

import Gallery from '../../components/Gallery'

import hogwartsLegacy from '../../assets/images/hogwarts_section.png'

export default function Product() {
  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros de Harry Potter.
          Embarque em uma jornada por locais novos e familiares enquanto explora
          e descubra animais fantasticos, personalize seu personagem e crie
          pocoes, domine o lançamento de feitiços, aprimore talentos e torne-se
          o bruxo que deseja ser. Experimente Hogwarts da década de 1800. Seu
          personagem é um estudante com a chave de um antigos segredo que ameaça
          destruir o mundo bruxo. Faça aliados, lute contra os bruxo das trevas
          e decida o destino do mundo bruxo. Seu legado é o que voce faz dele.
          Viva o inesperado.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> PlayStation 5 <br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Games, subsidiária da Warner Bros. Interactive
          Entertainment <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          inglês, espanhol, francês, alemão, italiano, português, entre outros.
          As opções de áudio e legendas podem ser ajustadas nas configurações do
          jogo.
        </p>
      </Section>
      <Gallery name="Hogwarts Legacy" defaultCover={hogwartsLegacy} />
    </>
  )
}
