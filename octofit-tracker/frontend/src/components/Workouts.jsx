import CollectionView from './CollectionView.jsx'

function Workouts() {
  return <CollectionView component="workouts" eyebrow="Training library" title="Workouts" description="Pick a session that meets your energy where it is." renderItem={(workout) => <article className="data-card workout-card" key={workout._id ?? workout.id ?? workout.name}><div><span className="tag">{workout.category ?? 'Training'}</span><h2>{workout.name ?? 'Untitled workout'}</h2><p>{workout.description ?? 'A focused session for your next win.'}</p></div><div className="workout-meta"><strong>{workout.durationMinutes ?? workout.duration ?? 0}<small> min</small></strong><span>{workout.difficulty ?? 'Any level'}</span></div></article>} />
}

export default Workouts
