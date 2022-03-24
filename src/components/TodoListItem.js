import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    /*
        className을 이용하여 div를 제어한다. 
        checkbox 클래스의 값을 props로 넘어오는 checked로 결정하고 있는데,
        이 때 checked의 값이 True/False에 따라 적절한 icon을 보여준다. 
        text역시 마찬가지로 props로 넘어오는 데이터이기 때문에 그대로 {text}로 출력한다. 
    */
    const{id, text, checked} = todo;
    

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={()=>onToggle(id)}>
                {checked? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;