import {createStore} from 'vuex';

const state = {
    todos: [],
    searchText: "",
    sortBy: "dateDESC",
    newTodoModalIsOpen: false,
    newTodoText: ""
}
/*
todos: [
    {
        id: int,
        body: "",
        isDone: true/false,
        date: date()
    }
]
sortBy: dateDESC, dateASC, doneDESC, doneASC
*/

const mutations = {
    openNewTodo (state) {
        state.newTodoModalIsOpen = true;
    },
    closeNewTodo (state) {
        state.newTodoModalIsOpen = false;
    },
    createTodo (state) {
        state.todos.push({
            id: state.todos.length(),
            body: state.newTodoText,
            isDone: false,
            date: Date.now()
        })
    }
}

const getters = {
    matchingTodos (state) {
        return state.todos.filter(todo => todo.body.includes(state.searchText))
    },
    sortedTodos (state) {
        switch (state.sortBy) {
            case "dateASC":
                return state.todos.sort((a, b) => b.date - a.date);
            case "doneDESC":
                return state.todos.sort((a, b) => a.isDone - b.isDone);
            case "doneASC":
                return state.todos.sort((a, b) => a.isDone - b.isDone);
            default:
                return state.todos.sort((a, b) => a.date - b.date);
        }
    }
}

const store = createStore({
    state,
    mutations,
    getters
})

export default store;