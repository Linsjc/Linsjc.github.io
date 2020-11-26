document.writeln("<!--[if IE]><script src=\"js/jquery/jquery-1.11.3.min.js\"></script><script src=\"js/jquery/html5.js\"></script><![endif]-->")
document.writeln("<!--[if !IE]><!--><script src=\"js/jquery/jquery-2.1.4.min.js\"></script><!--<![endif]-->");
<script src="js/jquery/jquery.js"></script>
var js=document.scripts;
js=js[js.length-1].src.substring(0,js[js.length-1].src.lastIndexOf("/")+1);
document.writeln("<!--[if IE]><script src='"+js+"jquery-1.11.3.min.js'></script><script src='"+js+"html5.js'></script><![endif]-->");
document.writeln("<!--[if !IE]><!--><script src='"+js+"jquery-2.1.4.min.js'></script><!--<![endif]-->");
