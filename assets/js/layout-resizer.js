AFRAME.registerComponent('layout-resizer', {
    schema: {
        maxCamAngle: {type: 'number', default: 130},
        minCamAngle: {type: 'number', default: 30},
        maxItemAngle: {type: 'number', default: 45},
        minItemAngle: {type: 'number', default: 10},
        numberItems: {type: 'number', default: 3}
    },
    init: function () {
        onresize = this.update.bind(this);
    },
    update: function(){
        // Get the camera element
        const camera = this.el.sceneEl.camera;
        const hFOV = camera.fov * camera.aspect;
        const MaC = this.data.maxCamAngle;
        const MiC = this.data.minCamAngle;
        const MaI = this.data.maxItemAngle;
        const MiI = this.data.minItemAngle;
        const CamAngleRatio = (hFOV - MiC) / (MaC - MiC);
        let ItemAngle,TotalAngle,Rotation;
        if(hFOV > MaC){
            ItemAngle = MaI;
        }
        else if (hFOV < MiC)
        {
            ItemAngle = MiI;
        } else {
            ItemAngle = (MaI - MiI) * CamAngleRatio + MiI;
        }
        
        TotalAngle = (this.data.numberItems - 1) * ItemAngle;
        Rotation = TotalAngle / 2 + 90;

        this.el.setAttribute('layout', 'angle', ItemAngle);
        this.el.object3D.rotation.y = THREE.MathUtils.degToRad(Rotation);
        /*if(CamAngleRatio<1){
            const rotatedCameraPosition = document.querySelectorAll('.cameratarget');
            rotatedCameraPosition.forEach(CameraPositionEl => {
                console.log('CameraPositionEl',CameraPositionEl);
            });
        }*/
        
    }
});
