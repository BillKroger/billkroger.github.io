function Particle( x, y, radius ) {
    this.init( x, y, radius );
}

    Particle.prototype = {

    init: function( x, y, radius ) {

    this.alive = true;

    this.radius = radius || 10;
    this.wander = 0.15;
    this.theta = random( TWO_PI );
    this.drag = 0.92;
    this.color = 'rgba(198,164,55,0.5)';

    this.x = x || 0.0;
    this.y = y || 0.0;

    this.vx = 0.0;
    this.vy = 0.0;
},

    move: function() {

    this.x += this.vx;
    this.y += this.vy;

    this.vx *= this.drag;
    this.vy *= this.drag;

    this.theta += random( -0.5, 0.5 ) * this.wander;
    this.vx += sin( this.theta ) * 0.1;
    this.vy += cos( this.theta ) * 0.1;

    this.radius *= 0.96;
    this.alive = this.radius > 0.5;
},

    draw: function( ctx ) {

    ctx.beginPath();
    ctx.arc( this.x, this.y, this.radius, 0, TWO_PI );
    ctx.fillStyle = this.color;
    ctx.fill();
}
};

    let MAX_PARTICLES = 200;
    let COLORS = [ 'rgba(198,164,55,0.5)', 'rgba(140,116,38,0.5)', 'rgba(80,67,22,0.5)', 'rgba(211,184,95,0.5)', 'rgba(228,211,155,0.5)' ];

    let particles = [];
    let pool = [];

    let introAnim = Sketch.create({
    container: document.getElementById( 'top-canvas' ),
    retina: 'auto'
});

    introAnim.setup = function() {

    let i, x, y;

    for ( i = 0; i < 20; i++ ) {
    x = ( introAnim.width * 0.5 ) + random( -100, 100 );
    y = ( introAnim.height * 0.5 ) + random( -100, 100 );
    introAnim.spawn( x, y );
}
};

    introAnim.spawn = function( x, y ) {

    let particle, theta, force;

    if ( particles.length >= MAX_PARTICLES )
    pool.push( particles.shift() );

    particle = pool.length ? pool.pop() : new Particle();
    particle.init( x, y, random( 5, 40 ) );

    particle.wander = random( 0.5, 2.0 );
    particle.color = random( COLORS );
    particle.drag = random( 0.9, 0.99 );

    theta = random( TWO_PI );
    force = random( 2, 8 );

    particle.vx = sin( theta ) * force;
    particle.vy = cos( theta ) * force;

    particles.push( particle );
};

    introAnim.update = function() {

    let i, particle;

    for ( i = particles.length - 1; i >= 0; i-- ) {

    particle = particles[i];

    if ( particle.alive ) particle.move();
    else pool.push( particles.splice( i, 1 )[0] );
}
};

    introAnim.draw = function() {

    introAnim.globalCompositeOperation  = 'lighter';

    for ( let i = particles.length - 1; i >= 0; i-- ) {
    particles[i].draw( introAnim );
}
};

    introAnim.mousemove = function() {

    let touch, max, i, j, n;

    for ( i = 0, n = introAnim.touches.length; i < n; i++ ) {

    touch = introAnim.touches[i], max = random( 1, 4 );
    for ( j = 0; j < max; j++ ) {
    introAnim.spawn( touch.x, touch.y );
}

}
};