<script setup lang="ts">
</script>

<template>
    <nav class="top-nav">
        <ul>
            <li class="logo">
                <NuxtLink to="/">
                    <img src="/logo.svg" alt="MJDev">
                </NuxtLink>
            </li>
            <NavigationLinks />
        </ul>
    </nav>
</template>

<style lang="scss">
.top-nav {
    z-index: 80;
    position: fixed;
    background-color: $glass-white;
    backdrop-filter: $default-blur;
    width: calc(100% - 20px);
    margin-left: calc(20px);

    .logo {
        margin-right: auto;

        img {
            height: 30px;
        }
    }

    ul {
        max-width: 1000px;
        padding: 0;
        margin: 0 auto;
        display: flex;
        align-items: center;
        padding: 0 20px;
        gap: 10px;
    }
}
</style>