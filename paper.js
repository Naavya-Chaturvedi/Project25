class paper{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r

		var options={
			isStatic:false,
            restitution:0.3,
			density:1.2,
			friction:0
		}
        this.image=loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipseMode(RADIUS);
			ellipse(0,0,this.r);
			pop()
            imageMode(CENTER);
			image(this.image, 0,this.paper,this.paper,this.paperWidth, this.paper)

}
}