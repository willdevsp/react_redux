import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import todoForm from './todoForm';
import todoList from './todoList';
export default class Todo extends Component {
    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <todoForm />
                <todoList />
            </div>
        )
    }
}