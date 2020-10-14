import React from 'react'
import Layout from '../../components/layout/layout';
import PageHeader from '../../components/pageHeader/pageHeader';
import PanelComponent from '../../components/_panel/panel';

// This is Panel Page
const Panel = () => {
    return (
        <Layout pageTitle='Panel'>
            <PageHeader title='Panel' />
            <PanelComponent />
        </Layout>
    )
}
export default Panel
