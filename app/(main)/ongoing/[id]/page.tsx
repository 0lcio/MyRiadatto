type Props = {
  params: Promise<{ id: string }>;
};

export default async function OngoingProject({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <h1>Dettagli per il preventivo con ID: {id}</h1>
      {/* Aggiungi qui logica per recuperare e visualizzare i dettagli */}
    </div>
  );
}