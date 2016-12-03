table = {
  headers: ["","monday", "tuesday", "wednesday", "thursday"],
  times: {
    "9": [
      "fido",
      "",
      "",
      ""
    ],
    "10": [
      "",
      "bob",
      "jim",
      ""
    ]
  }  
}

function printTable(table) {
  var colWidth = 20;
  var headers = "";
  for (var i = 0; i < table.headers.length; i++) {
    var output = table.headers[i];
    var strWidth = output.length;
    output = output + ("\xa0".repeat(colWidth - strWidth));
    headers += output;
  }
  console.log(headers);

  for (time in table.times) {
    var row = "";
    var strWidth = time.length;
    row += time + ("\xa0".repeat(colWidth - strWidth));
    console.log(row);
  };
}

printTable(table);
