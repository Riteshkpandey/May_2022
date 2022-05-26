/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length==0 || s.length==1) return false;
    let stack=[];
    for(let i of s)
        {
            if(i=='(')
                stack.push(')');
            else if(i=='{')
                stack.push('}');
            else if(i=='[')
                stack.push(']');
            else
                {
                    if(stack.pop()!=i)
                        return false;
                }
                        
        }
    if(stack.length>0)
        return false;
    return true;
};