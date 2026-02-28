import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

export default function Categories() {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()

  if (actionGames && rpgGames && fightGames && simulationGames && sportsGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList games={rpgGames} title="RPG" background="gray" id="rpg" />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="gray"
          id="simulation"
        />
        <ProductsList
          games={sportsGames}
          title="Esportes"
          background="black"
          id="sports"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
