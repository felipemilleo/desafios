<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    enter any word:
    <input type="text" id="text">
    <input type="submit" value="check" onclick="palindrome()">

    <script type="text/javascript">
        function palindrome() {
            revString = ""; //reverse string
            inpString = document.getElementById("text").value
            i = inpString.length
            for (var j=i; j>=0; j--) {
                revString = revString + inpString.charAt(j);
                document.write(revString+"<br>");
            }
            if (inpString === revString) {
    alert(inpString + " is a palindrome.");
}
else {
    alert(inpString + "is not palindrome.")
}
}
    </script>
</body>


</html> 
