import java.util.*;
import  java.io.*;

class Main{
     public static void main(String[] args) {
         try {
            File s =new File("hea.txt");
            if(s.delete()){
                System.out.println();
            }
             s.close();
         } catch (Exception e) {
            e.printStackTrace();
            // TODO: handle exception
         }
    }
}