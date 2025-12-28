import { writable } from "svelte/store";
import type { BrowserWallet } from "@meshsdk/core";

export const connectedWallet = writable<BrowserWallet | null>(null);
