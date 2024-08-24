<template>
    <header>
        <nav>
            <h1>
                <router-link to="/">
                    <img src="@/assets/theblacklist.png" alt="The Blacklist">
                </router-link>
            </h1>
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: #333;
    color: white;
    padding: 1rem;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h1 {
    margin: 0;
}

ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
}

li {
    margin: 0;
}

a {
    color: white;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>