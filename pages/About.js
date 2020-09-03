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
                <h1 className="my-name">About Page</h1>
                <h2>Some random stuff about me</h2>
            </BasePage>
        </BaseLayout>
    )
}
export default About;
