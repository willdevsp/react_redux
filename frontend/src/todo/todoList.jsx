import React from 'react'
import IconButton from '../template/iconButton'
export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id} className={todo.done?'finalizado':'pendente'}>
                <td >{todo.description}</td>
                <td>{todo.done ? 'Finalizado': 'Pendente'}</td>
                <td>
                    <IconButton
                        style='success' 
                        icon='check' 
                        hide={todo.done}
                        onClick={()=> props.handleMarkAsDone(todo)}>
                    </IconButton>
                    
                    <IconButton
                        style='warning' 
                        icon='undo' 
                        hide={!todo.done}
                        onClick={()=>props.handleMarkAsPending(todo)}>
                    </IconButton>

                    <IconButton
                        style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(todo)}>
                    </IconButton>
                </td>
            </tr>
        ))
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Status</th>
                    <th className='tableActions'>Ações</th>
                    
                </tr>                
            </thead>
            <tbody>{renderRows()}</tbody>
        </table>
    )

}