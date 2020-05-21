import React from "react"

import { Home } from "@styled-icons/fa-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowCircle as Arrow } from "@styled-icons/boxicons-solid/UpArrowCircle"
import { LightBulb as Light } from "@styled-icons/heroicons-outline/LightBulb"
import { Grid } from "@styled-icons/boxicons-solid/Grid"

import * as S from "./styled"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search/" title="Pesquisar">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem to="" title="Mudar o tema">
        <Light />
      </S.MenuBarItem>
      <S.MenuBarItem to="" title="Mudar visualização">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem to="" title="Ir para o Topo">
        <Arrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
