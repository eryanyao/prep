<script>
    import {MaterialApp} from 'svelte-materialify'

    export let theme = "light";

    //TODO Implement
    const toggleTheme = () => {
        if (theme === "light") theme = 'dark'
        else theme = 'light'
    }
</script>

<MaterialApp {theme}>
    <slot></slot>
</MaterialApp>
