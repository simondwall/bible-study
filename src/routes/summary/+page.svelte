<script lang="ts">
    let books = [
        {path: "genisis", name: "1. Mose"},
        {path: "exodus", name: "2. Mose"},
        {path: "leviticus", name: "3. Mose"},
        {path: "numbers", name: "4. Mose"},
        {path: "deuteronomy", name: "5. Mose"},
        {path: "joshua", name: "Josua"},
        {path: "judges", name: "Richter"},
    ]
</script>

<h2>Zusammenfassungen</h2>

<table>
    <tr>
        <th>Buch</th>
        <th>Länge</th>
        <th>Status</th>
        <th>Abgabedatum</th>
    </tr>
    {#each books as book}
        <tr>
            <td>
                <a href="/summary/{book.path}">{book.name}</a>
            </td>
            <td>0 / 1500</td>
            <td>Offen</td>
            <td>01.01.2024</td>
        </tr>
    {/each}
</table>
