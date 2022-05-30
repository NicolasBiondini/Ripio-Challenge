import { useAppDispatch } from "../../hooks/useAppDispatch";
import { FieldsetStyled } from "./Fieldset";

type Props = {
  labelText: string;
  labelId: string;
  coinAmount: number;
  handleChange?: Function;
  min?: number;
};

function FieldsetStyle({
  labelText,
  labelId,
  coinAmount,
  handleChange,
  min,
}: Props) {
  const dispatch = useAppDispatch();
  return (
    <FieldsetStyled>
      <label htmlFor={labelId}>{labelText}</label>
      <input
        type={"any"}
        min={min ? 1500 : 0}
        id={labelId}
        name={labelId}
        value={coinAmount}
        onChange={(e) => handleChange && handleChange(e, dispatch)}
      />
    </FieldsetStyled>
  );
}

export default FieldsetStyle;
