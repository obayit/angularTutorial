import { Component, OnInit, HostListener } from '@angular/core';

import { MessageService } from '../message.service'
import { createText } from '@angular/core/src/view/text';

@Component({
  selector: 'app-mario',
  templateUrl: './mario.component.html',
  styleUrls: ['./mario.component.css']
})
export class MarioComponent implements OnInit {
  pos = 0;
  unt = 25;
  step = 20;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(){
    this.drawStuff(this.unt*8);
    this.drawStuffSecond();
    this.drawStuffSecondRebirth();
  }
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
    this.messageService.add(event.key);
    if(event.key ==='ArrowRight'){
      this.pos+=this.step;
      this.drawStuff(this.unt*8 + this.pos);
    }else if(event.key ==='ArrowLeft'){
      this.pos-=this.step;
      this.drawStuff(this.unt*8 + this.pos);
    }
  }
  drawStuffSecondRebirth(){
    var canvas = document.querySelector('#myCanvasSecondRebirth') as HTMLCanvasElement; 
    var width = canvas.width = window.innerWidth - 128;
    var height = canvas.height = window.innerHeight - 128 - 256;
    var ctx = canvas.getContext('2d');
      ctx.translate(width/2, height/2);
    var image = new Image();
    image.src = 'assets/super-mario-2x.png';
    let mario = 0;
    let posX = 0;
    let sliceHeight = 96;
    let sWidth = 31;
    let sHeigh = 32;
    let cycleLength = 3;
    image.onload = function drawMario(){
      ctx.fillStyle = '#555';
      ctx.fillRect(-width, -height, width*2, height*2);
      ctx.drawImage(image, (mario*sWidth), sliceHeight, sWidth, sHeigh, 0+posX, -(sHeigh), sWidth, sHeigh);
      if (posX % 13 === 0) {
        if (mario === cycleLength) {
          mario = 1;
        } else {
          mario++;
        }
        console.log('sprite now is ' + mario);
      }
      if(posX > width/2) {
        let newStartPos = -((width/2) + sWidth);
        posX = Math.ceil(newStartPos / 13) * 13;
        console.log('rest posX to :: '+posX);
      } else {
        posX += 1;
      }
      window.requestAnimationFrame(drawMario);
    }
  }
  drawStuffSecond(){
    var canvas = document.querySelector('#myCanvasSecond') as HTMLCanvasElement; 
    var width = canvas.width = window.innerWidth - 128;
    var height = canvas.height = window.innerHeight - 128 - 256;
    var ctx = canvas.getContext('2d');
      ctx.translate(width/2, height/2);
    var image = new Image();
    image.src = 'assets/walk-right.png';
    let sprite = 0;
    let posX = 0;
    let sWidth = 102;
    let sHeigh = 148;
    image.onload = function drawSprite(){
      ctx.fillStyle = '#555';
      ctx.fillRect(-width, -height, width*2, height*2);
      ctx.drawImage(image, (sprite*102), 0, sWidth, sHeigh, 0+posX, -(sHeigh), sWidth, sHeigh);
      if (posX % 13 === 0) {
        if (sprite === 5) {
          sprite = 0;
        } else {
          sprite++;
        }
        console.log('sprite now is ' + sprite);
      }
      if(posX > width/2) {
        let newStartPos = -((width/2) + 102);
        posX = Math.ceil(newStartPos / 13) * 13;
        console.log('rest posX to :: '+posX);
      } else {
        posX += 1;
      }
      window.requestAnimationFrame(drawSprite);
    }
  }
  degToRad(degrees) {
    return degrees * Math.PI / 180;
  };
  rand(min, max) {
    return Math.floor(Math.random() * (max-min+1)) + (min);
  }
  drawLoop(ctx: CanvasRenderingContext2D, width: number, height: number){
    ctx.translate(width/2, height/2);
    let length = 250;
    let moveOffset = 20;

    for(var i = 0; i < length; i++) {
      ctx.fillStyle = 'rgba(' + (255-length) + ', 0, ' + (255-length) + ', 0.9)';
      ctx.beginPath();
      ctx.moveTo(moveOffset, moveOffset);
      ctx.lineTo(moveOffset+length, moveOffset);
      var triHeight = length/2 * Math.tan(this.degToRad(60));
      ctx.lineTo(moveOffset+(length/2), moveOffset+triHeight);
      ctx.lineTo(moveOffset, moveOffset);
      ctx.fill();

      length--;
      moveOffset += 0.7;
      ctx.rotate(this.degToRad(5));
    }
  }

  drawTriangleCircle(ctx: CanvasRenderingContext2D){
    ctx.fillStyle = '#F00';
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50);
    let triHeight = 50 * Math.tan(this.degToRad(60));
    ctx.lineTo(150, 50+triHeight);
    ctx.lineTo(50, 50);
    ctx.fill();
    //circle
    ctx.beginPath();
    ctx.arc(100, 200, 50, this.degToRad(0), this.degToRad(360), false);
    ctx.fill();
    //another arc
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(100, 350, 50, this.degToRad(-45), this.degToRad(45), true);
    ctx.lineTo(100, 350);
    ctx.fill();
  }
  
  async drawFirefoxImage(ctx: CanvasRenderingContext2D, x: number, y: number){
    let image = new Image();
    image.src = 'assets/firefox.png';
    image.onload = function(){
      ctx.drawImage(image, 20, 20, 185, 175, x, y, 185, 175);
    }
  }
  sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
  async drawStuff(baseX: number){
    var canvas = document.querySelector('.myCanvas') as HTMLCanvasElement; 
    var width = canvas.width = window.innerWidth - 128;
    var height = canvas.height = window.innerHeight - 128 - 256;
    var ctx = canvas.getContext('2d');
    //background
    ctx.fillStyle = '#999';
    ctx.fillRect(0, 0, width, height);

    //mario
    ctx.fillStyle = '#ED1B24';
    var unt = 25;
    var lineOffset = 1;
    var cRed = '#ED1B24';
    var cBlue = '#0000FE';
    var cBody = '#FFC20F';
    var cBrown = '#643201';
    //hat
    ctx.fillRect(baseX + unt*2, unt*2, unt*5, unt);
    ctx.fillRect(baseX + unt, unt*3, unt*9, unt);
    //hair1
    ctx.fillStyle = '#643201';
    ctx.fillRect(baseX + unt, unt*4, unt*3, unt);
    lineOffset = 4;
    //body1
    ctx.fillStyle = '#FFC20F';
    ctx.fillRect(baseX + unt*lineOffset, unt*4, unt*2, unt);
    lineOffset = 6;
    //eyes1
    ctx.fillStyle = '#000';
    ctx.fillRect(baseX + unt*lineOffset, unt*4, unt, unt);
    lineOffset = 7;
    //body1,2
    ctx.fillStyle = '#FFC20F';
    ctx.fillRect(baseX + unt*lineOffset, unt*4, unt, unt);
    lineOffset = 1;

    //hair2
    ctx.fillStyle = '#643201';
    ctx.fillRect(baseX, unt*5, unt, unt);
    lineOffset = 1;
    //ear2
    ctx.fillStyle = '#FFC20F';
    ctx.fillRect(baseX + unt*lineOffset, unt*5, unt, unt);
    lineOffset = 2;
    //hair2,2
    ctx.fillStyle = '#643201';
    ctx.fillRect(baseX + unt*lineOffset, unt*5, unt, unt);
    lineOffset = 3;
    //body2
    ctx.fillStyle = '#FFC20F';
    ctx.fillRect(baseX + unt*lineOffset, unt*5, unt*3, unt);
    lineOffset = 6;
    //eyes2
    ctx.fillStyle = '#000';
    ctx.fillRect(baseX + unt*lineOffset, unt*5, unt, unt);
    lineOffset = 7;
    //body2,2
    ctx.fillStyle = '#FFC20F';
    ctx.fillRect(baseX + unt*lineOffset, unt*5, unt*3, unt);

    var line = 6;
    var uwidth = 1;
    //hair3
    ctx.fillStyle = '#643201';
    ctx.fillRect(baseX, unt*line, unt, unt);
    lineOffset = 1;
    //ear3
    ctx.fillStyle = '#FFC20F';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt, unt);
    lineOffset += uwidth;
    //hair3,2
    uwidth = 2;
    ctx.fillStyle = '#643201';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //body3
    uwidth = 3;
    ctx.fillStyle = '#FFC20F';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //eyes3
    uwidth = 1;
    ctx.fillStyle = '#000';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt, unt);
    lineOffset += uwidth;
    //body3,2
    uwidth = 3;
    ctx.fillStyle = '#FFC20F';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);

    var line = 7;
    lineOffset = 1;
    //hair3
    uwidth = 1;
    ctx.fillStyle = '#643201';
    ctx.fillRect(baseX+unt, unt*line, unt, unt);
    lineOffset += uwidth;
    //body3
    uwidth = 4;
    ctx.fillStyle = '#FFC20F';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //mustache3
    uwidth = 4;
    ctx.fillStyle = '#000';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;

    var line = 8;
    lineOffset = 1;
    //neck
    uwidth = 6;
    ctx.fillStyle = '#FFC20F';
    ctx.fillRect(baseX+unt*2, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;

    var line = 9;
    lineOffset = 1;
    //shirt
    uwidth = 2;
    ctx.fillStyle = '#ED1B24';
    ctx.fillRect(baseX+unt, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //roll
    uwidth = 1;
    ctx.fillStyle = '#0000FE';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //shirt
    uwidth = 2;
    ctx.fillStyle = '#ED1B24';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //roll
    uwidth = 1;
    ctx.fillStyle = '#0000FE';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //shirt
    uwidth = 2;
    ctx.fillStyle = '#ED1B24';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;

    var line = 10;
    lineOffset = 0;
    //shirt
    uwidth = 3;
    ctx.fillStyle = '#ED1B24';
    ctx.fillRect(baseX, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //roll
    uwidth = 1;
    ctx.fillStyle = '#0000FE';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //shirt
    uwidth = 2;
    ctx.fillStyle = '#ED1B24';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //roll
    uwidth = 1;
    ctx.fillStyle = '#0000FE';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //shirt
    uwidth = 3;
    ctx.fillStyle = '#ED1B24';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;

    var line = 11;
    lineOffset = -1;
    //shirt
    uwidth = 4;
    ctx.fillStyle = '#ED1B24';
    ctx.fillRect(baseX-unt, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //roll
    uwidth = 4;
    ctx.fillStyle = '#0000FE';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //shirt
    uwidth = 4;
    ctx.fillStyle = '#ED1B24';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;

    var line = 12;
    lineOffset = -1;
    //neck
    uwidth = 2;
    ctx.fillStyle = '#FFC20F';
    ctx.fillRect(baseX -unt, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //shirt
    uwidth = 1;
    ctx.fillStyle = '#ED1B24';
    ctx.fillRect(baseX+ unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //roll
    uwidth = 1;
    ctx.fillStyle = '#0000FE';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //pin
    uwidth = 1;
    ctx.fillStyle = '#FFC20F';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //roll
    uwidth = 2;
    ctx.fillStyle = '#0000FE';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //pin
    uwidth = 1;
    ctx.fillStyle = '#FFC20F';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //roll
    uwidth = 1;
    ctx.fillStyle = '#0000FE';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //shirt
    uwidth = 1;
    ctx.fillStyle = '#ED1B24';
    ctx.fillRect(baseX+ unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    //hand
    uwidth = 1;
    lineOffset = this.drawLineItem(ctx, cBody, 2, baseX, lineOffset, line);

    var line = 13;
    lineOffset = -1;
    //hand
    uwidth = 3;
    lineOffset = lineOffset = this.drawLineItem(ctx, cBody, uwidth, baseX, lineOffset, line);
    //roll
    uwidth = 6;
    lineOffset = lineOffset = this.drawLineItem(ctx, cBlue, uwidth, baseX, lineOffset, line);
    //hand
    uwidth = 3;
    lineOffset = lineOffset = this.drawLineItem(ctx, cBody, uwidth, baseX, lineOffset, line);

    var line = 14;
    lineOffset = -1;
    //hand
    uwidth = 2;
    lineOffset = lineOffset = this.drawLineItem(ctx, cBody, uwidth, baseX, lineOffset, line);
    //roll
    uwidth = 8;
    lineOffset = lineOffset = this.drawLineItem(ctx, cBlue, uwidth, baseX, lineOffset, line);
    //hand
    uwidth = 2;
    lineOffset = lineOffset = this.drawLineItem(ctx, cBody, uwidth, baseX, lineOffset, line);

    var line = 15;
    lineOffset = 1;
    //roll
    uwidth = 3;
    lineOffset = lineOffset = this.drawLineItem(ctx, cBlue, uwidth, baseX, lineOffset, line);
    lineOffset += 2;
    //roll
    uwidth = 3;
    lineOffset = lineOffset = this.drawLineItem(ctx, cBlue, uwidth, baseX, lineOffset, line);

    var line = 16;
    lineOffset = 0;
    //shoe
    uwidth = 3;
    lineOffset = lineOffset = this.drawLineItem(ctx, cBrown, uwidth, baseX, lineOffset, line);
    lineOffset += 4;
    //shoe
    uwidth = 3;
    lineOffset = lineOffset = this.drawLineItem(ctx, cBrown, uwidth, baseX, lineOffset, line);

    var line = 17;
    lineOffset = -1;
    //shoe
    uwidth = 4;
    lineOffset = lineOffset = this.drawLineItem(ctx, cBrown, uwidth, baseX, lineOffset, line);
    lineOffset += 4;
    //shoe
    uwidth = 4;
    lineOffset = lineOffset = this.drawLineItem(ctx, cBrown, uwidth, baseX, lineOffset, line);
    /*
    //shirt
    uwidth = 4;
    ctx.fillStyle = '#ED1B24';
    ctx.fillRect(baseX + unt*lineOffset, unt*line, unt*uwidth, unt);
    lineOffset += uwidth;
    */
    this.drawFirefoxImage(ctx, baseX + unt*15, unt);
    this.drawTriangleCircle(ctx);
    this.drawLoop(ctx, width, height);

    }
    drawLineItem(ctx: CanvasRenderingContext2D, color: string, uwidth: number, baseX: number, lineOffset: number, line: number): number{
      var unt = 25;
      ctx.fillStyle = color;
      ctx.fillRect(baseX+ unt*lineOffset, unt*line, unt*uwidth, unt);
      lineOffset += uwidth;
      return lineOffset;
    }

  }//end of component
