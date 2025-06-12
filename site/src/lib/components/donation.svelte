<script lang="ts">
  import { Effect, Option } from 'effect';
  import { donateAda } from '$lib/wallet/donateAda';
  import { provideWallet } from '$lib/wallet';
  import { connectedWallet } from '../../stores/wallet';
  import type { Utxo } from '$lib/types';

  const presetAmounts = ['5', '10', '25', '50', 'custom'];

  let state = $state({
    utxos: [] as Utxo[],
    explorerLink: Option.none<string>(),
    selected: '5',
    customAda: ''
  });

  function getSelectedAda(): string {
    return state.selected === 'custom' ? state.customAda : state.selected;
  }

  function send_ada() {
    const amount = getSelectedAda();
    if (!amount || isNaN(Number(amount))) {
      alert('Please enter a valid amount.');
      return;
    }

    Effect.runPromise(provideWallet($connectedWallet)(donateAda(amount)))
      .then((result) => {
        state.explorerLink = Option.some(result);
      })
      .catch((err) => {
        console.log('error sending ₳', err);
        state.utxos = [];
      });
  }
</script>

<div class="min-w-100 max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6 text-black">
  {#if Option.isNone(state.explorerLink)}
  <h1 class="text-2xl font-bold text-gray-800 text-center">Donate</h1>
  <p>If this template saved you time, consider making a one-time donation.</p>

  <div class="flex flex-wrap gap-2 justify-center">
    {#each presetAmounts as amount}
      <button
        onclick={() => (state.selected = amount)}
        class={`px-4 py-2 rounded font-medium transition
          ${state.selected === amount
            ? 'bg-blue-600 text-white ring-2 ring-blue-300'
            : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}
        `}
      >
        {amount === 'custom' ? 'Custom' : `₳${amount}`}
      </button>
    {/each}
  </div>

  {#if state.selected === 'custom'}
    <div>
      <label for="custom-amount" class="block text-sm font-medium text-gray-700 mb-1">
        Enter custom amount
      </label>
      <input
        id="custom-amount"
        type="text"
        bind:value={state.customAda}
        placeholder="e.g. 7.5"
        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
    </div>
  {/if}

  <button
    onclick={send_ada}
    class="w-full py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
  >
    Send {state.selected === 'custom' ? `₳${state.customAda || '...'}` : `₳${state.selected}`}
  </button>
  {/if}

  {#if Option.isSome(state.explorerLink)}
    <p class="text-green-600 text-sm text-center break-all mt-2">
      ✅ Transaction sent!
    </p>
    <a class="text-blue-500" href="{state.explorerLink.value}">view on explorer</a>
  {/if}
</div>
