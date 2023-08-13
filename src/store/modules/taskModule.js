export const taskModule = {
    state: () => ({
        taskList: [
            { id: 0, descr: "Development FORM", status: "in-process" },
            { id: 1, descr: "Development BUTTON", status: "in-process" },
            { id: 2, descr: "Development INPUTS", status: "in-process" },
            { id: 3, descr: "Testing", status: "pause" },
            { id: 4, descr: "Bug fixes", status: "pause" },

        ],
    }),

    getters: {
        filteredTaskList: (state) => (status) => {
            return [...state.taskList].filter(elem => elem.status == status);
        },

        TaskListCount: (state) => (status) => {
            if (status) {
                return [...state.taskList].filter(elem => elem.status === status).length;
            } else {
                return [...state.taskList].length;
            }
        },
    },

    mutations: {
        setTaskList(state, list) {
            state.taskList = list;
        },
    },

    actions: {
        getTaskList({ commit }) {
            if (JSON.parse(localStorage.getItem("taskList"))) {
                commit('setTaskList', JSON.parse(localStorage.getItem("taskList")));
            }
        },

        addThisTask({ state, commit }, thisDescr) {
            let newTask = {
                id: 0,
                descr: thisDescr,
                status: "in-process",
            };

            while (state.taskList.find((elem) => elem.id == newTask.id) !== undefined) {
                newTask.id++;
            }

            const newTaskList = [...state.taskList]
            newTaskList.push(newTask);
            commit('setTaskList', newTaskList);
            localStorage.setItem("taskList", JSON.stringify(state.taskList));
        },

        editThisTask({ state, commit }, {thisTask, thisDescr}) {
            commit('setTaskList', state.taskList.map(elem => elem.id == thisTask.id ? { ...elem, descr: thisDescr } : elem));
            localStorage.setItem("taskList", JSON.stringify(state.taskList));
        },

        deleteThisTask({ state, commit }, thisTask) {
            commit('setTaskList', [...state.taskList].filter(elem => elem.id != thisTask.id));
            localStorage.setItem("taskList", JSON.stringify(state.taskList));
        },


        setTaskStatus({ state, commit }, {thisTask, thisStatus}) {
            commit('setTaskList', state.taskList.map(elem => elem.id == thisTask.id ? { ...elem, status: thisStatus } : elem));
            localStorage.setItem("taskList", JSON.stringify(state.taskList));
        },
    },
    namespaced: true
}