class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.walls = config.walls || {};

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx, cameraPerson) { //10.5 é o meio no eixo x, e 6 é o meio no eixo y
        ctx.drawImage(
            this.lowerImage,
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y
        );
    }

    drawUpperImage(ctx, cameraPerson) { //10.5 é o meio no eixo x, e 6 é o meio no eixo y
        ctx.drawImage(
            this.upperImage,
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y
        );
    }

    isSpaceTaken(currentX, currentY, direction) {
        const { x, y } = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x},${y}`] || false;
    }

    mountObjects() {
        Object.values(this.gameObjects).forEach(obj => {
            obj.mount(this);
        });
    }

    addWall(x, y) {
        this.walls[`${x},${y}`] = true;
    }
    removeWall(x, y) {
        delete this.walls[`${x},${y}`];
    }
    moveWall(wasX, wasY, direction) {
        this.removeWall(wasX, wasY);
        const { x, y } = utils.nextPosition(wasX, wasY, direction);
        this.addWall(x, y);
    }
}

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: '../images/maps/DemoLower.png',
        upperSrc: '../images/maps/DemoUpper.png',
        gameObjects: {
            hero: new Person({
                x: utils.withGrid(5), y: utils.withGrid(6),
                isPlayerControlled: true,
            }),
            npc1: new Person({
                x: utils.withGrid(4), y: utils.withGrid(7),
                src: '../images/characters/people/npc1.png'
            })
        },
        walls: {
            //'16,16': true, codigo ira gerar isso
            [utils.asGridCoord(7, 6)]: true,
            [utils.asGridCoord(8, 6)]: true,
            [utils.asGridCoord(7, 7)]: true,
            [utils.asGridCoord(8, 7)]: true,
        },
    },
    Kitchen: {
        lowerSrc: '../images/maps/KitchenLower.png',
        upperSrc: '../images/maps/KitchenUpper.png',
        gameObjects: {
            hero: new Person({
                x: utils.withGrid(3), y: utils.withGrid(5),
                isPlayerControlled: true,
            }),
            npcA: new Person({
                x: utils.withGrid(9), y: utils.withGrid(6),
                src: '../images/characters/people/npc1.png'
            }),
            npcB: new Person({
                x: utils.withGrid(10), y: utils.withGrid(8),
                src: '../images/characters/people/npc2.png'
            })
        }
    }
}