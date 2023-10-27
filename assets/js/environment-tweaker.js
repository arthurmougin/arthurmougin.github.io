AFRAME.registerComponent('environment-tweaker', {
    dependencies: ['environment'],
    schema : {

    },
    init: function () {
        var environment = this.el.components.environment;

        //this.el.setAttribute('environment', 'lightPosition', { x: 0, y: -0.01, z: -0.46});
        this.el.setAttribute('environment', 'lightPosition', { x: 0, y: 0, z: -0.46});
        const sky = this.el.querySelector('a-sky');
        
    }
});
