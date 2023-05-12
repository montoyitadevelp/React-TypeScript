import { ChangeEvent, useState } from "react"
import { useForm } from "./hooks/useHookForm"


interface FormData {
    email: string;
    name: string;
    age: number
}


export const Forms = () => {

const { name, email, age, handleChange, form } = useForm<FormData>({
    email: 'Simon@gmail.com',
    name: 'Simon Montoya',
    age: 15
});

/* const { email, name, age } = form; */

/*     const [form, setform] = useState({
        email: '',
        name: ''
    });

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = target;

        setform({
            ...form,
            [ name ]: value
        });
    } */


  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label">
                Email:
            </label>
            <input type="email" className="form-control" name="email" onChange={ handleChange}
            value={ email } />
        </div>

        <div className="mb-3">
            <label className="form-label">
                Name:
            </label>
            <input type="text" className="form-control" name="name"
            value={ name } onChange={ handleChange}/>
        </div>

        <div className="mb-3">
            <label className="form-label">
                Age:
            </label>
            <input type="number"className="form-control" name="age"
            value={ age } onChange={ handleChange}/>
        </div>


        <pre> { JSON.stringify(form)}  </pre>

    </form>
  )
}

