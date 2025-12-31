import { Data } from "effect";

export interface WalletInfo {
  readonly name: string;
  readonly image: string;
  readonly version: string;
}

export const WalletInfo = Data.case<WalletInfo>();

export interface Utxo {
  readonly input: UtxoInput;
  readonly output: UtxoOutput;
}

export const Utxo = Data.case<Utxo>();

export interface UtxoInput {
  readonly outputIndex: number;
  readonly txHash: string;
}

export const UtxoInput = Data.case<UtxoInput>();

export interface UtxoOutput {
  readonly address: string;
  readonly amount: Amount[];
}

export const UtxoOutput = Data.case<UtxoOutput>();

export interface Amount {
  readonly unit: string;
  readonly quantity: string;
}

export const Amount = Data.case<Amount>();
