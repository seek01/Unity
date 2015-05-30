#pragma strict

function Start () {



}

function Update () {

//var x : float = Input.GetAxis("Horizontal");
//transform.Translate(x * 0.3, 0, 0);

//var z : float = Input.GetAxis("Horizontal");
//transform.Translate(z * 0, 0, 0.3);


if(Input.GetKey("j")){ 
transform.position.x -= 0.1;}

if(Input.GetKey("l")){
transform.position.x += 0.1;}

if(Input.GetKey("i")){
transform.position.z += 0.1;}

if(Input.GetKey("k")){
transform.position.z -= 0.1;}

if(Input.GetKey("a")){
transform.position.x -= 0.5;}

if(Input.GetKey("d")){
transform.position.x += 0.5;}

if(Input.GetKey("w")){
transform.position.y += 0.5;}

if(Input.GetKey("s")){
transform.position.y -= 0.5;}

if( transform.position.x>6) transform.position.x=6;
if( transform.position.x<-1) transform.position.x=-1;
if( transform.position.z>6) transform.position.z=6;
if( transform.position.z<-2) transform.position.z=-2;
if( transform.position.y>5) transform.position.y=5;
if( transform.position.y<-0.2) transform.position.y=-0.2;

}