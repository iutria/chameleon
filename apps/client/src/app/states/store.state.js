import { create } from 'zustand'

export const useListImage = create(
    (set) => (
        {
            list: [],
            isLoading: false,
            setList: (data) => (set((state) => ({ list: data }))),
            setLoading: (loading) => (set((state) => ({ isLoading: loading })))
        }
    )
)

export const useForm = create(
    (set) => (
        {
            type: '',
            search: '',
            setFormData: (data) => (set((state) => (data)))
        }
    )
)