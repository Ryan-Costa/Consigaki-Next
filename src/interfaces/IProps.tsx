export interface UserProps {
  code: string;
  name: string;
  cpf?: string;
  register: string;
  mail?: string;
  cellPhoner?: string;
  dateBirth?: string;
}

export interface AgreementsProps {
  code: string;
  name: string;
  register: string;
}

export interface IProducts {
  id: number;
  name: string;
  type: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IAllProducts {
  data: {
    totalItems: number;
    products: IProducts[];
    totalPages: number;
    currentPage: number;
  };
}

export interface IProviders {
  id: number;
  name: string;
  active: boolean;
  createdAt: string;
  updatedAt: string | null;
}

export interface IAllProviders {
  data: {
    totalItems: number;
    providers: IProviders[];
    totalPages: number;
    currentPage: number;
  };
}

export interface IProducts {
  id: number;
  name: string;
  type: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ILoans {
  agreementId: string;
  userId: string;
  cpf: string;
  registration: string;
  productId: string;
  providerId: string;
  amouunt: string;
  installment: string;
  fee: number;
  term?: string;
}
