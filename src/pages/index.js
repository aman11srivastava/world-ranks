import {Layout} from "../components/Layout/Layout";
import styles from '../styles/Home.module.css'
import SearchInput from "../components/SearchInput/SearchInput";

export default function Home({countries}) {
    console.log(countries)
  return (
      <Layout>
          <div className={styles.counts}>Found {countries?.length} results</div>
          <SearchInput placeholder={"Filter by Name, Region or Subregion"}/>
      </Layout>
  )
}

export const getStaticProps = async () => {
    const res = await fetch(`http://api.countrylayer.com/v2/all?access_key=${process.env.REACT_APP_API_KEY}`)
    const countries = await res.json();
    return{
        props: {
            countries
        }
    }
}