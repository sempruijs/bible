<script>
    import { connectedWallet } from "../../../stores/wallet";
    import ConnectWallet from "../ConnectWallet.svelte";
    import Donation from "../donation.svelte";
</script>

<div class="bg-green-800 h-full w-full">
    <h1>Donate</h1>
    <p>If you like this website, consider making a donation</p>
    <ConnectWallet />
    {#if $connectedWallet}
        <Donation />
    {/if}
</div>
