import Layout from "../../layout/layout"
import HomeInfocentre from "./home.Infocentre/HomeInfocentre"
import HomeArgument from "./home.arguments/HomeArguments"
import HomeBlocks from "./home.blocks/HomeBlocks"
import HomeHeader from "./home.header/HomeHeader"
import HomeMeasurement from "./home.measurement/HomeMeasurement"
import HomeProduction from "./home.production/HomeProduction"
import HomeProducts from "./home.products/HomeProducts"
import HomeScales from "./home.scales/HomeScales"
import HomeSensors from "./home.sensors/HomeSensors"


const Home = () => {
    return(
        <Layout>
            <HomeHeader />
            <HomeMeasurement />
            <HomeSensors />
            <HomeScales />
            <HomeBlocks />
            <HomeProducts />
            <HomeArgument />
            <HomeProduction />
            <HomeInfocentre />
        </Layout>
    )
}

export default Home