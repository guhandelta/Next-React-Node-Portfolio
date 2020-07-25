import React, { Component } from 'react'
import { BaseLayout } from '@/components/layouts'
import { BasePage } from '@/components/'
import { useGetUser } from '@/actions/user'

const About = () => {
    const { data, loading } = useGetUser();
    debugger;
    return (
        <BaseLayout user={data} loading={loading} >
            <BasePage>
                <h1>About Page</h1>
            </BasePage>
        </BaseLayout>
    )
}
export default About;
