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
