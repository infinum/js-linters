# no-hooks-in-pages-folder

Disallow hooks in Next.js pages folders

## Examples

👎 Examples of **incorrect** code for this rule

```tsx
// pages/index.tsx
import { useQuery } from 'react-query';

export default function Home() {
	const { data } = useQuery('todos', () => fetch('/api/todos'));

	return (
		<div>
			<h1>My Todos</h1>
			<ul>
				{data.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	);
}
```

👍 Examples of **correct** code for this rule

<!-- prettier-ignore -->
```tsx
// components/features/todos.ts
export function Todos() {
	const { data } = useQuery('todos', () => fetch('/api/todos'));
	
	if (!data) {
	  return <div>Loading...</div>;
	}

	return (
			<ul>
				{data.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
	);
}

// pages/index.tsx
import { Todos } from 'components/features/todos';

export default function Home() {
	return (
		<div>
			<h1>My Todos</h1>
			
			<Todos />
		</div>
	);
}
```
