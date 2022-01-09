/**
 * 判断着色器是否编译连接成功
 * @param {*} gl webgl上下文
 * @param {*} VSHADER_SOURCE  顶点着色器GLSL代码
 * @param {*} FSHADER_SOURCE  片元着色器GLSL代码
 * @returns 
 */
export function initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE) {
    // 创建顶点着色器
    const vShader = gl.createShader(gl.VERTEX_SHADER);
    // 向顶点着色器中添加GLSL程序代码
    gl.shaderSource(vShader, VSHADER_SOURCE);
    // 编译GLSL顶点着色器，使其成为为二进制数据
    gl.compileShader(vShader);

    // 创建片元着色器
    const fShader = gl.createShader(gl.FRAGMENT_SHADER);
    // 向片元着色器中添加GLSL程序代码
    gl.shaderSource(fShader, FSHADER_SOURCE);
    // 编译GLSL片元着色器，使其成为为二进制数据
    gl.compileShader(fShader);

    // 创建和初始化一个 WebGLProgram 对象
    const program = gl.createProgram()
    gl.attachShader(program, vShader) // 添加顶点着色器
    gl.attachShader(program, fShader) // 添加片元着色器
    gl.linkProgram(program) // 连接 program 中的着色器

    let flag = true;

    // 判断顶点着色器是否编译成功
    if (!gl.getShaderParameter(vShader, gl.COMPILE_STATUS)) {
        console.log(`顶点着色器编译失败，错误信息--> ${gl.getShaderInfoLog(vShader)}`);
        flag = false;
    }

    // 判断片元着色器是否编译成功
    if (!gl.getShaderParameter(fShader, gl.COMPILE_STATUS)) {
        console.log(`片元着色器编译失败，错误信息--> ${gl.getShaderInfoLog(fShader)}`);
        flag = false;
    }

    // 判断着色器的连接是否成功
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.log(`着色器连接失败，错误信息--> ${gl.getProgramInfoLog(program)}`)
        flag = false;
    } else {
        gl.useProgram(program) // 告诉 WebGL 用这个 program 进行渲染
    }

    return flag;
}