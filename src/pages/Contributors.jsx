import { useQuery } from '@tanstack/react-query'

const fetchContributors = async () => {
  const res = await fetch("https://api.github.com/repos/TanStack/query/contributors")

  if (!res.ok) throw new Error("Response not OK!")

  return res.json()
}

function Contributors() {

  const { data, isPending } = useQuery({
    queryKey: ['contributorsQuery'],
    queryFn: fetchContributors
  })

  return (
    <>
      <h1>Contributors</h1>

      <div className="card" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
        {isPending ? 'Loading...' : data.map(_ => (<div key={_.id}>
          <img height={150} src={_.avatar_url} />
          <p><a href={_.url}>{_.login}</a></p>
        </div>))}
      </div>
    </>
  )
}

export default Contributors
