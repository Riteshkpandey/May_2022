/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let sDict={},pDict={},ans=[];
    for(let i=0;i<p.length;i++)
        {
            if(p[i] in pDict)
                pDict[p[i]]+=1;
            else
                pDict[p[i]]=1;
        }
    for(let i=0;i<p.length;i++)
        {
            if(s[i] in sDict)
                sDict[s[i]]+=1;
            else
                sDict[s[i]]=1;
        }
    let l=0,r=p.length;
    function compare(dict1,dict2,p)
    {
        for(let i=0;i<p.length;i++)
            {
                let temp=p[i];
                if(dict1[temp]!=dict2[temp])
                    return false;
            }
        return true;
    }
    while(l<s.length-r)
        {
            if(compare(pDict,sDict,p))
                {
                    ans.push(l);
                }
            let addChar=s[l+r];
            let removeChar=s[l];
            if(sDict[removeChar]==1)
                {
                 delete sDict[removeChar];   
                }
            else
                sDict[removeChar]-=1;
            if(addChar in sDict)
                sDict[addChar]+=1;
            else
                sDict[addChar]=1;
            l+=1;
        }
    if(compare(pDict,sDict,p))
                {
                    ans.push(l);
                }
    return ans;
    
    
};