
// Styles
import * as Styles from "./styles";

const Stages = () =>{
  return (
    <div className="Stages">
      <Styles.Stages>
        <Styles.Step atual={-1} posicao={4}><span>5</span> Contrato</Styles.Step>
        <Styles.Step atual={-1} posicao={3}><span>4</span> Pagamentos</Styles.Step>
        <Styles.Step atual={-1} posicao={2}><span>3</span> Anexar arquivo</Styles.Step>
        <Styles.Step atual={0} posicao={1}><span>2</span> Cliente</Styles.Step>
        <Styles.Step atual={1} posicao={0}><span>1</span> Produto</Styles.Step>
      </Styles.Stages>
    </div>
  );
}

export default Stages;