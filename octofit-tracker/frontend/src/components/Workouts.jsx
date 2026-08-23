import CollectionView from './CollectionView.jsx'

function Workouts() {
  return <CollectionView component="workouts" eyebrow="Training library" title="Workouts" description="Pick a session that meets your energy where it is." renderItem={(workout) => <article className="data-card workout-card" key={workout._id}><div><span className="tag">{workout.category}</span><h2>{workout.name}</h2><p>{workout.description}</p></div><div className="workout-meta"><strong>{workout.durationMinutes}<small> min</small></strong><span>{workout.difficulty}</span></div></article>} />
}

export default Workouts
