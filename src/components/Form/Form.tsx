import { useState } from 'react'
import './Form.scss'

export const Form = (props: { createNewToDo: Function }) => {
    const [text, setText] = useState<string>('')
    const FormSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (text) {
            props.createNewToDo(text)
            setText('')
        }
    }
    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={FormSubmit}>
                <label>
                    <input
                        value={text}
                        type="text"
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button></button>
                </label>
            </form>
        </div>
    )
}