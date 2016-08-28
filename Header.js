/* Google search bar */
(function() {
  var cx = '005579885767466475821:oqt5wpxqlt8';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();

/* Template for the page's header.  You just have to substitute
   for @TITLE@ and @SUBTITLE@ and then print the result at the
   top of the <body>. */
headerTemplate = '<table nosave="" width="100%" border="1" cellpadding="10">' 
  + '<tbody>' 
  + '<tr nosave="">' 
  + '<td nosave="" align="center" valign="middle">' 
  + '<div align="center"> </div>' 
  + '<center>' 
  + '<div align="center"> </div>' 
  + '<table nosave="" width="100%">' 
  + '<tbody>' 
  + '<tr nosave="">' 
  + '<td nosave="" align="center" valign="middle">' 
  + '<div align="center"> </div>' 
  + '<table nosave="">' 
  + '<tbody>' 
  + '<tr align="center">' 
  + '<td><a href="index.html"><small>Home (AGC)</small></a><br>' 
  + '</td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td><a href="yaAGS.html"><small>AGS</small>' + '</a></td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td><a href="LVDC.html"><small>LVDC</small></a><br>' 
  + '</td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td><a href="Gemini.html"><small>Gemini</small></a><br>' 
  + '</td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td> <a href="download.html"><small>Downloads</small></a>' 
  + '</td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td> <a href="links.html"><small>Document library</small></a> </td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td> <a href="changes.html"><small>Change log</small></a>' 
  + '</td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td> <a href="https://github.com/rburkey2005/virtualagc/issues"><small>Bug and issues</small></a> </td>' 
  + '</tr>' 
  + '<tr nosave="" align="center">' 
  + '<td nosave=""> <a href="developer.html"><small>Developer info<small>/</a> </td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td valign="top"><a href="https://github.com/rburkey2005/virtualagc"><small>GitHub</small></a></td>' 
  + '</tr>' 
  + '</tbody>' 
  + '</table>' 
  + '<div align="center"> </div>' 
  + '</td>' 
  + '<td nosave="" align="center" valign="top">' 
  + '<center><b><font color="#999900"><font size="+3">Virtual AGC &mdash; AGS &mdash; LVDC &mdash; Gemini</font></font></b></center>' 
  + '<br>' 
  + '<b><font color="#000000"><font size="+3">@TITLE@<br>' 
  + '<small>@SUBTITLE@</small><br>' 
  + '<br>' 
  + '</font></font></b></td>' 
  + '<td nosave="" align="center" valign="middle">' 
  + '<div align="center"> </div>' 
  + '<table nosave="">' 
  + '<tbody>' 
  + '<tr align="center">' 
  + '<td style="vertical-align: top;"><a href="faq.html"><small>FAQ</small></a></td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td><a href="yaAGC.html"><small>yaAGC</small></a></td>' 
  + '</tr>' 
  + '<tr nosave="" align="center">' 
  + '<td nosave=""><a href="yaYUL.html"><small>yaYUL</small></a></td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td><a href="yaDSKY.html"><small>yaDSKY</small></a></td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td><a href="yaTelemetry.html"><small>yaOtherStuff<small></a><br>' 
  + '</td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td><a href="Luminary.html"><small>Luminary</small></a></td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td><a href="Colossus.html"><small>Colossus</small><br>' 
  + '</a></td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td><a href="Block1.html"><small>Block 1 AGC Language</small></a></td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td style="vertical-align: top;"><small><a href="assembly_language_manual.html">Block 2 AGC Language</a></small><br>' 
  + '</td>' 
  + '</tr>' 
  + '<tr align="center">' 
  + '<td><a href="Pultorak.html"><small>Physical Implementations<small><br>' 
  + '</a></td>' 
  + '</tr>' 
  + '</tbody>' 
  + '</table>' 
  + '<div align="center"> </div>' 
  + '</td>' 
  + '</tr>' 
  + '</tbody>' 
  + '</table>' 
  + '<div align="center"> </div>' 
  + '</center>' 
  + '<center>' 
  + '<div align="left"> </div>' 
  + '</center>' 
  + '<div align="left"> </div>' 
  + '</td>' 
  + '<td nosave="" align="center" height="200" valign="middle" width="200">' 
  + '<center><img src="ApolloPatch2.png" alt="" align="middle" height="200" hspace="0" vspace="0" width="200" border="0"> </center>' 
  + '</td>' 
  + '</tr>' 
  + '<tr>' 
  + '<td colspan="2" rowspan="1"><gcse:search></gcse:search><br>' 
  + '</td>' 
  + '</tr>' 
  + '</tbody>' 
  + '</table>';

