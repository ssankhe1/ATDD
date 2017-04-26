package C3.C3Testing;

import java.io.File;

import java.io.FileInputStream;
 
import java.io.FileOutputStream;
 
import org.apache.poi.xssf.usermodel.XSSFSheet;
 
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
 
import org.testng.annotations.Test;
 
public class Rally {
 
 public static void main(String []args){
 
  try {
 
  // Specify the file path which you want to create or write
 
  File src=new File("C:\\Users\\ssankhe1\\workspacemars\\C3Testing\\src\\test\\DataSheets\\Testcases.xlsx");
 
  // Load the file
 
  FileInputStream fis=new FileInputStream(src);
 
   // load the workbook
 
   XSSFWorkbook wb=new XSSFWorkbook(fis);
 
  // get the sheet which you want to modify or create
 
   XSSFSheet sh1= wb.getSheetAt(0);
 
 // getRow specify which row we want to read and getCell which column
 
 System.out.println(sh1.getRow(0).getCell(0).getStringCellValue());
 
 System.out.println(sh1.getRow(0).getCell(1).getStringCellValue());
 
 //System.out.println(sh1.getRow(1).getCell(0).getStringCellValue());
 
 //System.out.println(sh1.getRow(1).getCell(1).getStringCellValue());
 
 //System.out.println(sh1.getRow(2).getCell(0).getStringCellValue());
 
 //System.out.println(sh1.getRow(2).getCell(1).getStringCellValue());
 
// here createCell will create column
 
// and setCellvalue will set the value
 
 sh1.getRow(1).createCell(1).setCellValue("Passed");
 
 sh1.getRow(2).createCell(1).setCellValue("Passed");
 
 sh1.getRow(3).createCell(1).setCellValue("Passed");
 
 sh1.getRow(4).createCell(1).setCellValue("Passed");
 
 sh1.getRow(5).createCell(1).setCellValue("Passed");
 
 sh1.getRow(6).createCell(1).setCellValue("Passed");
 
 sh1.getRow(7).createCell(1).setCellValue("Passed");
 
 sh1.getRow(8).createCell(1).setCellValue("Passed");
// here we need to specify where you want to save file
 
 FileOutputStream fout=new FileOutputStream(new File("C:\\Users\\ssankhe1\\workspacemars\\C3Testing\\src\\test\\DataSheets\\Testcases.xlsx"));
 
 
// finally write content 
 
 wb.write(fout);
 
// close the file
 fout.close();
 
 
  } catch (Exception e) {
 
   System.out.println("I am in Catch of Rally Class");
 
  }
 }
 
}

