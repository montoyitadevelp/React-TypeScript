import { useForm } from "./hooks/useHookForm"

export const Forms2 = () => {
    const { form, handleChange } =  useForm({
        uid: '1285',
        city: 'Ottama'
    })

    const { uid, city } = form;


  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label">
                UID:
            </label>
            <input type="text" className="form-control" name="uid"
            value={ uid } onChange={ handleChange}/>
        </div>

        <div className="mb-3">
            <label className="form-label">
                City:
            </label>
            <input type="text" className="form-control" name="city"
            value={ city } onChange={ handleChange}/>
        </div>

        <pre> { JSON.stringify(form)}  </pre>

    </form>
  )
}

