import { useState } from 'react';

function AddTaskForm({ onAdd }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("Estudo");
  const [estado, setEstado] = useState("Por Fazer");
  const [prioridade, setPrioridade] = useState("Normal");

  function handleSubmit(e) {
    e.preventDefault();

    const novaTarefa = {
      id: Date.now(),
      titulo,
      descricao,
      categoria,
      prioridade,
      estado,
      favorita: false
    };

    onAdd(novaTarefa);

  
    setTitulo("");
    setDescricao("");
    setCategoria("Estudo");
    setEstado("Por Fazer");
    setPrioridade("Normal");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      
      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="Estudo">Estudo</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Pessoal">Pessoal</option>
      </select>

      <select
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
      >
        <option value="Por Fazer">Por Fazer</option>
        <option value="Em Progresso">Em Progresso</option>
        <option value="Concluído">Concluído</option>
      </select>

      <select
        value={prioridade}
        onChange={(e) => setPrioridade(e.target.value)}
      >
        <option value="Alta">Alta</option>
        <option value="Normal">Normal</option>
        <option value="Baixa">Baixa</option>
      </select>

      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

export default AddTaskForm;
