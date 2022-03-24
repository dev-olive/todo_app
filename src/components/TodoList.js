import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove, onToggle}) => {
    /*
        props로 받아온 todos를 maps를 통하여 TodoListItem으로 이루어진 배열에 넣어준다. 
        map을 이용하여 컴포넌트로 변환할 때는 key props를 전달해주어야 하는데, 각 todo의 id를 전달해준다. 
        그리고 TodoItem에서 다룰 것은 통으로 넘긴다.
    */
    return (
        <div className="TodoList">
            {todos.map((todo)=> (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default TodoList;
