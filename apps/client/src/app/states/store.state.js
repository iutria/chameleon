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

export const useImage = create(
    (set) => (
        {
            image: null,
            isLoadingImage: false,
            setImage: (data) => (set((state) => ({ image: data }))),
            setLoadingImage: (loading) => (set((state) => ({ isLoadingImage: loading })))
        }
    )
)

export const useForm = create(
    (set) => (
        {
            formValues: {type: '', search: ''},
            setFormData: (data) => (set((state) => ({formValues: data})))
        }
    )
)