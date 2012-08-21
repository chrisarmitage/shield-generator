/**
 * Shield Generator
 *
 * Generates a basic heraldic shield using HTML5 Canvas
 *
 * Chris Armitage <dev@chrisarmitage.com>
 * 2012/08/21
 * //
 * Licenses are for lawyers. This is code I'm messing around with. If you want
 * to use it yourself, go for it!
 */

/**
 * Constructor
 */
function shieldGenerator(canvas) {
    //this.canvas = null;
    //this.ctx = null;
    this.startX = 10;
    this.startY = 10;
    this.scale = 1;
    this.angle = 0.333;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.drawShield = drawShield;

    function drawShield() {
        ctx = this.ctx;
        var metals = new Array(
            "#ffdc0a",
            "#f0f0f0"
        );

        var colours = new Array(
            "#0000ff",
            "#ff0000",
            "#aa00aa",
            "#000000",
            "#009600"
        );

        var background = metals[Math.floor(Math.random() * metals.length)];
        var foreground = colours[Math.floor(Math.random() * colours.length)];

        if (Math.floor(Math.random() * 2) == 1) {
            var temp = background;
            background = foreground;
            foreground = temp;
        }

        ctx.save();
        pathShield(this);
        ctx.clip();
        ctx.fillStyle = background;
        ctx.fill();

        var ordinary = Math.floor((Math.random()*4)+1);
        switch (ordinary) {
            case 1:
                drawBend(this, foreground);
                break;
            case 2:
                drawCross(this, foreground);
                break;
            case 3:
                drawPale(this, foreground);
                break;
            case 4:
                drawFess(this, foreground);
                break;
        }

        ctx.restore();

        pathShield(this);
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    function pathShield(parent) {
        var x = parent.startX;
        var y = parent.startY;
        var scale = parent.scale;
        var angle = parent.angle;
        ctx = this.ctx;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + (300 * scale), y);
        ctx.lineTo(x + (300 * scale), y + (100 * scale));

        ctx.arc(x, y + (100 * scale), (300 * scale), 0.0 * Math.PI, angle * Math.PI);

        ctx.arc(x + (300 * scale), y + (100 * scale), (300 * scale), (1.0 - angle) * Math.PI, 1.0 * Math.PI);

        ctx.lineTo(x, y);
        ctx.closePath();

    }

    function drawBend(parent, foreground) {
        ctx = this.ctx;
        var x = parent.startX;
        var y = parent.startY;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo(x, y - (50 * scale));
        ctx.lineTo(x + (scale * 400), y + (scale * 350));
        ctx.lineTo(x + (scale * 350), y + (scale * 400));
        ctx.lineTo(x + (scale * -50), y + (scale * 0));

        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

    function drawCross(parent, foreground) {
        ctx = this.ctx;
        var x = parent.startX;
        var y = parent.startY;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo(x + (scale * 100), y + (scale * -50));
        ctx.lineTo(x + (scale * 200), y + (scale * -50));
        ctx.lineTo(x + (scale * 200), y + (scale * 100));
        ctx.lineTo(x + (scale * 300), y + (scale * 100));
        ctx.lineTo(x + (scale * 300), y + (scale * 200));
        ctx.lineTo(x + (scale * 200), y + (scale * 200));
        ctx.lineTo(x + (scale * 200), y + (scale * 400));
        ctx.lineTo(x + (scale * 100), y + (scale * 400));
        ctx.lineTo(x + (scale * 100), y + (scale * 200));
        ctx.lineTo(x + (scale * 0), y + (scale * 200));
        ctx.lineTo(x + (scale * 0), y + (scale * 100));
        ctx.lineTo(x + (scale * 100), y + (scale * 100));
        ctx.lineTo(x + (scale * 100), y + (scale * -50));

        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

    function drawPale(parent, foreground) {
        ctx = this.ctx;
        var x = parent.startX;
        var y = parent.startY;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo(x + (scale * 100), y + (scale * -50));
        ctx.lineTo(x + (scale * 200), y + (scale * -50));
        ctx.lineTo(x + (scale * 200), y + (scale * 400));
        ctx.lineTo(x + (scale * 100), y + (scale * 400));
        ctx.lineTo(x + (scale * 100), y + (scale * -50));

        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

    function drawFess(parent, foreground) {
        ctx = this.ctx;
        var x = parent.startX;
        var y = parent.startY;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo(x + (scale * 0), y + (scale * 100));
        ctx.lineTo(x + (scale * 300), y + (scale * 100));
        ctx.lineTo(x + (scale * 300), y + (scale * 200));
        ctx.lineTo(x + (scale * 0), y + (scale * 200));
        ctx.lineTo(x + (scale * 0), y + (scale * 100));

        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

}



