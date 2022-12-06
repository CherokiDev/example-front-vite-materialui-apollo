import { Grid } from '@mui/material'
import HeaderComponent from '../../components/header/HeaderComponent'

/**
 * El layout incluye el header y el footer
 * @param {*} param0
 * @returns
 */

const LayoutView = ({ children }) => (
	<Grid
		container
		spacing={0}
		direction='column'
		alignItems='center'
		justifyContent='center'
	>
		<HeaderComponent />
		<Grid item xs={12}>
			{children}
		</Grid>
		<Grid item xs={12}>
			{/* <Footer /> */}
		</Grid>
	</Grid>
)

export default LayoutView
