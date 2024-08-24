<template>
    <div v-if="profile" class="profile-view">
        <img :src="profile.picture.large" alt="Profile Image" class="profile-image" />
        <form @submit.prevent>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" :readonly="!isEditable" />
            </div>
            <div class="form-group">
                <label for="gender">Gender:</label>
                <input type="text" id="gender" v-model="profile.gender" readonly />
            </div>
            <div class="form-group">
                <label for="age">Age:</label>
                <input type="text" id="age" v-model="profile.age" readonly />
            </div>
            <div class="form-group">
                <label for="yearOfBirth">Year of Birth:</label>
                <input type="text" id="yearOfBirth" v-model="profile.yearOfBirth" readonly />
            </div>
            <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" id="street" v-model="profile.location.street.name" readonly />
                <input type="text" id="city" v-model="profile.location.city" readonly />
                <input type="text" id="state" v-model="profile.location.state" readonly />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="profile.email" readonly />
            </div>
            <div class="form-group">
                <label for="phone">Phone:</label>
                <input type="text" id="phone" v-model="profile.phone" readonly />
            </div>
            <div class="button-group">
                <button @click="saveProfile" v-if="!isSaved">Save</button>
                <button @click="deleteProfile" v-if="isSaved">Delete</button>
                <button @click="updateProfile">Update</button>
                <button @click="goBack">Back</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useProfileStore, useProfileHistory } from '@/stores/profile';

const profileName = computed(() => profile.name.title + ' ' + profile.name.first + ' ' + profile.name.last);
const name = ref(profileName);

const { profile } = useProfileStore()
useProfileHistory(profile.email);

const router = useRouter();
const route = useRoute();

const isEditable = ref(false);
const isSaved = ref(false);

const saveProfile = () => {
};

const deleteProfile = () => {
};

const updateProfile = () => {
};

const goBack = () => {
    router.go(-1);
};

onMounted(() => {
    if (!profile) {
        router.push('/');
    }
});

</script>

<style scoped>
.profile-view {
    max-width: 600px;
    margin: 0 auto;
}

.profile-image {
    width: 100%;
    height: auto;
}

.form-group {
    margin-bottom: 1em;
}

.button-group {
    display: flex;
    justify-content: space-between;
}
</style>