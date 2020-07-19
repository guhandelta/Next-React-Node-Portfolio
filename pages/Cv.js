import React, { Component } from 'react'
import { BaseLayout } from '@/components/layouts'
import { BasePage } from '@/components/'
import { useGetUser } from '@/actions/user'

const Cv = () => {
    const { data, loading } = useGetUser();
    return (
        <BaseLayout user={data} loading={loading} >
            <BasePage>
                <h1>This is the CV page</h1>
            </BasePage>
        </BaseLayout>
    )
}

export default Cv;
