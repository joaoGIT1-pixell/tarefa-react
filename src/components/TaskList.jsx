const tarefasMock = [
    {
      id: 1,
      titulo: "Estudar React",
      descricao: "Revisar props e hooks",
      categoria: "Estudo",
      prioridade: "Alta",
      estado: "Por Fazer"
    },
    {
      id: 2,
      titulo: "Ir ao mercado",
      descricao: "Comprar leite e pão",
      categoria: "Pessoal",
      prioridade: "Normal",
      estado: "Concluído"
    }
  ];
  
  function TaskList() {
    return (
      <div>
        {tarefasMock.map((tarefa) => (
          <div key={tarefa.id}>
            <h3>{tarefa.titulo}</h3>
            <p>{tarefa.descricao}</p>
            <small>
              Categoria: {tarefa.categoria} | Prioridade: {tarefa.prioridade} | Estado: {tarefa.estado}
            </small>
            <hr />
          </div>
        ))}
      </div>
    );
  }
  
  export default TaskList;
  