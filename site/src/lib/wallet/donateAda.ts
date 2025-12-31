import { Data, Effect } from "effect";
import type { BrowserWallet } from "@meshsdk/core";
import { MeshTxBuilder } from "@meshsdk/core";
import { Wallet, type WalletError } from "$lib/wallet";

export interface ParseAdaError {
  readonly _tag: "ParseAdaError";
  readonly message: string;
}

export const ParseAdaError = Data.tagged<ParseAdaError>("ParseAdaError");

export interface BuildTransactionError {
  readonly _tag: "BuildTransactionError";
  readonly message: string;
}

export const BuildTransactionError = Data.tagged<BuildTransactionError>("BuildTransactionError");

export function donateAda(
  ada: string,
): Effect.Effect<string, WalletError | ParseAdaError | BuildTransactionError, Wallet> {
  return Effect.gen(function* (_) {
    const lovelace = yield* _(parseAdaToLovelace(ada));
    console.log(lovelace);
    const w = yield* _(Wallet);
    const utxos = yield* _(w.getUtxos);
    const changeAddress = yield* _(w.getChangeAddress);

    const txBuilder = new MeshTxBuilder();

    const unsignedTx = yield* _(
      Effect.tryPromise({
        try: () =>
          txBuilder
            .txOut(
              "addr1q9cwxnl6v6th9n7mzhk293mfdsc6uac9hgkg2fjjf5fstjvccy2suwmp0ru23qyl8hudzrqraep3q8naq498flnhkxws5rh57s",
              [{ unit: "lovelace", quantity: lovelace }],
            )
            .changeAddress(changeAddress)
            .selectUtxosFrom(utxos)
            .complete(),
        catch: (e) => BuildTransactionError({ message: "Failed to build transaction: " + String(e) }),
      }),
    );

    const signedTx = yield* _(w.signTx(unsignedTx));

    const txHash = yield* _(w.submitTx(signedTx));

    const link = explorerLink(txHash);
    return link;
  });
}

export const parseAdaToLovelace = (
  input: string,
): Effect.Effect<string, ParseAdaError> =>
  Effect.gen(function* (_) {
    const cleaned = input.trim();

    const dotCount = (cleaned.match(/\./g) || []).length;
    const commaCount = (cleaned.match(/,/g) || []).length;

    // If both dot and comma are present → ambiguous
    if (dotCount > 0 && commaCount > 0) {
      yield* _(
        Effect.fail(
          ParseAdaError({
            message: `Ambiguous ADA format: "${input}". Please use only one type of decimal separator.`,
          }),
        ),
      );
    }

    // Normalize: if only comma is used, treat it as a decimal separator
    const normalized =
      commaCount > 0 && dotCount === 0 ? cleaned.replace(",", ".") : cleaned;

    // Parse the normalized number
    const ada = Number(normalized);
    if (isNaN(ada)) {
      yield* _(Effect.fail(ParseAdaError({ message: `Invalid ADA amount: "${input}"` })));
    }

    const lovelace = Math.round(ada * 1_000_000);
    return lovelace.toString();
  });

const explorerLink = (txHash: string) => `https://cexplorer.io/tx/${txHash}`;
