import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/layout';
import Loading from '../../components/loading/loading';
import PageHeader from '../../components/pageHeader/pageHeader';
import PanelComponent from '../../components/_panel/panel';

// This is Panel Page
const Panel = () => {

    // set loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    if (loading) { return <Loading title='Panel' /> }

    else {
        return (
            <Layout pageTitle='Panel'>
                <PageHeader title='Panel' />
                <PanelComponent />
            </Layout>
        )
    }
}

export default Panel
