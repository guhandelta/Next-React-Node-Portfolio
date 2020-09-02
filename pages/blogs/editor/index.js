import React, { Component } from 'react'
import { BasePage, BaseLayout } from '@/components'
import withAuth from '@/hoc/withAuth'

const Editor = ({ user, loading }) => {
    return (
        <BaseLayout user={user} loading={loading} >
            <BasePage header="Blog Editor!">
                <h1>Editor Page</h1>
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(Editor)('admin');
