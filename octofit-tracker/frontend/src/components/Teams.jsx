import CollectionView from './CollectionView.jsx'

function Teams() {
  return <CollectionView component="teams" endpoint="/api/teams/" eyebrow="Collective energy" title="Teams" description="Find your people, then make the finish line move." renderItem={(team) => <article className="data-card team-card" key={team._id ?? team.id ?? team.name}><span className="team-swatch" style={{ backgroundColor: team.color ?? '#c7f36b' }} /><div><h2>{team.name ?? 'Unnamed team'}</h2><p>{team.motto ?? 'Ready to move together.'}</p></div><small>Captain<br /><strong>{team.captain?.name ?? 'Unassigned'}</strong></small></article>} />
}

export default Teams
