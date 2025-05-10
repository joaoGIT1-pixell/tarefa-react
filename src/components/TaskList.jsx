import { useState } from 'react';

function TaskList({ tarefas, onEdit, onRemove }) {
  const [editandoId, setEditandoId] = useState(null);
  const [novoTitulo, setNovoTitulo] = useState("");
  const [novaDescricao, setNovaDescricao] = useState("");

  function iniciarEdicao(tarefa) {
    setEditandoId(tarefa.id);
    setNovoTitulo(tarefa.titulo);
    setNovaDescricao(tarefa.descricao);
  }

  function salvarEdicao(id) {
    onEdit(id, novoTitulo, novaDescricao);
    setEditandoId(null);
  }

  return (
    <div>
      {tarefas.map((tarefa) => (
        <div key={tarefa.id}>
          {editandoId === tarefa.id ? (
            <>
              <input
                type="text"
                value={novoTitulo}
                onChange={(e) => setNovoTitulo(e.target.value)}
              />
              <input
                type="text"
                value={novaDescricao}
                onChange={(e) => setNovaDescricao(e.target.value)}
              />
              <button onClick={() => salvarEdicao(tarefa.id)}>Salvar</button>
            </>
          ) : (
            <>
              <h3>{tarefa.titulo}</h3>
              <p>{tarefa.descricao}</p>
              <small>
                Categoria: {tarefa.categoria} | Prioridade: {tarefa.prioridade} | Estado: {tarefa.estado}
              </small>
              <br />
              <button onClick={() => iniciarEdicao(tarefa)}>Editar</button>
              <button onClick={() => onRemove(tarefa.id)}>Excluir</button>
            </>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
