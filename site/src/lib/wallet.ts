import { Effect, Context, Data } from "effect";
import type { BrowserWallet } from "@meshsdk/core";
import type { Utxo } from "./types";

export type WalletError =
  | GetUtxosError
  | GetChangeAddressError  
  | SignTxError
  | SubmitTxError;

export interface GetUtxosError {
  readonly _tag: "GetUtxosError";
  readonly reason: unknown;
}

export const GetUtxosError = Data.tagged<GetUtxosError>("GetUtxosError");

export interface GetChangeAddressError {
  readonly _tag: "GetChangeAddressError";
  readonly reason: unknown;
}

export const GetChangeAddressError = Data.tagged<GetChangeAddressError>("GetChangeAddressError");

export interface SignTxError {
  readonly _tag: "SignTxError";
  readonly reason: unknown;
}

export const SignTxError = Data.tagged<SignTxError>("SignTxError");

export interface SubmitTxError {
  readonly _tag: "SubmitTxError";
  readonly reason: unknown;
}

export const SubmitTxError = Data.tagged<SubmitTxError>("SubmitTxError");

export class Wallet extends Context.Tag("Wallet")<
  Wallet,
  {
    readonly getUtxos: Effect.Effect<Utxo[], WalletError>;
    readonly getChangeAddress: Effect.Effect<string, WalletError>;
    readonly signTx: (
      tx: string,
      partialSign?: boolean,
    ) => Effect.Effect<string, WalletError>;
    readonly submitTx: (tx: string) => Effect.Effect<string, WalletError>;
  }
>() {}

export function provideWallet(wallet: BrowserWallet) {
  return Effect.provideService(Wallet, {
    getUtxos: Effect.tryPromise({
      try: () => wallet.getUtxos(),
      catch: (e): WalletError => GetUtxosError({ reason: e }),
    }),
    getChangeAddress: Effect.tryPromise({
      try: () => wallet.getChangeAddress(),
      catch: (e): WalletError => GetChangeAddressError({ reason: e }),
    }),
    signTx: (tx, partial = true) =>
      Effect.tryPromise({
        try: () => wallet.signTx(tx, partial),
        catch: (e): WalletError => SignTxError({ reason: e }),
      }),
    submitTx: (tx) =>
      Effect.tryPromise({
        try: () => wallet.submitTx(tx),
        catch: (e): WalletError => SubmitTxError({ reason: e }),
      }),
  });
}
