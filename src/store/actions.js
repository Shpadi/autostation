import { firestore } from '../config/firebase'
 
export default {
    async getCities({ commit }) {
        const snapshot = await firestore.collection('cities').get()
        const cities = snapshot.docs.map(doc => doc.data());
        commit('setCities', cities)
    },
    async getAllTransport({ commit }) {
        const snapshot = await firestore.collection('transport').get()
        const transport = snapshot.docs.map(doc => doc.data());
        commit('setTransport', transport)
    },

    async getRoutes({ commit }) {
        const snapshot = await firestore.collection('routes').get()
        const routes = snapshot.docs.map(doc => doc.data());
        commit('setRoutes', routes)
    },

    async getWaybills({ commit, dispatch }) {
        const snapshot = await firestore.collection('waybill').get()
        let waybills = snapshot.docs.map(doc => doc.data());
        waybills = await Promise.all(waybills.map(async (item) => {
            item.route = await dispatch('getRoute',item.route)
            item.transport = await dispatch('getTransport',item.transport)
            return item
        }))
       commit('setWaybills', waybills)
    },

    async getRoute(_, id) {
        let route = await firestore.collection('routes').doc(id).get()
        return route.data()
    },

    async getTransport(_, id) {
        const transport = await firestore.collection('transport').doc(id).get()
        return transport.data()
    },

    async setRoute(_, route) {
        await firestore.collection('routes').doc(route.id).set(route)
    },

    async setWaybill(_, waybill) {
        await firestore.collection('waybill').doc(waybill.id).set(waybill)
    },

    async setTransport(_, transport) {
        await firestore.collection('transport').doc(transport.id).set(transport)
    },

    async searchWaybill({ commit, dispatch }, filter) {
        const data = await firestore.collection('routes').where('startCity', '==', filter.startCity).where('endCity', '==', filter.endCity).get();
        let routesData = data.docs.map(doc => doc.data().id);
        let waybillsData = await firestore.collection('waybill').where('route', 'in', routesData).get()
        let waybills = waybillsData.docs.map(doc => doc.data());
        waybills = await Promise.all(waybills.map(async (item) => {
            item.route = await dispatch('getRoute',item.route)
            item.transport = await dispatch('getTransport',item.transport)
            return item
        }))
        commit('setWaybills', waybills)
    },

    async buyTicket({ commit }, waybill) {
        const tickets = waybill.tickets - 1
        const boughtTickets = ++waybill.route.boughtTickets
        await firestore.collection('waybill').doc(waybill.id).update({ tickets })
        await firestore.collection('routes').doc(waybill.route.id).update({ boughtTickets })
        const updatedWaybill = { id: waybill.id, tickets }
        commit('updateWaybill', updatedWaybill)
    },
};
