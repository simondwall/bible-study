<script lang="ts">
    import { onMount } from 'svelte';

    let selection: Selection | null;

    onMount(() => {
        // Once the component is mounted, we can access the document:
        document.addEventListener(`selectionchange`, () => {
            selection = document.getSelection();
        });
    });
</script>

<h2>BUCH Überprüfung</h2>

<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
{#if selection}
    <p>Marked Text: "{selection}"</p>
{:else}
    <p>Marked Text: ""</p>
{/if}
