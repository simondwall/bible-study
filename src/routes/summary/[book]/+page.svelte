<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h2>{data.book} Zusammenfassung</h2>

<form action="?/save" method="POST">
    <textarea name="text" required>{data.text}</textarea>
    <button type="submit">Speichern</button>
</form>

<style>
    textarea {
        resize: vertical;
        width: 90%;
        font-family: serif;
    }
</style>
