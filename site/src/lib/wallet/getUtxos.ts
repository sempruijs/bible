import { Effect } from "effect";
import type { Utxo } from "../types";
import { Wallet } from "$lib/wallet";

export function getUtxos(): Effect.Effect<Utxo[], Error, Wallet> {
  return Effect.gen(function* () {
    const wallet = yield* Wallet;
    return yield* wallet.getUtxos;
  });
}
