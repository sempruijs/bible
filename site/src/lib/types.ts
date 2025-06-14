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

function removeTrailingNumber(input: string): string {
  return input.replace(/\s\d+$/, "");
}


export const chapterToPath = (c: Chapter) => {
  const name = removeTrailingNumber(c.name);
  return `/${name}/${c.chapter}`;
}
