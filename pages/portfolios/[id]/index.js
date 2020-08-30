import { BaseLayout } from '@/components/layouts'
import { BasePage } from '@/components/'
import { useGetUser } from '@/actions/user'
import PortfolioApi from '@/lib/api/portfolios'


const Portfolio = ({ portfolio }) => {
    const { data: userData, loading: userLoading } = useGetUser();
    // router.query.id will be inititally undefined, which will cause an error, but useSWR will try again and get the page after the-
    //- id property is populated || conditional fetching is done here to not to make a fetch request where id param is undefined
    return (
        <BaseLayout user={userData} loading={userLoading} >
            <BasePage header="Portfolio Detail">
                {
                    JSON.stringify(portfolio)
                }
            </BasePage>
        </BaseLayout>
    )
}

// This fn() runs everytime a portfolio link is clicked, so this is best suited for cases where the data changes frequently
// export async function getServerSideProps({ query }) { //Destructurize query from the context object
//     const json = await new PortfolioApi().getById(query.id);
//     const portfolio = json.data;

//     return { props: { portfolio } };
// }


// This fn() is executed in the build time
export async function getStaticPaths() {
    const json = await new PortfolioApi().getAll();
    const portfolios = json.data;

    // Get the paths, based  on portfolio._id to pre-render during the build time
    const paths = portfolios.map(portfolio => {
        return {
            params: { id: portfolio._id }
        }
    })
    return { paths, fallback: false }; // fallback: false => display 404, if the page is not found
}

// Unlike getServerSideProps(), this function is called during the build time and the portfolio pages are generated as a static pages-
//- during the build time, when this fn() is called. This improved performance and is best suited for cases where the data does not-
//- change very often, as the entire application needs to be rebuilt everytime the page data changes
export async function getStaticProps({ params }) { // params from getStaticPaths
    const json = await new PortfolioApi().getById(params.id);
    const portfolio = json.data; //Will get the portfolios for this page, as props
    return {
        props: { portfolio }
    }
}

export default Portfolio;
