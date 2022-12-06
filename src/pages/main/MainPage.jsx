import { useQuery } from '@apollo/client'
import {
	Table,
	TableBody,
	TableCell,
	TableRow,
	Typography,
} from '@mui/material'
import { GET_NAMES } from '../../queries/getNames'
import LayoutView from '../../views/layout/LayoutView'

const MainPage = () => {
	const { data, loading, error } = useQuery(GET_NAMES)

	console.log('data', data)

	return (
		<LayoutView>
			<Typography variant='h4'>Main Page</Typography>
			{loading && <Typography>Loading...</Typography>}
			{error && <Typography>Error: {error.message}</Typography>}
			{data && (
				<Table>
					<TableBody>
						{data.users.map((user, i) => (
							<TableRow key={`${user.nombre}-${i}`}>
								<TableCell>{user.nombre}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			)}
		</LayoutView>
	)
}

export default MainPage
