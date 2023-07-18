
// Styles
import { useTranslation } from "react-i18next";
import * as Styles from "./styles";

export interface SubTotalProps {
  valor?: number;
}

const SubTotal: React.FC<SubTotalProps> = ({ valor })=> {
  const { t } = useTranslation();
  const valorText = valor?.toString().replace(".", ",")
  
  
  return (
    <div className="Stages">
      <Styles.Main>
        <Styles.Container>
        <Styles.H3>{t('Subtotal')}</Styles.H3>
        <Styles.H2>R$ {valorText}</Styles.H2>
        </Styles.Container>
      </Styles.Main>
    </div>
    
  );
}

export default SubTotal;