'use client'

import { withAuthenticator } from "@aws-amplify/ui-react"
import Head from 'next/head'

function Dashboard() {

    return (
        <>
            <Head>
                <title>About Us - BRH Takip</title>
                <meta name="description" content="Learn more about BRH Takip and our mission." />
            </Head>
        </>
    );
}

export default withAuthenticator(Dashboard);