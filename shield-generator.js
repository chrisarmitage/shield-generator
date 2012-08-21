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
    this.posX = 0;
    this.posY = 0;
    this.scale = 24;
    this.angle = 0.333;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.drawShield = drawShield;

    function drawShield() {
        ctx = this.ctx;
        var centerX = ((this.posX * 14) * (this.scale)) - (7 * this.scale);
        var centerY = ((this.posY * 16) * (this.scale)) - (8 * this.scale);
        ctx.translate( centerX, centerY );
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


        ctx.lineWidth = 1;

        var fieldTypeRoll = Math.floor((Math.random()*100)+1);
        var fieldType = 'blank';
        if (fieldTypeRoll <= 45) {
            fieldType = 'ordinary';
        } else if (fieldTypeRoll <= 90) {
            fieldType = 'party';
        }

        if (fieldType == 'ordinary') {
            
            var ordinary = Math.floor((Math.random()*7)+1);
            console.log("o" + ordinary);

            //ordinary = 7;
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
                case 5:
                    drawSaltire(this, foreground);
                    break;
                case 6:
                    drawChevron(this, foreground);
                    break;
                case 7:
                    drawChief(this, foreground);
                    break;
            }
        }

        if (fieldType == 'party') {
            var ordinary = Math.floor((Math.random()*6)+1);
            console.log("p" + ordinary);

            //ordinary = 7;
            switch (ordinary) {
                case 1:
                    drawPartyBend(this, foreground);
                    break;
                case 2:
                    drawPartyCross(this, foreground);
                    break;
                case 3:
                    drawPartyPale(this, foreground);
                    break;
                case 4:
                    drawPartyFess(this, foreground);
                    break;
                case 5:
                    drawPartySaltire(this, foreground);
                    break;
                case 6:
                    drawPartyChevron(this, foreground);
                    break;
            }
        }

        ctx.restore();

        pathShield(this);
        ctx.lineWidth = 3;
        ctx.stroke();

        // Reset back to 0,0
        ctx.translate( -(centerX), -(centerY) );
    }

    function pathShield(parent) {
        var x = parent.startX;
        var y = parent.startY;
        var scale = parent.scale;
        var angle = parent.angle;
        ctx = this.ctx;

        ctx.beginPath();
        ctx.moveTo( -6 * scale, -6 * scale );
        ctx.lineTo( 6 * scale, -6 * scale );
        ctx.lineTo( 6 * scale, -2 * scale );

        ctx.arc( -6 * scale, -2 * scale, 12 * scale, 0.0 * Math.PI, angle * Math.PI);
        ctx.arc( 6 * scale, -2 * scale, 12 * scale, (1.0 - angle) * Math.PI, 1.0 * Math.PI);

        ctx.lineTo( -6 * scale, -6 * scale );
        ctx.closePath();

    }

    function drawBend(parent, foreground) {
        ctx = this.ctx;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo( -6 * scale, -8 * scale);
        ctx.lineTo( 8 * scale, 6 * scale);
        ctx.lineTo( 6 * scale, 8 * scale);
        ctx.lineTo( -8 * scale,  -6 * scale);

        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

    function drawPartyBend(parent, foreground) {
        ctx = this.ctx;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo( -6 * scale, -6 * scale);
        ctx.lineTo( 14 * scale, 14 * scale);
        ctx.lineTo( -6 * scale, 14 * scale);
        ctx.lineTo( -6 * scale, -6 * scale);

        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

    function drawCross(parent, foreground) {
        ctx = this.ctx;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo( -2 * scale, -8 * scale);
        ctx.lineTo( 2 * scale, -8 * scale);
        ctx.lineTo( 2 * scale, -2 * scale);
        ctx.lineTo( 6 * scale, -2 * scale);
        ctx.lineTo( 6 * scale, 2 * scale);
        ctx.lineTo( 2 * scale, 2 * scale);
        ctx.lineTo( 2 * scale, 14 * scale);
        ctx.lineTo( -2 * scale, 14 * scale);
        ctx.lineTo( -2 * scale, 2 * scale);
        ctx.lineTo( -6 * scale, 2 * scale);
        ctx.lineTo( -6 * scale, -2 * scale);
        ctx.lineTo( -2 * scale, -2 * scale);
        ctx.lineTo( -2 * scale, -8 * scale);

        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

    function drawPartyCross(parent, foreground) {
        ctx = this.ctx;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo( 0 * scale, -8 * scale);
        ctx.lineTo( 6 * scale, -8 * scale);
        ctx.lineTo( 6 * scale, 0 * scale);
        ctx.lineTo( 0 * scale, 0 * scale);
        ctx.lineTo( 0 * scale, -8 * scale);
        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo( -6 * scale, 0 * scale);
        ctx.lineTo( 0 * scale, 0 * scale);
        ctx.lineTo( 0 * scale, 14 * scale);
        ctx.lineTo( -6 * scale, 14 * scale);
        ctx.lineTo( -6 * scale, 0 * scale);
        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

    function drawPale(parent, foreground) {
        ctx = this.ctx;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo( -2 * scale, -8 * scale);
        ctx.lineTo( 2 * scale, -8 * scale);
        ctx.lineTo( 2 * scale, 14 * scale);
        ctx.lineTo( -2 * scale, 14 * scale);
        ctx.lineTo( -2 * scale, -8 * scale);

        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

    function drawPartyPale(parent, foreground) {
        ctx = this.ctx;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo( -6 * scale, -8 * scale);
        ctx.lineTo( 0 * scale, -8 * scale);
        ctx.lineTo( 0 * scale, 14 * scale);
        ctx.lineTo( -6 * scale, 14 * scale);
        ctx.lineTo( -6 * scale, -8 * scale);

        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

    function drawFess(parent, foreground) {
        ctx = this.ctx;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo( -6 * scale, -2 * scale);
        ctx.lineTo( 6 * scale, -2 * scale);
        ctx.lineTo( 6 * scale, 2 * scale);
        ctx.lineTo( -6 * scale, 2 * scale);
        ctx.lineTo( -6 * scale, -2 * scale);

        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

    function drawPartyFess(parent, foreground) {
        ctx = this.ctx;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo( -6 * scale, -8 * scale);
        ctx.lineTo( 6 * scale, -8 * scale);
        ctx.lineTo( 6 * scale, 0 * scale);
        ctx.lineTo( -6 * scale, 0 * scale);
        ctx.lineTo( -6 * scale, -8 * scale);

        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

    function drawSaltire(parent, foreground) {
        ctx = this.ctx;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo( -6 * scale, -8 * scale);
        ctx.lineTo( 0 * scale, -2 * scale);
        ctx.lineTo( 6 * scale, -8 * scale);
        ctx.lineTo( 8 * scale, -6 * scale);
        ctx.lineTo( 2 * scale, 0 * scale);
        ctx.lineTo( 8 * scale, 6 * scale);
        ctx.lineTo( 6 * scale, 8 * scale);
        ctx.lineTo( 0 * scale, 2 * scale);
        ctx.lineTo( -6 * scale, 8 * scale);
        ctx.lineTo( -8 * scale, 6 * scale);
        ctx.lineTo( -2 * scale, 0 * scale);
        ctx.lineTo( -8 * scale, -6 * scale);
        ctx.lineTo( -6 * scale, -8 * scale);

        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

    function drawPartySaltire(parent, foreground) {
        ctx = this.ctx;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo( -6 * scale, -6 * scale );
        ctx.lineTo( 0 * scale, 0 * scale);
        ctx.lineTo( -6 * scale, 6 * scale);
        ctx.lineTo( -6 * scale, -6 * scale);
        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo( 6 * scale, -6 * scale);
        ctx.lineTo( 6 * scale, 6 * scale);
        ctx.lineTo( 0 * scale, 0 * scale);
        ctx.lineTo( 6 * scale, -6 * scale);
        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

    function drawChevron(parent, foreground) {
        ctx = this.ctx;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo( 0 * scale, -2 * scale );
        ctx.lineTo( 8 * scale, 6 * scale);
        ctx.lineTo( 6 * scale, 8 * scale);
        ctx.lineTo( 0 * scale, 2 * scale);
        ctx.lineTo( -6 * scale, 8 * scale);
        ctx.lineTo( -8 * scale, 6 * scale);
        ctx.lineTo( 0 * scale, -2 * scale);

        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

    function drawPartyChevron(parent, foreground) {
        ctx = this.ctx;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo( 0 * scale, -2 * scale );
        ctx.lineTo( 16 * scale, 14 * scale);
        ctx.lineTo( -16 * scale, 14 * scale);
        ctx.lineTo( 0 * scale, -2 * scale);
        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

    function drawChief(parent, foreground) {
        ctx = this.ctx;
        var x = parent.startX;
        var y = parent.startY;
        var scale = parent.scale;

        ctx.beginPath();
        ctx.moveTo( -6 * scale, -8 * scale);
        ctx.lineTo( 6 * scale, -8 * scale);
        ctx.lineTo( 6 * scale, -2 * scale);
        ctx.lineTo( -6 * scale, -2 * scale);
        ctx.lineTo( -6 * scale, -8 * scale);
        
        ctx.fillStyle = foreground;
        ctx.fill();
        ctx.stroke();
    }

}



