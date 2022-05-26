/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if(s.length==0)
        retuen [[]];
    
    const isPalindrome = str => str == str.split('').reverse().join('');
    
    var answer=[],subAns=[];
    function partPalindrome(s,subAns,answer)
    {
        if(s.length==0)
            {
                answer.push([...subAns]);
                return;
            }
        for(let i=1;i<=s.length;i++)
            {
                prefix=s.substring(0,i);
                postfix=s.substring(i);
                if(isPalindrome(prefix))
                    {
                        subAns.push(prefix);
                        partPalindrome(postfix,subAns,answer);
                        subAns.pop(prefix);
                    }
            }
        return;
    }
    
    partPalindrome(s,subAns,answer);
    return answer;
    
    
};