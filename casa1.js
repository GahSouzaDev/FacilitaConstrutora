function createCasa1() {

        const group = new THREE.Group();
        
        // Geometria do cubo
        const cubeGeometry = new THREE.BoxGeometry(4.6, 2.8, 0.15);
        
        // Material espelhado
        const cubeMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,    // Cor base branca
            specular: 0xffffff, // Reflexo branco
            shininess: 100      // Brilho alto pra parecer espelho
        });
        
        // Cria o cubo
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(-4.15, 1, 3.9);

        // Cria o cubo 1
        // Geometria do cubo
        const cube1Geometry = new THREE.BoxGeometry(3.55, 2.8, 0.15);        
        
        // Cria o cubo
        const cube1 = new THREE.Mesh(cube1Geometry, cubeMaterial);
        cube1.position.set(-8.2, 1, 3.9);
        group.add(cube, );
        
        return group;
    }