(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/*样式一*/
(function ($) {
  $.fn.snow = function (options) {
    var $flake = $('<div id="snowbox" />').css({
      'position': 'absolute',
      'z-index': '9999',
      'top': '-50px'
    }).html('&#10052;'),
        documentHeight = $(document).height(),
        documentWidth = $(document).width(),
        defaults = {
      minSize: 10,
      maxSize: 20,
      newOn: 1000,
      flakeColor: "#AFDAEF"
      /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */

    },
        options = $.extend({}, defaults, options);
    var interval = setInterval(function () {
      var startPositionLeft = Math.random() * documentWidth - 100,
          startOpacity = 0.5 + Math.random(),
          sizeFlake = options.minSize + Math.random() * options.maxSize,
          endPositionTop = documentHeight - 200,
          endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
          durationFall = documentHeight * 10 + Math.random() * 5000;
      $flake.clone().appendTo('body').css({
        left: startPositionLeft,
        opacity: startOpacity,
        'font-size': sizeFlake,
        color: options.flakeColor
      }).animate({
        top: endPositionTop,
        left: endPositionLeft,
        opacity: 0.2
      }, durationFall, 'linear', function () {
        $(this).remove();
      });
    }, options.newOn);
  };
})(jQuery);

$(function () {
  $.fn.snow({
    minSize: 5,

    /* 定义雪花最小尺寸 */
    maxSize: 50,

    /* 定义雪花最大尺寸 */
    newOn: 300
    /* 定义密集程度，数字越小越密集 */

  });
});
/*样式二*/

/* 控制下雪 */

function snowFall(snow) {
  /* 可配置属性 */
  snow = snow || {};
  this.maxFlake = snow.maxFlake || 200;
  /* 最多片数 */

  this.flakeSize = snow.flakeSize || 10;
  /* 雪花形状 */

  this.fallSpeed = snow.fallSpeed || 1;
  /* 坠落速度 */
}
/* 兼容写法 */


requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
  setTimeout(callback, 1000 / 60);
};

cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
/* 开始下雪 */

snowFall.prototype.start = function () {
  /* 创建画布 */
  snowCanvas.apply(this);
  /* 创建雪花形状 */

  createFlakes.apply(this);
  /* 画雪 */

  drawSnow.apply(this);
};
/* 创建画布 */


function snowCanvas() {
  /* 添加Dom结点 */
  var snowcanvas = document.createElement("canvas");
  snowcanvas.id = "snowfall";
  snowcanvas.width = window.innerWidth;
  snowcanvas.height = document.body.clientHeight;
  snowcanvas.setAttribute("style", "position:absolute; top: 0; left: 0; z-index: 1; pointer-events: none;");
  document.getElementsByTagName("body")[0].appendChild(snowcanvas);
  this.canvas = snowcanvas;
  this.ctx = snowcanvas.getContext("2d");
  /* 窗口大小改变的处理 */

  window.onresize = function () {
    snowcanvas.width = window.innerWidth;
    /* snowcanvas.height = window.innerHeight */
  };
}
/* 雪运动对象 */


function flakeMove(canvasWidth, canvasHeight, flakeSize, fallSpeed) {
  this.x = Math.floor(Math.random() * canvasWidth);
  /* x坐标 */

  this.y = Math.floor(Math.random() * canvasHeight);
  /* y坐标 */

  this.size = Math.random() * flakeSize + 2;
  /* 形状 */

  this.maxSize = flakeSize;
  /* 最大形状 */

  this.speed = Math.random() * 1 + fallSpeed;
  /* 坠落速度 */

  this.fallSpeed = fallSpeed;
  /* 坠落速度 */

  this.velY = this.speed;
  /* Y方向速度 */

  this.velX = 0;
  /* X方向速度 */

  this.stepSize = Math.random() / 30;
  /* 步长 */

  this.step = 0;
  /* 步数 */
}

flakeMove.prototype.update = function () {
  var x = this.x,
      y = this.y;
  /* 左右摆动(余弦) */

  this.velX *= 0.98;

  if (this.velY <= this.speed) {
    this.velY = this.speed;
  }

  this.velX += Math.cos(this.step += .05) * this.stepSize;
  this.y += this.velY;
  this.x += this.velX;
  /* 飞出边界的处理 */

  if (this.x >= canvas.width || this.x <= 0 || this.y >= canvas.height || this.y <= 0) {
    this.reset(canvas.width, canvas.height);
  }
};
/* 飞出边界-放置最顶端继续坠落 */


flakeMove.prototype.reset = function (width, height) {
  this.x = Math.floor(Math.random() * width);
  this.y = 0;
  this.size = Math.random() * this.maxSize + 2;
  this.speed = Math.random() * 1 + this.fallSpeed;
  this.velY = this.speed;
  this.velX = 0;
}; // 渲染雪花-随机形状（此处可修改雪花颜色！！！）


flakeMove.prototype.render = function (ctx) {
  var snowFlake = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
  snowFlake.addColorStop(0, "rgba(255, 255, 255, 0.9)");
  /* 此处是雪花颜色，默认是白色 */

  snowFlake.addColorStop(.5, "rgba(255, 255, 255, 0.5)");
  /* 若要改为其他颜色，请自行查 */

  snowFlake.addColorStop(1, "rgba(255, 255, 255, 0)");
  /* 找16进制的RGB 颜色代码。 */

  ctx.save();
  ctx.fillStyle = snowFlake;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
};
/* 创建雪花-定义形状 */


function createFlakes() {
  var maxFlake = this.maxFlake,
      flakes = this.flakes = [],
      canvas = this.canvas;

  for (var i = 0; i < maxFlake; i++) {
    flakes.push(new flakeMove(canvas.width, canvas.height, this.flakeSize, this.fallSpeed));
  }
}
/* 画雪 */


function drawSnow() {
  var maxFlake = this.maxFlake,
      flakes = this.flakes;
  ctx = this.ctx, canvas = this.canvas, that = this;
  /* 清空雪花 */

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var e = 0; e < maxFlake; e++) {
    flakes[e].update();
    flakes[e].render(ctx);
  }
  /*  一帧一帧的画 */


  this.loop = requestAnimationFrame(function () {
    drawSnow.apply(that);
  });
}
/* 调用及控制方法 */


var snow = new snowFall({
  maxFlake: 60
});
snow.start();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvY2hyaXN0bWFzLXRyZWUvanMvc25vdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQSxDQUFDLFVBQVMsQ0FBVCxFQUFXO0FBQ1IsRUFBQSxDQUFDLENBQUMsRUFBRixDQUFLLElBQUwsR0FBWSxVQUFTLE9BQVQsRUFBaUI7QUFDN0IsUUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEIsR0FBMUIsQ0FBOEI7QUFBQyxrQkFBWSxVQUFiO0FBQXdCLGlCQUFVLE1BQWxDO0FBQTBDLGFBQU87QUFBakQsS0FBOUIsRUFBeUYsSUFBekYsQ0FBOEYsVUFBOUYsQ0FBYjtBQUFBLFFBQ0EsY0FBYyxHQUFJLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxNQUFaLEVBRGxCO0FBQUEsUUFFQSxhQUFhLEdBQUssQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLEtBQVosRUFGbEI7QUFBQSxRQUdBLFFBQVEsR0FBRztBQUNQLE1BQUEsT0FBTyxFQUFPLEVBRFA7QUFFUCxNQUFBLE9BQU8sRUFBTyxFQUZQO0FBR1AsTUFBQSxLQUFLLEVBQVMsSUFIUDtBQUlQLE1BQUEsVUFBVSxFQUFJO0FBQVU7O0FBSmpCLEtBSFg7QUFBQSxRQVNBLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBRixDQUFTLEVBQVQsRUFBYSxRQUFiLEVBQXVCLE9BQXZCLENBVFY7QUFVQSxRQUFJLFFBQVEsR0FBRSxXQUFXLENBQUUsWUFBVTtBQUNyQyxVQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFMLEtBQWdCLGFBQWhCLEdBQWdDLEdBQXhEO0FBQUEsVUFDQSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTCxFQURyQjtBQUFBLFVBRUEsU0FBUyxHQUFHLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLElBQUksQ0FBQyxNQUFMLEtBQWdCLE9BQU8sQ0FBQyxPQUZ0RDtBQUFBLFVBR0EsY0FBYyxHQUFHLGNBQWMsR0FBRyxHQUhsQztBQUFBLFVBSUEsZUFBZSxHQUFHLGlCQUFpQixHQUFHLEdBQXBCLEdBQTBCLElBQUksQ0FBQyxNQUFMLEtBQWdCLEdBSjVEO0FBQUEsVUFLQSxZQUFZLEdBQUcsY0FBYyxHQUFHLEVBQWpCLEdBQXNCLElBQUksQ0FBQyxNQUFMLEtBQWdCLElBTHJEO0FBTUEsTUFBQSxNQUFNLENBQUMsS0FBUCxHQUFlLFFBQWYsQ0FBd0IsTUFBeEIsRUFBZ0MsR0FBaEMsQ0FBb0M7QUFDaEMsUUFBQSxJQUFJLEVBQUUsaUJBRDBCO0FBRWhDLFFBQUEsT0FBTyxFQUFFLFlBRnVCO0FBR2hDLHFCQUFhLFNBSG1CO0FBSWhDLFFBQUEsS0FBSyxFQUFFLE9BQU8sQ0FBQztBQUppQixPQUFwQyxFQUtHLE9BTEgsQ0FLVztBQUNQLFFBQUEsR0FBRyxFQUFFLGNBREU7QUFFUCxRQUFBLElBQUksRUFBRSxlQUZDO0FBR1AsUUFBQSxPQUFPLEVBQUU7QUFIRixPQUxYLEVBU0UsWUFURixFQVNlLFFBVGYsRUFTd0IsWUFBVTtBQUM5QixRQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxNQUFSO0FBQ0gsT0FYRDtBQVlDLEtBbkJ3QixFQW1CdEIsT0FBTyxDQUFDLEtBbkJjLENBQXpCO0FBb0JDLEdBL0JEO0FBZ0NILENBakNELEVBaUNHLE1BakNIOztBQWtDQSxDQUFDLENBQUMsWUFBVTtBQUNSLEVBQUEsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxJQUFMLENBQVU7QUFDTixJQUFBLE9BQU8sRUFBRSxDQURIOztBQUNNO0FBQ1osSUFBQSxPQUFPLEVBQUUsRUFGSDs7QUFFTTtBQUNaLElBQUEsS0FBSyxFQUFFO0FBQUs7O0FBSE4sR0FBVjtBQUtILENBTkEsQ0FBRDtBQU9BOztBQUNBOztBQUNBLFNBQVMsUUFBVCxDQUFrQixJQUFsQixFQUF3QjtBQUNwQjtBQUNBLEVBQUEsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFmO0FBQ0EsT0FBSyxRQUFMLEdBQWdCLElBQUksQ0FBQyxRQUFMLElBQWlCLEdBQWpDO0FBQXdDOztBQUN4QyxPQUFLLFNBQUwsR0FBaUIsSUFBSSxDQUFDLFNBQUwsSUFBa0IsRUFBbkM7QUFBd0M7O0FBQ3hDLE9BQUssU0FBTCxHQUFpQixJQUFJLENBQUMsU0FBTCxJQUFrQixDQUFuQztBQUF3QztBQUMzQztBQUNEOzs7QUFDQSxxQkFBcUIsR0FBRyxNQUFNLENBQUMscUJBQVAsSUFDcEIsTUFBTSxDQUFDLHdCQURhLElBRXBCLE1BQU0sQ0FBQywyQkFGYSxJQUdwQixNQUFNLENBQUMsdUJBSGEsSUFJcEIsTUFBTSxDQUFDLHNCQUphLElBS3BCLFVBQVMsUUFBVCxFQUFtQjtBQUFFLEVBQUEsVUFBVSxDQUFDLFFBQUQsRUFBVyxPQUFPLEVBQWxCLENBQVY7QUFBa0MsQ0FMM0Q7O0FBT0Esb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG9CQUFQLElBQ25CLE1BQU0sQ0FBQyx1QkFEWSxJQUVuQixNQUFNLENBQUMsMEJBRlksSUFHbkIsTUFBTSxDQUFDLHNCQUhZLElBSW5CLE1BQU0sQ0FBQyxxQkFKWDtBQUtBOztBQUNBLFFBQVEsQ0FBQyxTQUFULENBQW1CLEtBQW5CLEdBQTJCLFlBQVU7QUFDakM7QUFDQSxFQUFBLFVBQVUsQ0FBQyxLQUFYLENBQWlCLElBQWpCO0FBQ0E7O0FBQ0EsRUFBQSxZQUFZLENBQUMsS0FBYixDQUFtQixJQUFuQjtBQUNBOztBQUNBLEVBQUEsUUFBUSxDQUFDLEtBQVQsQ0FBZSxJQUFmO0FBQ0gsQ0FQRDtBQVFBOzs7QUFDQSxTQUFTLFVBQVQsR0FBc0I7QUFDbEI7QUFDQSxNQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QixDQUFqQjtBQUNBLEVBQUEsVUFBVSxDQUFDLEVBQVgsR0FBZ0IsVUFBaEI7QUFDQSxFQUFBLFVBQVUsQ0FBQyxLQUFYLEdBQW1CLE1BQU0sQ0FBQyxVQUExQjtBQUNBLEVBQUEsVUFBVSxDQUFDLE1BQVgsR0FBb0IsUUFBUSxDQUFDLElBQVQsQ0FBYyxZQUFsQztBQUNBLEVBQUEsVUFBVSxDQUFDLFlBQVgsQ0FBd0IsT0FBeEIsRUFBaUMsdUVBQWpDO0FBQ0EsRUFBQSxRQUFRLENBQUMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUMsV0FBekMsQ0FBcUQsVUFBckQ7QUFDQSxPQUFLLE1BQUwsR0FBYyxVQUFkO0FBQ0EsT0FBSyxHQUFMLEdBQVcsVUFBVSxDQUFDLFVBQVgsQ0FBc0IsSUFBdEIsQ0FBWDtBQUNBOztBQUNBLEVBQUEsTUFBTSxDQUFDLFFBQVAsR0FBa0IsWUFBVztBQUN6QixJQUFBLFVBQVUsQ0FBQyxLQUFYLEdBQW1CLE1BQU0sQ0FBQyxVQUExQjtBQUNBO0FBQ0gsR0FIRDtBQUlIO0FBQ0Q7OztBQUNBLFNBQVMsU0FBVCxDQUFtQixXQUFuQixFQUFnQyxZQUFoQyxFQUE4QyxTQUE5QyxFQUF5RCxTQUF6RCxFQUFvRTtBQUNoRSxPQUFLLENBQUwsR0FBUyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxNQUFMLEtBQWdCLFdBQTNCLENBQVQ7QUFBb0Q7O0FBQ3BELE9BQUssQ0FBTCxHQUFTLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBSSxDQUFDLE1BQUwsS0FBZ0IsWUFBM0IsQ0FBVDtBQUFvRDs7QUFDcEQsT0FBSyxJQUFMLEdBQVksSUFBSSxDQUFDLE1BQUwsS0FBZ0IsU0FBaEIsR0FBNEIsQ0FBeEM7QUFBb0Q7O0FBQ3BELE9BQUssT0FBTCxHQUFlLFNBQWY7QUFBb0Q7O0FBQ3BELE9BQUssS0FBTCxHQUFhLElBQUksQ0FBQyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLFNBQWpDO0FBQW9EOztBQUNwRCxPQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFBb0Q7O0FBQ3BELE9BQUssSUFBTCxHQUFZLEtBQUssS0FBakI7QUFBb0Q7O0FBQ3BELE9BQUssSUFBTCxHQUFZLENBQVo7QUFBb0Q7O0FBQ3BELE9BQUssUUFBTCxHQUFnQixJQUFJLENBQUMsTUFBTCxLQUFnQixFQUFoQztBQUFvRDs7QUFDcEQsT0FBSyxJQUFMLEdBQVksQ0FBWjtBQUFvRDtBQUN2RDs7QUFDRCxTQUFTLENBQUMsU0FBVixDQUFvQixNQUFwQixHQUE2QixZQUFXO0FBQ3BDLE1BQUksQ0FBQyxHQUFHLEtBQUssQ0FBYjtBQUFBLE1BQ0ksQ0FBQyxHQUFHLEtBQUssQ0FEYjtBQUVBOztBQUNBLE9BQUssSUFBTCxJQUFhLElBQWI7O0FBQ0EsTUFBSSxLQUFLLElBQUwsSUFBYSxLQUFLLEtBQXRCLEVBQTZCO0FBQ3pCLFNBQUssSUFBTCxHQUFZLEtBQUssS0FBakI7QUFDSDs7QUFDRCxPQUFLLElBQUwsSUFBYSxJQUFJLENBQUMsR0FBTCxDQUFTLEtBQUssSUFBTCxJQUFhLEdBQXRCLElBQTZCLEtBQUssUUFBL0M7QUFFQSxPQUFLLENBQUwsSUFBVSxLQUFLLElBQWY7QUFDQSxPQUFLLENBQUwsSUFBVSxLQUFLLElBQWY7QUFDQTs7QUFDQSxNQUFJLEtBQUssQ0FBTCxJQUFVLE1BQU0sQ0FBQyxLQUFqQixJQUEwQixLQUFLLENBQUwsSUFBVSxDQUFwQyxJQUF5QyxLQUFLLENBQUwsSUFBVSxNQUFNLENBQUMsTUFBMUQsSUFBb0UsS0FBSyxDQUFMLElBQVUsQ0FBbEYsRUFBcUY7QUFDakYsU0FBSyxLQUFMLENBQVcsTUFBTSxDQUFDLEtBQWxCLEVBQXlCLE1BQU0sQ0FBQyxNQUFoQztBQUNIO0FBQ0osQ0FoQkQ7QUFpQkE7OztBQUNBLFNBQVMsQ0FBQyxTQUFWLENBQW9CLEtBQXBCLEdBQTRCLFVBQVMsS0FBVCxFQUFnQixNQUFoQixFQUF3QjtBQUNoRCxPQUFLLENBQUwsR0FBUyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxNQUFMLEtBQWdCLEtBQTNCLENBQVQ7QUFDQSxPQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsT0FBSyxJQUFMLEdBQVksSUFBSSxDQUFDLE1BQUwsS0FBZ0IsS0FBSyxPQUFyQixHQUErQixDQUEzQztBQUNBLE9BQUssS0FBTCxHQUFhLElBQUksQ0FBQyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLEtBQUssU0FBdEM7QUFDQSxPQUFLLElBQUwsR0FBWSxLQUFLLEtBQWpCO0FBQ0EsT0FBSyxJQUFMLEdBQVksQ0FBWjtBQUNILENBUEQsQyxDQVFBOzs7QUFDQSxTQUFTLENBQUMsU0FBVixDQUFvQixNQUFwQixHQUE2QixVQUFTLEdBQVQsRUFBYztBQUN2QyxNQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsb0JBQUosQ0FBeUIsS0FBSyxDQUE5QixFQUFpQyxLQUFLLENBQXRDLEVBQXlDLENBQXpDLEVBQTRDLEtBQUssQ0FBakQsRUFBb0QsS0FBSyxDQUF6RCxFQUE0RCxLQUFLLElBQWpFLENBQWhCO0FBQ0EsRUFBQSxTQUFTLENBQUMsWUFBVixDQUF1QixDQUF2QixFQUEwQiwwQkFBMUI7QUFBd0Q7O0FBQ3hELEVBQUEsU0FBUyxDQUFDLFlBQVYsQ0FBdUIsRUFBdkIsRUFBMkIsMEJBQTNCO0FBQXdEOztBQUN4RCxFQUFBLFNBQVMsQ0FBQyxZQUFWLENBQXVCLENBQXZCLEVBQTBCLHdCQUExQjtBQUF3RDs7QUFDeEQsRUFBQSxHQUFHLENBQUMsSUFBSjtBQUNBLEVBQUEsR0FBRyxDQUFDLFNBQUosR0FBZ0IsU0FBaEI7QUFDQSxFQUFBLEdBQUcsQ0FBQyxTQUFKO0FBQ0EsRUFBQSxHQUFHLENBQUMsR0FBSixDQUFRLEtBQUssQ0FBYixFQUFnQixLQUFLLENBQXJCLEVBQXdCLEtBQUssSUFBN0IsRUFBbUMsQ0FBbkMsRUFBc0MsSUFBSSxDQUFDLEVBQUwsR0FBVSxDQUFoRDtBQUNBLEVBQUEsR0FBRyxDQUFDLElBQUo7QUFDQSxFQUFBLEdBQUcsQ0FBQyxPQUFKO0FBQ0gsQ0FYRDtBQVlBOzs7QUFDQSxTQUFTLFlBQVQsR0FBd0I7QUFDcEIsTUFBSSxRQUFRLEdBQUcsS0FBSyxRQUFwQjtBQUFBLE1BQ0ksTUFBTSxHQUFHLEtBQUssTUFBTCxHQUFjLEVBRDNCO0FBQUEsTUFFSSxNQUFNLEdBQUcsS0FBSyxNQUZsQjs7QUFHQSxPQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLFFBQXBCLEVBQThCLENBQUMsRUFBL0IsRUFBbUM7QUFDL0IsSUFBQSxNQUFNLENBQUMsSUFBUCxDQUFZLElBQUksU0FBSixDQUFjLE1BQU0sQ0FBQyxLQUFyQixFQUE0QixNQUFNLENBQUMsTUFBbkMsRUFBMkMsS0FBSyxTQUFoRCxFQUEyRCxLQUFLLFNBQWhFLENBQVo7QUFDSDtBQUNKO0FBQ0Q7OztBQUNBLFNBQVMsUUFBVCxHQUFvQjtBQUNoQixNQUFJLFFBQVEsR0FBRyxLQUFLLFFBQXBCO0FBQUEsTUFDSSxNQUFNLEdBQUcsS0FBSyxNQURsQjtBQUVBLEVBQUEsR0FBRyxHQUFHLEtBQUssR0FBWCxFQUFnQixNQUFNLEdBQUcsS0FBSyxNQUE5QixFQUFzQyxJQUFJLEdBQUcsSUFBN0M7QUFDQTs7QUFDQSxFQUFBLEdBQUcsQ0FBQyxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixNQUFNLENBQUMsS0FBM0IsRUFBa0MsTUFBTSxDQUFDLE1BQXpDOztBQUNBLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsUUFBcEIsRUFBOEIsQ0FBQyxFQUEvQixFQUFtQztBQUMvQixJQUFBLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVSxNQUFWO0FBQ0EsSUFBQSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVUsTUFBVixDQUFpQixHQUFqQjtBQUNIO0FBQ0Q7OztBQUNBLE9BQUssSUFBTCxHQUFZLHFCQUFxQixDQUFDLFlBQVc7QUFDekMsSUFBQSxRQUFRLENBQUMsS0FBVCxDQUFlLElBQWY7QUFDSCxHQUZnQyxDQUFqQztBQUdIO0FBQ0Q7OztBQUNBLElBQUksSUFBSSxHQUFHLElBQUksUUFBSixDQUFhO0FBQUMsRUFBQSxRQUFRLEVBQUM7QUFBVixDQUFiLENBQVg7QUFDQSxJQUFJLENBQUMsS0FBTCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8q5qC35byP5LiAKi9cbihmdW5jdGlvbigkKXtcbiAgICAkLmZuLnNub3cgPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgICB2YXIgJGZsYWtlID0gJCgnPGRpdiBpZD1cInNub3dib3hcIiAvPicpLmNzcyh7J3Bvc2l0aW9uJzogJ2Fic29sdXRlJywnei1pbmRleCc6Jzk5OTknLCAndG9wJzogJy01MHB4J30pLmh0bWwoJyYjMTAwNTI7JyksXG4gICAgZG9jdW1lbnRIZWlnaHQgID0gJChkb2N1bWVudCkuaGVpZ2h0KCksXG4gICAgZG9jdW1lbnRXaWR0aCAgID0gJChkb2N1bWVudCkud2lkdGgoKSxcbiAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgbWluU2l6ZSAgICAgOiAxMCxcbiAgICAgICAgbWF4U2l6ZSAgICAgOiAyMCxcbiAgICAgICAgbmV3T24gICAgICAgOiAxMDAwLFxuICAgICAgICBmbGFrZUNvbG9yICA6IFwiI0FGREFFRlwiIC8qIOatpOWkhOWPr+S7peWumuS5iembquiKseminOiJsu+8jOiLpeimgeeZveiJsuWPr+S7peaUueS4uiNGRkZGRkYgKi9cbiAgICB9LFxuICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHZhciBpbnRlcnZhbD0gc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHN0YXJ0UG9zaXRpb25MZWZ0ID0gTWF0aC5yYW5kb20oKSAqIGRvY3VtZW50V2lkdGggLSAxMDAsXG4gICAgc3RhcnRPcGFjaXR5ID0gMC41ICsgTWF0aC5yYW5kb20oKSxcbiAgICBzaXplRmxha2UgPSBvcHRpb25zLm1pblNpemUgKyBNYXRoLnJhbmRvbSgpICogb3B0aW9ucy5tYXhTaXplLFxuICAgIGVuZFBvc2l0aW9uVG9wID0gZG9jdW1lbnRIZWlnaHQgLSAyMDAsXG4gICAgZW5kUG9zaXRpb25MZWZ0ID0gc3RhcnRQb3NpdGlvbkxlZnQgLSA1MDAgKyBNYXRoLnJhbmRvbSgpICogNTAwLFxuICAgIGR1cmF0aW9uRmFsbCA9IGRvY3VtZW50SGVpZ2h0ICogMTAgKyBNYXRoLnJhbmRvbSgpICogNTAwMDtcbiAgICAkZmxha2UuY2xvbmUoKS5hcHBlbmRUbygnYm9keScpLmNzcyh7XG4gICAgICAgIGxlZnQ6IHN0YXJ0UG9zaXRpb25MZWZ0LFxuICAgICAgICBvcGFjaXR5OiBzdGFydE9wYWNpdHksXG4gICAgICAgICdmb250LXNpemUnOiBzaXplRmxha2UsXG4gICAgICAgIGNvbG9yOiBvcHRpb25zLmZsYWtlQ29sb3JcbiAgICB9KS5hbmltYXRlKHtcbiAgICAgICAgdG9wOiBlbmRQb3NpdGlvblRvcCxcbiAgICAgICAgbGVmdDogZW5kUG9zaXRpb25MZWZ0LFxuICAgICAgICBvcGFjaXR5OiAwLjJcbiAgICB9LGR1cmF0aW9uRmFsbCwnbGluZWFyJyxmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpXG4gICAgfSk7XG4gICAgfSwgb3B0aW9ucy5uZXdPbik7XG4gICAgfTtcbn0pKGpRdWVyeSk7XG4kKGZ1bmN0aW9uKCl7XG4gICAgJC5mbi5zbm93KHsgXG4gICAgICAgIG1pblNpemU6IDUsIC8qIOWumuS5iembquiKseacgOWwj+WwuuWvuCAqL1xuICAgICAgICBtYXhTaXplOiA1MCwvKiDlrprkuYnpm6roirHmnIDlpKflsLrlr7ggKi9cbiAgICAgICAgbmV3T246IDMwMCAgLyog5a6a5LmJ5a+G6ZuG56iL5bqm77yM5pWw5a2X6LaK5bCP6LaK5a+G6ZuGICovXG4gICAgfSk7XG59KTtcbi8q5qC35byP5LqMKi9cbi8qIOaOp+WItuS4i+mbqiAqL1xuZnVuY3Rpb24gc25vd0ZhbGwoc25vdykge1xuICAgIC8qIOWPr+mFjee9ruWxnuaApyAqL1xuICAgIHNub3cgPSBzbm93IHx8IHt9O1xuICAgIHRoaXMubWF4Rmxha2UgPSBzbm93Lm1heEZsYWtlIHx8IDIwMDsgICAvKiDmnIDlpJrniYfmlbAgKi9cbiAgICB0aGlzLmZsYWtlU2l6ZSA9IHNub3cuZmxha2VTaXplIHx8IDEwOyAgLyog6Zuq6Iqx5b2i54q2ICovXG4gICAgdGhpcy5mYWxsU3BlZWQgPSBzbm93LmZhbGxTcGVlZCB8fCAxOyAgIC8qIOWdoOiQvemAn+W6piAqL1xufVxuLyog5YW85a655YaZ5rOVICovXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7IHNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7IH07XG5cbmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cub0NhbmNlbEFuaW1hdGlvbkZyYW1lO1xuLyog5byA5aeL5LiL6ZuqICovXG5zbm93RmFsbC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpe1xuICAgIC8qIOWIm+W7uueUu+W4gyAqL1xuICAgIHNub3dDYW52YXMuYXBwbHkodGhpcyk7XG4gICAgLyog5Yib5bu66Zuq6Iqx5b2i54q2ICovXG4gICAgY3JlYXRlRmxha2VzLmFwcGx5KHRoaXMpO1xuICAgIC8qIOeUu+mbqiAqL1xuICAgIGRyYXdTbm93LmFwcGx5KHRoaXMpXG59XG4vKiDliJvlu7rnlLvluIMgKi9cbmZ1bmN0aW9uIHNub3dDYW52YXMoKSB7XG4gICAgLyog5re75YqgRG9t57uT54K5ICovXG4gICAgdmFyIHNub3djYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHNub3djYW52YXMuaWQgPSBcInNub3dmYWxsXCI7XG4gICAgc25vd2NhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHNub3djYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG4gICAgc25vd2NhbnZhcy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInBvc2l0aW9uOmFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHotaW5kZXg6IDE7IHBvaW50ZXItZXZlbnRzOiBub25lO1wiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQoc25vd2NhbnZhcyk7XG4gICAgdGhpcy5jYW52YXMgPSBzbm93Y2FudmFzO1xuICAgIHRoaXMuY3R4ID0gc25vd2NhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLyog56qX5Y+j5aSn5bCP5pS55Y+Y55qE5aSE55CGICovXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNub3djYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgLyogc25vd2NhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKi9cbiAgICB9XG59XG4vKiDpm6rov5Dliqjlr7nosaEgKi9cbmZ1bmN0aW9uIGZsYWtlTW92ZShjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBmbGFrZVNpemUsIGZhbGxTcGVlZCkge1xuICAgIHRoaXMueCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNhbnZhc1dpZHRoKTsgICAvKiB45Z2Q5qCHICovXG4gICAgdGhpcy55ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2FudmFzSGVpZ2h0KTsgIC8qIHnlnZDmoIcgKi9cbiAgICB0aGlzLnNpemUgPSBNYXRoLnJhbmRvbSgpICogZmxha2VTaXplICsgMjsgICAgICAgICAgLyog5b2i54q2ICovXG4gICAgdGhpcy5tYXhTaXplID0gZmxha2VTaXplOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIOacgOWkp+W9oueKtiAqL1xuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMSArIGZhbGxTcGVlZDsgICAgICAgICAvKiDlnaDokL3pgJ/luqYgKi9cbiAgICB0aGlzLmZhbGxTcGVlZCA9IGZhbGxTcGVlZDsgICAgICAgICAgICAgICAgICAgICAgICAgLyog5Z2g6JC96YCf5bqmICovXG4gICAgdGhpcy52ZWxZID0gdGhpcy5zcGVlZDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIFnmlrnlkJHpgJ/luqYgKi9cbiAgICB0aGlzLnZlbFggPSAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogWOaWueWQkemAn+W6piAqL1xuICAgIHRoaXMuc3RlcFNpemUgPSBNYXRoLnJhbmRvbSgpIC8gMzA7ICAgICAgICAgICAgICAgICAvKiDmraXplb8gKi9cbiAgICB0aGlzLnN0ZXAgPSAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyog5q2l5pWwICovXG59XG5mbGFrZU1vdmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB4ID0gdGhpcy54LFxuICAgICAgICB5ID0gdGhpcy55O1xuICAgIC8qIOW3puWPs+aRhuWKqCjkvZnlvKYpICovXG4gICAgdGhpcy52ZWxYICo9IDAuOTg7XG4gICAgaWYgKHRoaXMudmVsWSA8PSB0aGlzLnNwZWVkKSB7XG4gICAgICAgIHRoaXMudmVsWSA9IHRoaXMuc3BlZWRcbiAgICB9XG4gICAgdGhpcy52ZWxYICs9IE1hdGguY29zKHRoaXMuc3RlcCArPSAuMDUpICogdGhpcy5zdGVwU2l6ZTtcblxuICAgIHRoaXMueSArPSB0aGlzLnZlbFk7XG4gICAgdGhpcy54ICs9IHRoaXMudmVsWDtcbiAgICAvKiDpo57lh7rovrnnlYznmoTlpITnkIYgKi9cbiAgICBpZiAodGhpcy54ID49IGNhbnZhcy53aWR0aCB8fCB0aGlzLnggPD0gMCB8fCB0aGlzLnkgPj0gY2FudmFzLmhlaWdodCB8fCB0aGlzLnkgPD0gMCkge1xuICAgICAgICB0aGlzLnJlc2V0KGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICB9XG59O1xuLyog6aOe5Ye66L6555WMLeaUvue9ruacgOmhtuerr+e7p+e7reWdoOiQvSAqL1xuZmxha2VNb3ZlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aWR0aCk7XG4gICAgdGhpcy55ID0gMDtcbiAgICB0aGlzLnNpemUgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5tYXhTaXplICsgMjtcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDEgKyB0aGlzLmZhbGxTcGVlZDtcbiAgICB0aGlzLnZlbFkgPSB0aGlzLnNwZWVkO1xuICAgIHRoaXMudmVsWCA9IDA7XG59O1xuLy8g5riy5p+T6Zuq6IqxLemaj+acuuW9oueKtu+8iOatpOWkhOWPr+S/ruaUuembquiKseminOiJsu+8ge+8ge+8ge+8iVxuZmxha2VNb3ZlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihjdHgpIHtcbiAgICB2YXIgc25vd0ZsYWtlID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHRoaXMueCwgdGhpcy55LCAwLCB0aGlzLngsIHRoaXMueSwgdGhpcy5zaXplKTtcbiAgICBzbm93Rmxha2UuYWRkQ29sb3JTdG9wKDAsIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpXCIpOyAgLyog5q2k5aSE5piv6Zuq6Iqx6aKc6Imy77yM6buY6K6k5piv55m96ImyICovXG4gICAgc25vd0ZsYWtlLmFkZENvbG9yU3RvcCguNSwgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIik7IC8qIOiLpeimgeaUueS4uuWFtuS7luminOiJsu+8jOivt+iHquihjOafpSAqL1xuICAgIHNub3dGbGFrZS5hZGRDb2xvclN0b3AoMSwgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIpOyAgICAvKiDmib4xNui/m+WItueahFJHQiDpopzoibLku6PnoIHjgIIgKi9cbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBzbm93Rmxha2U7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMuc2l6ZSwgMCwgTWF0aC5QSSAqIDIpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbn07XG4vKiDliJvlu7rpm6roirEt5a6a5LmJ5b2i54q2ICovXG5mdW5jdGlvbiBjcmVhdGVGbGFrZXMoKSB7XG4gICAgdmFyIG1heEZsYWtlID0gdGhpcy5tYXhGbGFrZSxcbiAgICAgICAgZmxha2VzID0gdGhpcy5mbGFrZXMgPSBbXSxcbiAgICAgICAgY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXhGbGFrZTsgaSsrKSB7XG4gICAgICAgIGZsYWtlcy5wdXNoKG5ldyBmbGFrZU1vdmUoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCB0aGlzLmZsYWtlU2l6ZSwgdGhpcy5mYWxsU3BlZWQpKVxuICAgIH1cbn1cbi8qIOeUu+mbqiAqL1xuZnVuY3Rpb24gZHJhd1Nub3coKSB7XG4gICAgdmFyIG1heEZsYWtlID0gdGhpcy5tYXhGbGFrZSxcbiAgICAgICAgZmxha2VzID0gdGhpcy5mbGFrZXM7XG4gICAgY3R4ID0gdGhpcy5jdHgsIGNhbnZhcyA9IHRoaXMuY2FudmFzLCB0aGF0ID0gdGhpcztcbiAgICAvKiDmuIXnqbrpm6roirEgKi9cbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgZm9yICh2YXIgZSA9IDA7IGUgPCBtYXhGbGFrZTsgZSsrKSB7XG4gICAgICAgIGZsYWtlc1tlXS51cGRhdGUoKTtcbiAgICAgICAgZmxha2VzW2VdLnJlbmRlcihjdHgpO1xuICAgIH1cbiAgICAvKiAg5LiA5bin5LiA5bin55qE55S7ICovXG4gICAgdGhpcy5sb29wID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICBkcmF3U25vdy5hcHBseSh0aGF0KTtcbiAgICB9KTtcbn1cbi8qIOiwg+eUqOWPiuaOp+WItuaWueazlSAqL1xudmFyIHNub3cgPSBuZXcgc25vd0ZhbGwoe21heEZsYWtlOjYwfSk7XG5zbm93LnN0YXJ0KCk7XG4iXX0=
