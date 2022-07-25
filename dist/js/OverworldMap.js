class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        
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
        }
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