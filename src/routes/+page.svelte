<script lang="ts">
    import { page } from "$app/stores";
</script>

{#if $page.data.user}
    <h2>Tutorial</h2>

    <ol>
        <li>Lesen</li>
        <li>Zusammenfassen</li>
        <li>Abgeben</li>
        <li>Überprüfen</li>
        <li>Wiederholen</li>
    </ol>
{:else}
    <p>Diese Platform soll uns Jugendliche dazu ermutigen die Bibel zu lesen und zu verstehen</p>
    <p>Um an dem Projekt teilzunehmen sprich mit einem Jugendleiter</p>
    <p>Die Anmeldephase geht bis zum 01.01.2024</p>
    <a href="/login">Login</a>
{/if}

<style>
</style>
