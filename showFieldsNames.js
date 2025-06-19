const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function afficherTousLesChamps() {
  const pdfBytes = fs.readFileSync('cerfa_10103-13.pdf');
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const form = pdfDoc.getForm();
  const fields = form.getFields();

  fields.forEach(field => {
    const name = field.getName();
    const type = field.constructor.name;

    try {
      if (type === 'PDFTextField') {
        field.setText(name);
      } else if (type === 'PDFCheckBox') {
        field.check(); // Tu verras quelle case est cochée
      }
    } catch (err) {
      console.warn(`❌ Erreur sur ${name} (${type}): ${err.message}`);
    }
  });

  const newPdfBytes = await pdfDoc.save();
  fs.writeFileSync('cerfa_champs_visibles.pdf', newPdfBytes);
  console.log("✅ PDF généré avec noms de champs visibles !");
}

afficherTousLesChamps();
