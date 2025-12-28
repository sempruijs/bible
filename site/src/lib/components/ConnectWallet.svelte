<script lang="ts">
  import { onMount } from "svelte";
  import { BrowserWallet, type Wallet } from "@meshsdk/core";
  import { connectedWallet } from "../../stores/wallet";

  let availableWallets: Wallet[] = [];
  let walletBalance: string | null = null;
  let isDialogOpen = false;

  onMount(async () => {
    availableWallets = await BrowserWallet.getAvailableWallets();
    window.addEventListener("keydown", handleKeyDown);
  });

  function openDialog() {
    isDialogOpen = true;
  }

  function closeDialog() {
    isDialogOpen = false;
  }

  async function selectWallet(name: string) {
    const wallet: BrowserWallet = await BrowserWallet.enable(name);
    connectedWallet.set(wallet);

    const utxos = await wallet.getUtxos();
    const balanceLovelace = utxos.reduce((acc, utxo) => {
      const amount = utxo.output.amount.find(a => a.unit === "lovelace");
      return acc + (amount ? BigInt(amount.quantity) : 0n);
    }, 0n);

    walletBalance = `${Number(balanceLovelace) / 1_000_000} ₳`;
    closeDialog();
  }

  function disconnectWallet() {
    connectedWallet.set(null);
    walletBalance = null;
    closeDialog();
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      closeDialog();
    }
  }
</script>

<!-- Trigger Button -->
<button
  class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
  onclick={openDialog}
>
  {#if walletBalance}
    Balance: {walletBalance}
  {:else}
    Connect Wallet
  {/if}
</button>

<!-- Dialog -->
{#if isDialogOpen}
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div class="bg-black p-6 rounded-xl shadow-lg w-full max-w-md space-y-6 text-white">
      <h2 class="text-xl font-bold">
        {#if $connectedWallet}
          Connected Wallet
        {:else}
          Select a Wallet
        {/if}
      </h2>

      {#if $connectedWallet}
        <!-- Show wallet info and disconnect button -->
        <div class="space-y-4">
          <p class="text-sm">Connected to <strong>{$connectedWallet?._walletName}</strong></p>
          <p class="text-sm">Balance: {walletBalance}</p>
          <div class="flex justify-end space-x-2">
            <button
              class="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
              onclick={disconnectWallet}
            >
              Disconnect
            </button>
            <button
              class="px-3 py-1 text-gray-300 hover:text-white"
              onclick={closeDialog}
            >
              Close
            </button>
          </div>
        </div>
      {:else}
        <!-- Show wallet selection -->
        <ul class="space-y-4">
          {#each availableWallets as wallet}
            <li class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <img src="{wallet.icon}" alt="" aria-hidden="true" class="w-10 h-10" />
                <span class="font-medium">{wallet.name}</span>
              </div>
              <button
                class="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                onclick={() => selectWallet(wallet.name)}
              >
                Connect
              </button>
            </li>
          {/each}
        </ul>

        <div class="flex justify-end">
          <button
            class="mt-4 px-3 py-1 text-gray-300 hover:text-white"
            onclick={closeDialog}
          >
            Cancel
          </button>
        </div>
      {/if}
    </div>
  </div>
{/if}
