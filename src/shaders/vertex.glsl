precision mediump float;
//float calculation precision (higher values may not work, also does not work without this declaration)

varying vec3 vColor;

void main() {
  vColor = color;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_PointSize = 10.0 / -mvPosition.z; //perspective-correct point size (sizeAttenuation)
  gl_Position = projectionMatrix * mvPosition;
}