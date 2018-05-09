    
        function reverseString(str) {
            var strReverso = "";
            for (let i = str.length - 1; i >= 0; i--) {
                strReverso += str[i];
            }
            return strReverso;
        }
        reverseString("hello")
  
