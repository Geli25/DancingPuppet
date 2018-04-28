function Rain(x,y) {
	this.x = random(windowWidth);
	this.y = random(-100, -600);
  
    this.z = random(1,3);
	  
	this.speed = random(1, 3);
	  this.gravity = random(1,2);
    this.len = random(3, 10);
	  this.rgb = [random(255), random(255)];
	
	this.fall = function() {
	  this.y += this.speed;
	  this.y += this.gravity;
	}
	
	this.reachedBottom = function() {
	  if(this.y > windowHeight) {
			  return true;
	  }
		  else {
			  return false;
		  }
	}
  
	this.dance = function(){
	  stroke(r,g,b);
	  line(this.x,this.y,this.x,random(0,500));
  }
  
	this.show = function() {
	  strokeWeight(this.z);
	  stroke(this.rgb[1], this.rgb[1], this.rgb[0]);
      line(this.x, this.y, this.x, this.y + this.len);		
	}
  }