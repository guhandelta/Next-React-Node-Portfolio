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

export async function getServerSideProps({ query }) { //Dstructurize query from teh context object
    const json = await new PortfolioApi().getById(query.id);
    const portfolio = json.data;

    return { props: { portfolio } };
}


export default Portfolio;
