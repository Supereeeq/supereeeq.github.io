<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p1>ax+b=c</p1>
    <form method="POST">
        <label for="a">a</label>
        <input type="number" name="a" id="a">
        <br><br>
        <label for="b">b</label>
        <input type="number" name="b" id="b">
        <br><br>
        <label for="c">c</label>
        <input type="number" name="c" id="c">
        <input type="submit" value="Wyślij">
</form>
<?php
    $a=$_POST['a'];
    $b=$_POST['b'];
    $c=$_POST['c'];

    if((!empty($a) || !$a==0) && (!empty($b) || $b==0) && (!empty($c) || $c==0))
    {

            $x=($c-$b)/$a;
            echo("ROZWIĄZANIE RÓWNANIA <br>
                $a x+ $b = $c <br>
                jest<br>
                x = $x");

    }
    else
    {
        if($a==0)
        {
            if($b==$c)
            {
            echo("Równanie tożsamościowe");
            }
            else
            {
                echo("Równanie sprzeczne");
            }

        }
    }
?>
    
</body>
</html>