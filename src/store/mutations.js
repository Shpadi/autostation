export default {
    setCities(state, cities) {
        state.cities = cities
    },
    setTransport(state, transport) {
        state.transport = transport
    },
    setRoutes(state, routes) {
        state.routes = routes
    },
    setWaybills(state, waybills) {
        state.waybills = waybills
    },
    updateWaybill(state, waybill) {
        const index = state.waybills.findIndex((item) => item.id === waybill.id)
        state.waybills[index].tickets = waybill.tickets
    }
};
