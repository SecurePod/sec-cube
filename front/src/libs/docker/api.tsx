
export type ContainerIds = {
  id: string
}[]

export type ContainerInformation = {
  id: string
  containerIp: string
  hostPort: number[]
  containerPorts: number[]
  labels: string[]
}[]

/**
 * コンテナを起動する
 * @param {string} tag
 * @returns {Promise<ContainerIds{string, string}>}
 */
export async function getConStart(tag: string): Promise<ContainerIds> {
  const res = await fetch(`http://133.242.19.28:8081/api/v1/docker/create/${tag}`, {
    method: 'POST',
  })
  const data: ContainerIds = await res.json()
  return data
}

/**
 * コンテナの情報を取得する
 * @param {string[]} id
 * @returns {Promise<ContainerInformation>}
 */
export async function getConInfo(id: string[]) {
  const jsonData: ContainerIds = id.map((id) => {
    return {
      id: id,
    }
  })
  console.log(jsonData)

  const res = await fetch(`http://133.242.19.28:8081/api/v1/docker/inspect`, {
    method: 'POST',
    body: JSON.stringify(jsonData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data: ContainerInformation = await res.json()
  console.log(data)
  return data
}

// export async function Fet(tag: string) {
//   const router = useRouter()
//   try {
//     const data = await fetchData(tag)
//     router.push(`/${tag}/${data.id}`)
//   } catch (error) {
//     console.error('Error fetching data:', error) // エラー時はポップアップを表示したい
//   }
// }
