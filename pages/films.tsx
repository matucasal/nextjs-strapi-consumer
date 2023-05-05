
import fetcher from '../lib/api'

export default function Films() {
	return (
	  <h1 className="text-4xl font-bold text-center"> About Films </h1>
	)
  }
  

  export async function getStaticProps() {
	const filmsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/activos`)
	console.log('filmsResponse', filmsResponse);
	return {
		props:{
			films: filmsResponse
		}			
	}
  }