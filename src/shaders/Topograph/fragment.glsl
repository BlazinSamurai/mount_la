uniform float uTime;
uniform vec3 uColorBase;
uniform vec3 uColorLine;
varying vec2 vUv;

float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float noise (vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f*f*(3.0-2.0*f);
    
    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
  vec2 st = vUv * 8.0; // Higher scale for more detail
  float n = noise(st * 1.02);

  // 1. Create the repeating line base
  float lineCount = 12.0;
  float v = n * lineCount;
  float f = fract(v);

  // 2. Determine line thickness (very thin for that map look)
  float df = fwidth(v); 
  float line = smoothstep(df * 1.5, 0.0, abs(f - 0.5));

  // 3. Create the dashed effect for every 4th line
  // We check if the "elevation" floor is divisible by 4
  bool isIndexLine = mod(floor(v), 4.0) == 0.0;
  float dash = step(0.5, fract(vUv.x * 20.0 + vUv.y * 20.0)); // Simple diagonal dash pattern

  if (isIndexLine) {
    line *= dash; // Apply dash only to index lines
  }

  vec3 color = mix(uColorBase, uColorLine, line);
  gl_FragColor = vec4(color, 1.0);
}