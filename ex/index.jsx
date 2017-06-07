import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(

    <Family lastName='Silva'>
        <Member name='Rafael'  />
        <Member name='Solaire' />
        <Member name='Vraska' />
    </Family>

    , document.getElementById('app')
)