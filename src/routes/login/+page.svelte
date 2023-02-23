<script lang="ts">
  import type { ActionData } from './$types'

  export let form: ActionData
</script>

<div>
    <h2>Login</h2>

    <form action="?/login" method="POST">
      <div>
        <label for="username">Username</label>
        <input id="username" name="username" type="text" required />
      </div>

      <div>
        <label for="password">Password</label>
        <input id="password" name="password" type="password" required />
      </div>

      {#if form?.invalid}
        <p class="error">Username and password is required.</p>
      {/if}

      {#if form?.credentials}
        <p class="error">You have entered the wrong credentials.</p>
      {/if}

      <button type="submit">Log in</button>
    </form>
</div>

<style>
    div {
        background: lightgray;
        width: 50%;
        margin: auto;
        text-align: center;
    }
</style>
