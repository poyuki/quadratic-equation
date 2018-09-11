module.exports = function solveEquation(equation) {

    let abc,bc,a,b,c,x1,x2;
    abc=equation.split('* x^2');
    a=parseInt((abc[0].trim()).replace(' ',''));
    bc=abc[1].split('* x');
    b=parseInt((bc[0].trim()).replace(' ',''));
    c=parseInt((bc[1].trim()).replace(' ',''));
    x1=Math.round(-b-Math.sqrt((b**2-(4*a*c))))/(2*a);
    x2=Math.round(-b+Math.sqrt((b**2-(4*a*c))))/(2*a);
    return x1>x2?[x2,x1]:[x1,x2];
};
