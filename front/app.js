import PropTypes from 'prop-types';
import 'antd/dist/antd.css'
import Head from 'next/head';

import wrapper from '../store/configureStore';

const Nodebird = ({Component}) => {
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <title>융다모</title>
        </Head>
        <div>융보공 다 모여~!!!</div>
        <Component />
        </>
    )

};

Nodebird.propTypes = {
    Component: PropTypes.elementType.isRequired, 
}

export default wrapper.withRedux(Nodebird);
