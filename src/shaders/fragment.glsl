precision mediump float;
//float calculation precision (higher values may not work, also does not work without this declaration)

varying vec3 vColor;

void main() {
  //make points circular
  vec2 c = gl_PointCoord - vec2(0.5);
  float r = length(c);
  if (r > 0.5) discard;

  gl_FragColor = vec4(vColor, 1.0);
}