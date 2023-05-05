
import fetcher from '../lib/api'

export default function Activos() {
	return (
	  <h1 className="text-4xl font-bold text-center"> About Activos </h1>
	)
  }
  

  export async function getStaticProps() {
	const activosResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/activos`)
	console.log('activosResponse', activosResponse);
	return {
		props:{
			activos: activosResponse
		}			
	}
  }