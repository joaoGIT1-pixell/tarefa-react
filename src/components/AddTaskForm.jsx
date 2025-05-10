import { useState } from 'react';

function AddTaskForm({ onAdd }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("Estudo");

  function handleSubmit(e) {
    e.preventDefault();

    const novaTarefa = {
      id: Date.now(),
      titulo,
      descricao,
      categoria,
      prioridade: "Normal",
      estado: "Por Fazer",
      favorita: false
    };

    onAdd(novaTarefa);

    setTitulo("");
    setDescricao("");
    setCategoria("Estudo");
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
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

export default AddTaskForm;
