import { Switch, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NewContent } from '../pages/NewContent'
import { EditContent } from '../pages/EditContent'

export function Routes() {
	return (
		<Switch>
			<Route
				path="/"
				exact
				component={Home}
			/>
			<Route
				path="/new"
				component={NewContent}
			/>
			<Route
				path="/edit/:id"
				component={EditContent}
			/>
		</Switch>
	)
}
