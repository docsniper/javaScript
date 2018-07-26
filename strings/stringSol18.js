function count(main_str, sub_str) 
    { var i,c=0;
     var tarr = new Array();
     tarr= main_str.split(" ");

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }
      for(i=0;i<tarr.length-1;i++)
        {
          if(tarr[i]==sub_str)
            {
              c++;
            }
        }
     return c;
    }
console.log(count("the kk quick kk brown fox jumps kk over the lazy dog", 'kk'));



