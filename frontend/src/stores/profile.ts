import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useMutation, useQuery } from '@tanstack/vue-query'
import axios from 'axios'

export const useProfileStore = defineStore('profile', () => {
    const profile = ref(null)

    // TODO: User/Profile type
    const setProfile = (newProfile: any) => {
        profile.value = newProfile
    }
    return { profile, setProfile }
})

export const useProfileHistory = (email: string) => {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['profile', email],
        queryFn: () => checkProfileExists(email),
    })
    return { isPending, isError, isExists: data, error }
}

async function checkProfileExists(email: string) {
    const url = new URL('api/v1/users', 'http://localhost:3000')
    url.searchParams.append('email', email)
    try {
        await axios.get(url.toString());
        return true;
    } catch (error) {
        return false;
    }
}
