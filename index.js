const fs = require("fs");

const xmlData = fs.readFileSync("data.xml", "utf-8");

const getTargetValueById = (xml, id) => {
  const startIndex = xml.indexOf(`id="${id}"`);
  if (startIndex === -1) return null;

  const startTargetIndex =
    xml.indexOf("<target>", startIndex) + "<target>".length;
  const endTargetIndex = xml.indexOf("</target>", startTargetIndex);

  if (endTargetIndex !== -1) {
    return xml.slice(startTargetIndex, endTargetIndex);
  }

  return null;
};

const id = "42007";
const targetValue = getTargetValueById(xmlData, id);

if (targetValue) {
  fs.writeFileSync("output.txt", targetValue, "utf-8");
} else {
  console.log(`Could not find the target value for id ${id} in the xml file.`);
}
