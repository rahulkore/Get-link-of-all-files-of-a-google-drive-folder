function myFunction() {
    var ss=SpreadsheetApp.getActiveSpreadsheet();
    var s=ss.getActiveSheet();
    var c=s.getActiveCell();
    var fldr=DriveApp.getFolderById("1e3CBF4cLuywjxpzJ1tSjAEk0f9p3QRkS");
    var files=fldr.getFiles();
    var names=[],f,str;
    while (files.hasNext()) {
      f=files.next();
      str='=hyperlink("' + f.getUrl() + '","' + f.getName() + '")';
      names.push([str]);
    }
    s.getRange(c.getRow(),c.getColumn(),names.length).setFormulas(names);
  }
  