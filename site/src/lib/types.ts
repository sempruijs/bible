export type WalletInfo = {
  name: String;
  image: String;
  version: String;
};

export type Utxo = {
  input: {
    outputIndex: number;
    txHash: string;
  };
  output: {
    address: string;
    amount: {
      unit: string;
      quantity: string;
    }[];
  };
};

export interface Verse {
  verse: number;
  chapter: number;
  name: string;
  text: string;
}

export interface Chapter {
  chapter: number;
  name: string;
  verses: Verse[];
}

export interface Book {
  name: string;
  chapters: Chapter[];
}

export interface Bible {
  books: Book[];
}
