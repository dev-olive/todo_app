import React, { useCallback, useState, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

function App() {
  /*
    useState를 통해 todos의 상태를 관리한다.
    todos를 TodoList의 prop으로 전달한다.
    todos의 배열 안에 들어있는 객체에는 id, text, checked여부가 들어있다.
    TodoList에서 이 객체를 받고 TodoListItem에서 이를 렌더링하도록 한다.

    nextId를 4로 초기화 시키고 새로 등록된 할 일 객체의 id로 활용한다.
    submit버튼을 눌렀을 때 onInsert()함수를 호출한다.
    기존 객체의 key가 모두 포함되어 있는 데이터 형태를 띈다.
    id에는 nextId, text에는 전달된 text값을, checked에는 default값인 false를 넣어준다.
    만들어진 onInsert()함수를 항목 추가버튼이 있는 컴포넌트인 TodoInsert의 props로 전달한다. 
  */

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '첫번째 할 일',
      checked: false
    },
    {
      id: 2,
      text: '두번째 할 일',
      checked: true
    },
    {
      id: 3,
      text: '세번째 할 일',
      checked: true
    }
  ]);

  const nextId = useRef(4);
  
  const onInsert = useCallback(
    (text) => {
      const todo ={
        id:nextId.current,
        text,
        checked: false
      };
      setTodos(todos.concat(todo)); //todos배열에 넣는다. 
      nextId.current += 1;
    }
  )

  const onRemove = useCallback( (id) => {
    //todos를 수정하는 과정이니까 setTodos를 호출한다.
    setTodos(todos.filter((todo)=> todo.id!==id));
    },
    [todos]
    )

  const onToggle = useCallback(
    (id)=>{
      setTodos(todos.map((todo)=> (todo.id===id?{ ...todo, checked: !todo.checked } : todo)));   
    }, [todos]
  )
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;
