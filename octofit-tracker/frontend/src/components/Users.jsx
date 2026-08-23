import CollectionView from './CollectionView.jsx'

function Users() {
  return <CollectionView component="users" endpoint="/api/users/" eyebrow="The roster" title="Members" description="The people turning small habits into serious momentum." renderItem={(user) => <article className="data-card" key={user._id ?? user.id ?? user.email}><div className="avatar">{user.avatar ?? user.name?.slice(0, 2).toUpperCase() ?? 'OF'}</div><div><h2>{user.name ?? 'Unnamed member'}</h2><p>{user.email ?? 'No email provided'}</p></div><strong>{user.totalPoints ?? 0}<small> pts</small></strong></article>} />
}

export default Users
