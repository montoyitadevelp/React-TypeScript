import { ChangeEvent, useState } from 'react'


export const useForm = <T extends Object>( initState: T) => { // La T significa que es de tipo generico
    const [form, setform] = useState(initState);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = target;

        setform({
            ...form,
            [ name ]: value
        });
    }

    return {
        form,
        handleChange,
        ...form
    }
}