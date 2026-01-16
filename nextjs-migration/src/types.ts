
export type Language = 'EN' | 'KR';

export type Category = 'main' | 'snack';

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
  category: Category;
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
