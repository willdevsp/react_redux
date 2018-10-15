import React from 'react'
import Grid from '../template/grid'
import iconButton from '../template/iconButton'
export default props => (
    <div  role='form' className="todoForm">
        <Grid cols="12 9 10">
            <input id="description" className="form-control" placeholder='Adicione uma tarefa'/>
        </Grid>
        <Grid cols="12 13 2">
            <iconButton style='primary' icon='plus'>              
            </iconButton>
        </Grid>
    </div>
)