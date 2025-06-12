import { Effect, Context } from "effect";
import type { BrowserWallet } from "@meshsdk/core";
import type { Utxo } from "./types";

export type WalletError =
  | { _tag: "GetUtxosError"; reason: unknown }
  | { _tag: "GetChangeAddressError"; reason: unknown }
  | { _tag: "SignTxError"; reason: unknown }
  | { _tag: "SubmitTxError"; reason: unknown };

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
      catch: (e): WalletError => ({ _tag: "GetUtxosError", reason: e }),
    }),
    getChangeAddress: Effect.tryPromise({
      try: () => wallet.getChangeAddress(),
      catch: (e): WalletError => ({ _tag: "GetChangeAddressError", reason: e }),
    }),
    signTx: (tx, partial = true) =>
      Effect.tryPromise({
        try: () => wallet.signTx(tx, partial),
        catch: (e): WalletError => ({ _tag: "SignTxError", reason: e }),
      }),
    submitTx: (tx) =>
      Effect.tryPromise({
        try: () => wallet.submitTx(tx),
        catch: (e): WalletError => ({ _tag: "SubmitTxError", reason: e }),
      }),
  });
}
