import * as S from "./MovimientosPage.styles";
import { MessageContainerStyled } from "../../components/messageContainer/MessageContainer";
import MovementsTable from "../../components/movementsTable/MovementsTable";

type Props = {};

function MovimientosPage({}: Props) {
  return (
    <S.MovimientosPageStyled>
      <MessageContainerStyled>
        <h3>Mis movimientos</h3>
        <p>
          En mis movimientos podrás ver una lista de tus ultimas 20 compras /
          conversiones.
        </p>
      </MessageContainerStyled>
      <S.TableContainer>
        <S.TableLayout>
          <MovementsTable limit={20} />
        </S.TableLayout>
      </S.TableContainer>
    </S.MovimientosPageStyled>
  );
}

export default MovimientosPage;
