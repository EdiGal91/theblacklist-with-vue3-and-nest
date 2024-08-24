<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useRandomPeople } from '@/stores/people.ts'
import { useProfileStore } from '@/stores/profile';

const { isPending, isError, data: users } = useRandomPeople()

const router = useRouter()

const filterName = ref('')
const filterCountry = ref('')
const { setProfile } = useProfileStore()

// const filteredUsers = computed(() => {
//     return isPending ? [] : users.filter(user => {
//         const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`.toLowerCase()
//         const country = user.location.country.toLowerCase()
//         return (
//             fullName.includes(filterName.value.toLowerCase()) &&
//             country.includes(filterCountry.value.toLowerCase())
//         )
//     })
// })

// TODO: User/Profile type
const openProfile = (user: any) => {
    setProfile(user);
    // NOTE: pass user?
    router.push('/profile')
}
</script>

<template>
    <div v-if="isPending">
        Loading...
    </div>
    <div v-else-if="isError">
        Error...
    </div>
    <div v-else>
        <div>
            <input v-model="filterName" placeholder="Filter by name" />
            <input v-model="filterCountry" placeholder="Filter by country" />
        </div>
        <ul class="user-list">
            <li class="user-item" v-for="user in users" :key="user.email" @click="openProfile(user)">
                <img class="profile-picture" :src="user.picture.thumbnail" alt="Profile Picture" />
                <div class="user-info">
                    <div class="user-name">{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</div>
                    <div class="user-gender">{{ user.gender }}</div>
                    <div class="user-location">{{ user.location.country }}</div>
                    <div class="user-phone">{{ user.phone }}</div>
                    <div class="user-email">{{ user.email }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.user-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.user-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    transition: background-color 0.3s;
}

.user-item:hover {
    background-color: #f0f0f0;
}

.profile-picture {
    border-radius: 50%;
    margin-right: 15px;
}

.user-info {
    display: flex;
    flex-direction: column;
}

.user-name {
    font-weight: bold;
}

.user-gender,
.user-location,
.user-phone,
.user-email {
    font-size: 0.9em;
    color: #555;
}
</style>