import React, { Component } from 'react'
import { BaseLayout } from '../components/layouts'
import { BasePage } from '../components/'

class Cv extends Component {
    render() {
        return (
            <BaseLayout>
                <BasePage>
                    <h1>This is the CV page</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Cv;
