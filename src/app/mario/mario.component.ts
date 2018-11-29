import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mario',
  templateUrl: './mario.component.html',
  styleUrls: ['./mario.component.css']
})
export class MarioComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    this.drawStuff();
  }
  sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
  async drawStuff(){
    var canvas = document.querySelector('.myCanvas') as HTMLCanvasElement; 
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var ctx = canvas.getContext('2d');
    //background
    ctx.fillStyle = '#999';
    ctx.fillRect(0, 0, width, height);

    //mario
    ctx.fillStyle = '#ED1B24';
    var unt = 25;
    var baseX = unt*8;
    var lineOffset = 1;
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

    }

  }//end of component
