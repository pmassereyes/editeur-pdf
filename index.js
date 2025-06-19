const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function remplirCerfa() {
  const existingPdfBytes = fs.readFileSync('cerfa_10103-13.pdf');
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const form = pdfDoc.getForm();

//L'apprenti
form.getTextField('Zone de texte 8').setText("Patron");
form.getTextField('Zone de texte 8_14').setText("11");
form.getTextField('Zone de texte 8_13').setText("Rue de l'Arsenal");
form.getTextField('Zone de texte 8_4').setText("");
form.getTextField('Zone de texte 8_9').setText("75011");
form.getTextField('Zone de texte 8_10').setText("Paris");
form.getTextField('Zone de texte 8_11').setText("0123456789");
form.getTextField('Zone de texte 8_12').setText("contact@patron.fr");
form.getTextField('Zone de texte 8_2').setText("12345678900012");
form.getTextField('Zone de texte 8_3').setText("Employeur privé");
form.getTextField('Zone de texte 8_7').setText("6201Z"); 
form.getTextField('Zone de texte 8_5').setText("10"); 
form.getTextField('Zone de texte 8_6').setText("9999");

//L'employeur
form.getTextField('Zone de texte 8_15').setText("Masse-Reyes")
form.getTextField('Zone de texte 8_17').setText("Pablo")
form.getTextField('Zone de texte 8_18').setText("2 69 05 49 588 157 80")
form.getTextField('Zone de texte 8_19').setText("52c")
form.getTextField('Zone de texte 8_20').setText("Rue Victor Hugo")
form.getTextField('Zone de texte 8_22').setText("93500")
form.getTextField('Zone de texte 8_23').setText("Pantin")
form.getTextField('Zone de texte 8_24').setText("07 67 22 04 26")
form.getTextField('Zone de texte 8_25').setText("pablomassereyes@gmail.com")

form.getTextField('Zone de texte 21_7').setText("04")
form.getTextField('Zone de texte 21_8').setText("09")
form.getTextField('Zone de texte 21_9').setText("2006")
form.getTextField('Zone de texte 8_26').setText("75012")
form.getTextField('Zone de texte 8_27').setText("Paris")
form.getTextField('Zone de texte 8_33').setText("Français")
form.getTextField('Zone de texte 8_28').setText("Etudiant")
form.getTextField('Zone de texte 8_29').setText("BST SIO")
form.getTextField('Zone de texte 8_30').setText("BTS")
form.getTextField('Zone de texte 8_31').setText("BTS Sciences Informatiques des Organisations")
form.getTextField('Zone de texte 8_27').setText("Bac STMG SIG")

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('cerfa_rempli.pdf', pdfBytes);

  console.log("✅ CERFA rempli avec succès !");
}

remplirCerfa();
