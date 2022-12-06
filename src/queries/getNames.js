import { gql } from '@apollo/client'

export const GET_NAMES = gql`
	query Query {
		users {
			nombre
		}
	}
`
