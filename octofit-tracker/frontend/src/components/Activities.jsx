import CollectionView from './CollectionView.jsx'

function Activities() {
  return <CollectionView component="activities" endpoint="/api/activities/" eyebrow="Recent motion" title="Activity feed" description="A living record of every rep, run, and reset" renderItem={(activity) => {
    const activityType = activity.type ?? 'Activity'
    const duration = activity.durationMinutes ?? activity.duration ?? 0
    const points = activity.points ?? 0

    return <article className="data-card" key={activity._id ?? activity.id ?? `${activityType}-${activity.completedAt}`}><div className="activity-mark">{activityType.slice(0, 1)}</div><div><h2>{activityType}</h2><p>{activity.user?.name ?? 'OctoFit member'} · {duration} min</p></div><strong>+{points}<small> pts</small></strong></article>
  }} />
}

export default Activities
