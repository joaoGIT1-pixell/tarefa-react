import { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(tarefa) {
    setTarefas([...tarefas, tarefa]);
  }

  function editarTarefa(id, novoTitulo, novaDescricao) {
    const tarefasEditadas = tarefas.map((t) =>
      t.id === id ? { ...t, titulo: novoTitulo, descricao: novaDescricao } : t
    );
    setTarefas(tarefasEditadas);
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <AddTaskForm onAdd={adicionarTarefa} />
      <TaskList tarefas={tarefas} onEdit={editarTarefa} />
    </div>
  );
}

export default App;
