var doc = app.activeDocument;
doc.stories.everyItem().convertBulletsAndNumberingToText();
doc.stories.everyItem().tables.everyItem().convertBulletsAndNumberingToText();
alert("List2para is applied successfully");