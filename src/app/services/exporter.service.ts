import { Injectable } from "@angular/core";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { KeyObject } from "crypto";
const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXT = ".xlsx";

@Injectable()
export class ExporterService {
  constructor() {}
  //Creamos metodo
  exportToExcel(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ["data"],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    //llamar metodo para guardar el fichero
    this.saveAsExcel(excelBuffer, excelFileName);
  }
  private saveAsExcel(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    //configuramos el nombre de nuestro fichero
    FileSaver.saveAs(
      data,
      fileName + "_export_" + new Date().toLocaleString() + EXCEL_EXT
    );
  }

  exportToPDF(json: any[], pdfFileName: string, text: any[]) {
    const pdf = new jsPDF();
    let values: any;
    let data = json;
    let cab = text;
    for (let property of data) {
      console.log(data[property]);
    }
    values = data.map((elemento) => Object.values(elemento));
    console.log(values);

    autoTable(pdf, {
      head: [cab],
      body: values,
      theme: "striped",
      // Default for all columns
      //styles: { overflow: "ellipsize", cellWidth: "wrap" },
      // styles: {
      //  overflow: "linebreak",
      // font: "arial",
      // fontSize: 10,
      // cellPadding: 4,
      // },
      didDrawPage: (dataArg) => {
        pdf.text(pdfFileName, dataArg.settings.margin.left, 10);
      },
    });

    // Open PDF document in new tab
    pdf.output("dataurlnewwindow");

    console.log("Impresion PDF");
    pdf.save(pdfFileName + ".pdf");
  }
}
