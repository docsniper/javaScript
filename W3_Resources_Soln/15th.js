
-var obj={Name:"Mohit",Color:"Grey"};
-var pair=[],val=[],key=[];
-
-val=Object.values(obj);
-key=Object.keys(obj);
-var len=val.length;
-var i=0;
-for(i=0;i<len;i++)
- {
-   pair[i] = [key[i], val[i]];
- }
-console.log(pair); 

