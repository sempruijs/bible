import { Data, Schema } from "effect";

// Effect Schema definitions
export const WalletInfoSchema = Schema.Struct({
  name: Schema.String,
  image: Schema.String,
  version: Schema.String
});

export const AmountSchema = Schema.Struct({
  unit: Schema.String,
  quantity: Schema.String
});

export const UtxoInputSchema = Schema.Struct({
  outputIndex: Schema.Number,
  txHash: Schema.String
});

export const UtxoOutputSchema = Schema.Struct({
  address: Schema.String,
  amount: Schema.Array(AmountSchema)
});

export const UtxoSchema = Schema.Struct({
  input: UtxoInputSchema,
  output: UtxoOutputSchema
});

// Type exports
export type WalletInfo = Schema.Schema.Type<typeof WalletInfoSchema>;
export type Amount = Schema.Schema.Type<typeof AmountSchema>;
export type UtxoInput = Schema.Schema.Type<typeof UtxoInputSchema>;
export type UtxoOutput = Schema.Schema.Type<typeof UtxoOutputSchema>;
export type Utxo = Schema.Schema.Type<typeof UtxoSchema>;

// Maintain backward compatibility with Data constructors
export const WalletInfo = Data.case<WalletInfo>();
export const Amount = Data.case<Amount>();
export const UtxoInput = Data.case<UtxoInput>();
export const UtxoOutput = Data.case<UtxoOutput>();
export const Utxo = Data.case<Utxo>();
