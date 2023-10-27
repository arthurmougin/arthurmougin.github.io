AFRAME.registerState({
    initialState: {
        location: '#intro-target',
    },
    handlers: {
        changeLocation: function (state, action) {
            state.location = action.location+'-target';
        },
    }
});
