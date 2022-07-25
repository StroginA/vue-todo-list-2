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
            id: state.todos.length,
            body: state.newTodoText,
            isDone: false,
            date: Date.now()
        })
    },
    updateNewTodoText (state, value) {
        state.newTodoText = value;
    },
    updateStatus (state, payload) {
        state.todos[payload.id].isDone = payload.value;
    },
    updateSearchText (state, value) {
        state.searchText = value;
    }
}

const getters = {
    matchingTodos (state) {
        return state.todos.filter(todo => {return todo.body.includes(state.searchText)});
    },
    sortedTodos (state, getters) {
        switch (state.sortBy) {
            case "dateASC":
                return getters.matchingTodos.sort((a, b) => a.date - b.date);
            case "doneDESC":
                return getters.matchingTodos.sort((a, b) => a.isDone - b.isDone);
            case "doneASC":
                return getters.matchingTodos.sort((a, b) => a.isDone - b.isDone);
            default:
                return getters.matchingTodos.sort((a, b) => b.date - a.date);
        }
    }
}

const store = createStore({
    state,
    mutations,
    getters
})

export default store;