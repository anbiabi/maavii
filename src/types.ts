
export type Language = 'EN' | 'KR';

export interface MenuItem {
  id: string;
  name: {
    EN: string;
    KR: string;
  };
  description: {
    EN: string;
    KR: string;
  };
  price: number;
  category: string;
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface TranslationStrings {
  [key: string]: {
    EN: string;
    KR: string;
  };
}
