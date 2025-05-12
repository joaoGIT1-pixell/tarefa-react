import { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [mostrarFavoritas, setMostrarFavoritas] = useState(false);

  function adicionarTarefa(tarefa) {
    setTarefas([...tarefas, tarefa]);
  }

  function editarTarefa(id, novoTitulo, novaDescricao) {
    const tarefasEditadas = tarefas.map((t) =>
      t.id === id ? { ...t, titulo: novoTitulo, descricao: novaDescricao } : t
    );
    setTarefas(tarefasEditadas);
  }

  function removerTarefa(id) {
    const tarefasFiltradas = tarefas.filter((t) => t.id !== id);
    setTarefas(tarefasFiltradas);
  }

  function alternarFavorita(id) {
    const tarefasAtualizadas = tarefas.map((t) =>
      t.id === id ? { ...t, favorita: !t.favorita } : t
    );
    setTarefas(tarefasAtualizadas);
  }

  const tarefasExibidas = mostrarFavoritas
    ? tarefas.filter((t) => t.favorita)
    : tarefas;

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <button onClick={() => setMostrarFavoritas(!mostrarFavoritas)}>
        {mostrarFavoritas ? "Mostrar Todas" : "Mostrar Favoritas"}
      </button>

      <AddTaskForm onAdd={adicionarTarefa} />
      <TaskList
        tarefas={tarefasExibidas}
        onEdit={editarTarefa}
        onRemove={removerTarefa}
        onToggleFavorita={alternarFavorita}
      />
    </div>
  );
}

export default App;
