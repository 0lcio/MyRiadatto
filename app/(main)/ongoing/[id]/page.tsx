type Props = {
    params: { id: string };
  };
  
  export default function OngoingProject({ params }: Props) {
    const { id } = params;
  
    return (
      <div>
        <h1>Dettagli per il preventivo con ID: {id}</h1>
        {/* Aggiungi qui logica per recuperare e visualizzare i dettagli */}
      </div>
    );
  }
  