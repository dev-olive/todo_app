import React, { useCallback, useState } from 'react';
import {MdAdd, MdOutlineInsertChart} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    /*
        TodoInsert에서 input상태를 관리한다. App에서 todos배열에 새로운 객체를 추가한다. 
        input 태그 안에서 값을 입력할 때마다 value에 값이 들어가게 한다. (onChange)
        정의된 새로운 값을 todos배열에 추가하도록 onInsert함수를 App에서 정의한다. 
    */
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value]
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요." value={value} onChange={onChange}></input>
            <button type="submit" onSubmit={onSubmit}>
                <MdAdd />
            </button>

        </form>
    )
}
export default TodoInsert;