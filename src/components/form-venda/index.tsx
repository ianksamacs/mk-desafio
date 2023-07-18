
const handleFileUpload = (file: File) => {
  console.log(file)
};

// Styles
import * as Styles from "./styles";

// Components
import Stages from "../stages";
import Button from "../button";
import MaskedInput from "../masked-input";
import CustomSelect from "../select-input";
import SubTotal from "../subtotal";
import { t } from "i18next";

// Datas
import CIDADES from "../../data/cidades.json";
import CLIENTES from "../../data/clientes.json";
import ESTADOS from "../../data/estados.json";
import SEXO from "../../data/sexo.json";
import CIVIL from "../../data/estado-civil.json";





const FormVenda = () =>{
  return (
    <Styles.Main>
      <div>
        <Styles.H4>{t('Vendas')}</Styles.H4>
        <Styles.H3>{t('Nova venda')}</Styles.H3>
      </div>
      <Stages />
      <SubTotal valor={114.75}/>
      <Styles.Container>
        <div>
          <h3>{t('Buscar cliente')}</h3>
          <Styles.CustomHR />
        </div>
        <div>
        </div>
        <Styles.FormGroupEnd>
          <Styles.Label width="19.875rem">
            <h4>{t('Buscar cliente')}</h4>
            <CustomSelect options={CLIENTES}/>
          </Styles.Label>
          <Button text={t('Buscar')} auto/>
          <Button text={t('Adicionar pessoas')} auto blue/>
        </Styles.FormGroupEnd>
        <Styles.CustomHR2 />
          <Styles.FormGroup>
            <Styles.Label width="26.3125rem">
              <h4>{t('Nome completo')}</h4>
              <MaskedInput />
            </Styles.Label>
          </Styles.FormGroup>
          <Styles.FormGroup>
          <Styles.Label width="9.3125rem">
            <h4>{t('CPF')}</h4>
            <MaskedInput  placeholder="000.000.000-00"/>
          </Styles.Label>
          <Styles.Label width="8rem">
            <h4>{t('IE/RG')}</h4>
            <MaskedInput />
          </Styles.Label>
          <Styles.Label width="6.6875rem">
            <h4>{t('Órgão emissor')}</h4>
            <MaskedInput />
          </Styles.Label>
        </Styles.FormGroup>
        <Styles.FormGroup>
          <Styles.Label width="9.3125rem">
            <h4>{t('Telefone')}</h4>
            <MaskedInput />
          </Styles.Label>
          <Styles.Label width="9.3125rem">
            <h4>{t('Celular')}</h4>
            <MaskedInput />
          </Styles.Label>
        </Styles.FormGroup>

        <Styles.CustomHR2 />

        <Styles.FormGroup>
          <Styles.Label width="9.125rem">
            <h4>{t('Data de nascimento')}</h4>
            <MaskedInput />
          </Styles.Label>
        </Styles.FormGroup>
        <Styles.FormGroup>
          <Styles.Label width="9.125rem">
            <h4>{t('Nacionalidade')}</h4>
            <MaskedInput />
          </Styles.Label>
        </Styles.FormGroup>
        <Styles.FormGroup>
          <Styles.Label width="18.125rem">
            <h4>{t('Estado de nascimento')}</h4>
            <CustomSelect options={ESTADOS}/>
          </Styles.Label>
        </Styles.FormGroup>
        <Styles.FormGroup>
          <Styles.Label width="18.125rem">
            <h4>{t('Naturalidade(Cidade de nascimento)')}</h4>
            <CustomSelect options={CIDADES}/>
          </Styles.Label>
        </Styles.FormGroup>

        <Styles.CustomHR2 />

        <Styles.FormGroup>
          <Styles.Label width="13.125rem">
            <h4>{t('Estado civil')}</h4>
            <CustomSelect options={CIVIL}/>
          </Styles.Label>
        </Styles.FormGroup>
        <Styles.FormGroup>
          <Styles.Label width="13.125rem">
            <h4>{t('Sexo')}</h4>
            <CustomSelect options={SEXO}/>
          </Styles.Label>
        </Styles.FormGroup>

        <Styles.CustomHR2 />

        <Styles.FormGroup>
          <Button text={t('Atualizar')} outline/>
        </Styles.FormGroup>
      
        <Styles.CustomHR2 />

        <Styles.FormGroup>
          <Button text={t('Continuar')} primary/>
          <Styles.Voltar>{t('Voltar')}</Styles.Voltar>
        </Styles.FormGroup>

      </Styles.Container>
    </Styles.Main>
  );
}

export default FormVenda;
