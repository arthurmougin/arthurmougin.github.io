AFRAME.registerComponent('camera-rig', {
    schema: {
        target: {type: 'selector', default: '#intro-target'},
        speed: {type: 'number', default: 1},
    },
    init: function () {
        this.targetPosition = new THREE.Vector3();
        this.targetRotation = new THREE.Quaternion();
    },
    distanceToTarget(){
        return this.el.object3D.position.distanceTo(this.data.target.object3D.position);
    },
    tick: function (t,dt) {
        // Do something on every scene tick or frame.
        if(this.distanceToTarget() > 0.01){
            this.data.target.object3D.getWorldPosition(this.targetPosition);
            this.data.target.object3D.getWorldQuaternion(this.targetRotation);
            this.el.object3D.position.lerp(this.targetPosition, dt*this.data.speed/1000);
            this.el.object3D.quaternion.slerp(this.targetRotation, dt*this.data.speed/1000);
            this.el.object3D.rotation.x = 0;
            this.el.object3D.rotation.z = 0;
        }
    }
});
