import {createStore} from 'vuex';

const state = {
    todos: [],
    searchText: "",
    sortBy: "date",
    sortByDir: "DESC",
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
sortBy: date, status
sortByDir: DESC, ASC
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
    },
    updateSortBy (state, value) {
        state.sortBy = value;
    },
    updateSortByDir (state, value) {
        state.sortByDir = state.sortByDir === "ASC" ? "DESC" : "ASC";
    }
}

const getters = {
    matchingTodos (state) {
        return state.todos.filter(todo => {
            return (todo.body.includes(state.searchText) ||
            new Date(todo.date).toLocaleDateString().includes(state.searchText) ||
            todo.id.toString().includes(state.searchText) ||
            `${todo.isDone ? "Выполнено" : "В работе"}`.includes(state.searchText))
        });
    },
    sortedTodos (state, getters) {
        switch (state.sortBy + state.sortByDir) {
            case "dateASC":
                return getters.matchingTodos.sort((a, b) => a.date - b.date);
            case "statusDESC":
                return getters.matchingTodos.sort((a, b) => a.isDone - b.isDone);
            case "statusASC":
                return getters.matchingTodos.sort((a, b) => b.isDone - a.isDone);
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