class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector('.game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.map = null;
    }

    startGameLoop() {
        const step = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //limpando o frame anterior

            this.map.drawLowerImage(this.ctx); //desenha a parte de baixo do mapa

            Object.values(this.map.gameObjects).forEach(object => { //desenha todos os objetos e personagens do mapa
                object.update({
                    arrow: this.directionInput.direction,
                });
                object.sprite.draw(this.ctx);
            });

            this.map.drawUpperImage(this.ctx);//desenha a parte de cima do mapa

            requestAnimationFrame(() => {
                step(); //roda a cada novo frame
            });
        }   
        step();
    }

    init() {
        this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
        this.directionInput = new DirectionInput();
        this.directionInput.init();
        
        this.startGameLoop();
    }
}
