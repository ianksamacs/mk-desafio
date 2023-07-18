import { ICliente } from '../interfaces';
import { Api } from '../providers';

const createCliente = ( data: ICliente) => Api.post('/api/v1/clientes', data);

export const ClienteServices = { 
  createCliente
};