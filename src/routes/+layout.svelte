<script lang="ts">
    import { page } from "$app/stores";
</script>


<h1>Jugend Lage Bibel Platform</h1>

{#if $page.data.user}
    <nav class="header">
        <nav class="platform">
            <a href="/">Übersicht</a>
            <a href="/summary">Zusammenfassungen</a>
            <a href="/review">Überprüfung</a>
            {#if $page.data.user.isAdmin }
                <a href="/admin">Admin Home</a>
                <a href="/admin/create_user">User Creation</a>
            {/if}
        </nav>
        <span class=logout>
            Du bist eingeloggt als {$page.data.user.name}
            <form action="/logout" method="POST">
                <button type=submit>logout</button>
            </form>
        </span>
    </nav>
{:else}
    Du bist nicht angemeldet
{/if}

<div class="content">
    <slot />
</div>

<style>
    :global(body) {
        margin: 0;
    }

    h1 {
        text-align: center;
    }

    .header {
        padding-left: 1em;
        padding-right: 1em;
        background: lightgray;
        display: grid;
        grid-template-columns: auto auto;
    }

    .content {
        margin: 8px;
    }

    .logout {
        justify-self: right;
        text-align: right;
    }
</style>
