// Translation
import { useTranslation } from "react-i18next";

// Assets
import logo from "../../assets/mknext.svg";
import iconNotify from "../../assets/notifications-none.svg";
import iconUser from "../../assets/perm_identity.svg"

// Styles
import * as Styles from "./styles";


const  Header = () => {
  const { t } = useTranslation();
  return (
    <Styles.Header>
      <Styles.Container>
        <img src={logo} alt="Logo" />
        <Styles.Perfil>
          <Styles.Icon>
            <img src={iconNotify} alt={t("notify")} />
          </Styles.Icon>
          <Styles.Icon>
            <img src={iconUser} alt="Notificação" />
          </Styles.Icon>
        </Styles.Perfil>
      </Styles.Container>
    </Styles.Header>
  );
}

export default Header;