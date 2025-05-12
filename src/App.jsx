import { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [mostrarFavoritas, setMostrarFavoritas] = useState(false);
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");
  const [filtroEstado, setFiltroEstado] = useState("Todos");

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

  
  const tarefasFiltradas = tarefas.filter((t) => {
    const passaFavorita = mostrarFavoritas ? t.favorita : true;
    const passaCategoria = filtroCategoria === "Todas" || t.categoria === filtroCategoria;
    const passaEstado = filtroEstado === "Todos" || t.estado === filtroEstado;
    return passaFavorita && passaCategoria && passaEstado;
  });

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <button onClick={() => setMostrarFavoritas(!mostrarFavoritas)}>
        {mostrarFavoritas ? "Mostrar Todas" : "Mostrar Favoritas"}
      </button>

      <div style={{ margin: '1rem 0' }}>
        <label>Filtrar por categoria: </label>
        <select value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}>
          <option value="Todas">Todas</option>
          <option value="Estudo">Estudo</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
        </select>

        <label style={{ marginLeft: '1rem' }}>Filtrar por estado: </label>
        <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)}>
          <option value="Todos">Todos</option>
          <option value="Por Fazer">Por Fazer</option>
          <option value="Em Progresso">Em Progresso</option>
          <option value="Concluído">Concluído</option>
        </select>
      </div>

      <AddTaskForm onAdd={adicionarTarefa} />
      <TaskList
        tarefas={tarefasFiltradas}
        onEdit={editarTarefa}
        onRemove={removerTarefa}
        onToggleFavorita={alternarFavorita}
      />
    </div>
  );
}

export default App;
