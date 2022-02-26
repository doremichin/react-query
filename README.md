# React Query 
### ..그리고 SWR
##

React Query 는 서버상태를 관리하는 라이브러리.

React Query 를 사용하면 상태관리 라이브러리에서 요구하는 보일러 플레이트 코드를 제거할 수 있다.

```javascript
import { useQuery } from 'react-query'

function Query () {
    const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
        fetch(
            'https://api도메인'
        ).then((res) => res.json())
    );

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div>{JSON.stringify(data)}<div>
            );
}
```
React Query 는 서버데이터를 멀리 떨어진 컴포넌트 트리에 전달할 필요 없이 1,2단계 하위 컴포넌트에 전달하는 거라면 더욱 편리하다.

React Query 는 useQuery 훅의 파라미터를 통해 API 데이터의 만료 시간, 리프레쉬 간격, 데이터를 캐시에서 유지할 기간, 브라우저 포커싱시 데이터 리프레쉬 여부, 성공, 에러 콜백등 다양한 기능을 제어할 수 있다.


###React Query의 라이프 사이클

- fetching - 요청 중인 쿼리
- fresh - 만료되지 않은 쿼리. 컴포넌트가 마운트, 업데이트 되어도 데이터를 다시 요청하지 않는다.
- stale - 만료된 쿼리. 컴포넌트가 마운트, 업데이트 되면 데이터를 다시 요청한다.
- inactive - 사용하지 않는 쿼리. 일정 시간이 지나면 가비지 컬렉터가 캐시에서 제거한다.
- delete - 가비지 컬렉터에 의해 캐시에서 제거된 쿼리

### important defaults 

React Query API의 기본이 되는 설정

- useQuery,useInfiniteQuery 로 가져온 데이터는 기본적으로 stale 상태가 된다.
  - stale 옵션으로 데이터가 stale 상태로 바뀌는데 걸리는 시간을 늘릴 수 있다.

- stale 쿼리는 다음 경우에 백그라운드에서 다시 가져온다.
  - 새로운 쿼리 인스턴스가 마운트 되었을 때
  - 브라우저 윈도우가 다시 포커스 되었을 때
  - 네트워크가 다시 연결 되었을 때
  - refetchInterval 옵션이 있을 때

- 활성화된 useQuery, useInfiniteQuery 인스턴스가 없는 쿼리 결과는 inactive 라벨이 붙으며 다음에 사용될 때까지 남아 있는다.
  - inactive 쿼리는 5분 후에 메모리에서 해제된다.

- 백그라운드에서 3회 이상 실패한 쿼리는 에러 처리된다.
  - retry 옵션으로 쿼리 함수에서 오류 발생시 재시도할 횟수, retryDelay 옵션으로 재시도 대기 시간을 설정

- 쿼리 결과는 memorization 을 위해 structural sharing을 사용하며 데이터 reference는 변경되지 않는다.


### QueryClientProvider 설정

React Query는 캐리를 관리하기 위해 QueryClient 인스턴스를 사용한다.
```javascript
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools' // devtools

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <Page/>
          <ReactQueryDevtools initialIsOpen={false} /> //devtools
      </QueryClientProvider>
  )
}
```

### useQuery 

```javascript
const { data, isLoading } = useQuery(queryKey, queryFunction, options)
```

queryFucntion에서는 프로미스를 리턴하는 함수를 전달한다.
ex) axios.get(...) , fetch(...) 등을 리턴하는 함수

queryKey에는 문자열과 배열을 넣을 수 있다. 쿼리 키를 유연하게 설정할 수 있고 캐싱 처리를 쉽게 만들어준다.
```javascript
// 다른 키로 취급한다. 
useQuery(['data', 1], ...)
useQuery(['data', 2], ...)


// 객체 필드의 값이 달라도 다른 키로 취급한다
useQuery(['data', { isView: true }], ...)
useQuery(['data', { isview: false }], ...)

// 객체 필드의 순서가 달라도 내용이 같으면 같은 키로 취급한다
useQuery(['data', { isView: true, status: 'done' }], ...)
useQuery(['data', { status: 'done', isView: true }], ...)

```
- 리턴 데이터
  - data - 쿼리 함수가 리턴한 프로미스에서 resolve 된 데이터
  - isLoading - 저장된 캐시가 없는 상태에서 데이터를 요청중일때 true
  - isFetching - 캐시가 있거나 없거나 데이터가 요청중일때 true
- 옵션
  - cacheTime - unused 또는 inactive 캐시 데이터가 메모리에서 유지될 시간. 기본 값은 5분. 시간이 초과하면 메모리에서 제거된다.
    - Infinity 로 설정하면 쿼리데이터는 캐시에서 제거 되지 않는다.
  - staleTime - 쿼리 데이터가 fresh에서 stale로 전환 되는데 걸리는 시간. 기본 값은 0.
    - Infinity로 설정하면 쿼리 데이터는 직접 캐시를 무효화 할때까지 fresh 상태로 유지된다.
    - 캐시는 메모리에서 관리되므로 브라우저 새로고침 후에는 다시 가져온다.
  - enabled - false 값이 전달되면 쿼리가 비활성화 된다.
    - 데이터 요청에 사용할 파라미터가 유효한 값을 때만 true를 할당하는 식으로 활용 가능.
  - onSuccess - 쿼리함수가 성공적으로 데이터를 가져왔을 때 호출되는 함수.
  - onError - 쿼리 함수에서 오류가 발생했을 때
  - onSettled - 쿼리 함수의 성공, 실패 두 경우 모두 실행된다.
  - keepPreviousData - 쿼리 키가 변경되어서 새로운 데이터를 요청하는 동안에도 마지막 data값을 유지한다.
    - 페이지네이션을 구현할 때 유용하다. 캐시되지 않은 페이지를 가져올 때 화면에서 목록이 깜빡이는 현상을 방지할 수 있음.
    - isPreviousData 값으로 현재 쿼리키에 해당하는 값인지 확인할 수 있다.
  - initialData - 캐시된 데이터가 없을 때 표시할 초기값. placeholder로 전달한 데이터와 달리 캐싱이 된다.
  - refetchOnWindowFocus - 윈도우가 다시 포커스 되었을 때 데이터를 호출할 것인지 여부. 기본값은 true

### useMutation

서버 데이터 업데이트를 위해서는 useMutation 훅을 사용하면 된다.

```javascript
const mutation = useMutation(newTodo => axios.post('/todos', newTodo))

const handleSubmit = useCallback(
  (newTodo) => {
    mutation.mutate(newTodo)
  },
  [mutation],
)
```
```javascript
const mutation = useMutation(newTodo => axios.post('/todos', newTodo))

const handleSubmit = useCallback(
  async (newTodo) => {
    await mutation.mutateAsync(newTodo)
		setAnotherState() 
		dispatch(createAnotherAction())
  },
  [mutation],
)
```

### 쿼리 무효화 (Invalidation)

쿼리 데이터가 stale 상태로 바뀌길 기다릴 수 없을 때, 댓글을 작성한 후 서버에서 댓글 목록을 다시 가져올 때 지정한 staleTime이 지나기전에 쿼리를 무효화 해서 데이터를 새로 가져오도록 해야한다.

```javascript
const queryClient = useQueryClient();

// 캐시에 있는 모든 쿼리를 무효화한다.
queryClient.invalidateQueries()

// todo로 시작하는 모든 쿼리를 무효화한다. ex) ['todos', 1], ['todos', 2], ...
queryClient.invalidateQueries('todos')

// ['todos', 1] 키를 가진 쿼리를 무효화한다.
queryClient.invalidateQueries(['todos', 1])
```

predicate 옵션을 사용해서 무효화할 쿼리를 더 자세하게 설정할 수 있음.
```javascript
// 쿼리 키 배열의 두번째 객체의 version 필드의 값이 10 이상인 쿼리만 무효화한다.
queryClient.invalidateQueries({
  predicate: query =>
	   query.queryKey[0] === 'todos' && query.queryKey[1]?.version >= 10,
})

// 위의 코드로 무효화된다.
const todoListQuery = useQuery(['todos', { version: 20 }], fetchTodoList)

// 위의 코드로 무효화되지 않는다.
const todoListQuery = useQuery(['todos', { version: 5 }], fetchTodoList)
```
