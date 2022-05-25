/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let s1Dict={},s2Dict={},ans=[];
    for(let i of s1)
        {
            if(i in s1Dict)
                s1Dict[i]+=1;
            else
                s1Dict[i]=1;
        }
    for(let i=0;i<s1.length;i++)
        {
            if(s2[i] in s2Dict)
                s2Dict[s2[i]]+=1;
            else
                s2Dict[s2[i]]=1;
        }
    let l=0,r=s1.length;
    function compare(dict1,dict2,s1)
    {
        for(let i=0;i<s1.length;i++)
            {
                if(dict1[s1[i]]!=dict2[s1[i]])
                    return false;
                
            }
        return true;
    }
    while(l<s2.length-r)
        {
            if(compare(s1Dict,s2Dict,s1))
                return true;
            let addChar=s2[l+r];
            let removeChar=s2[l];
            if(s2Dict[removeChar]==1)
                delete s2Dict[removeChar];
            else
                s2Dict[removeChar]-=1;
            if(addChar in s2Dict)
                s2Dict[addChar]+=1;
            else
                s2Dict[addChar]=1;
            l+=1;
                
        }
    if(compare(s1Dict,s2Dict,s1))
                return true;
    return false;
    
};