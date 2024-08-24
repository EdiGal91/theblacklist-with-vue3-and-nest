import { useQuery } from '@tanstack/vue-query'

export const useRandomPeople = () => {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['random-people'],
        queryFn: getRandomPeople,
        staleTime: 1000 * 60 * 5,
    })
    return { isPending, isError, data, error }
}

async function getRandomPeople() {
    const response = await fetch('https://randomuser.me/api/?results=10')
    const data = await response.json()
    return data.results
}
