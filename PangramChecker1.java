// Java Task-3
/*C. Check if the input is pangram or not. (Pangram is a sentence that contains all the   alphabet from a-z) */

import java.util.Scanner;
                                    
public class PangramChecker1 
{
 public static void main(String[] args)
 {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence: ");
        String input = sc.nextLine();
        sc.close();

        if (isPangram(input))
         {
            System.out.println("The Given Sentence is a pangram.");
         } 
        else 
         {
            System.out.println("The Given Sentence is not a pangram.");
         }
  }

  public static boolean isPangram(String input)
  {
         boolean[] alphabetCheck = new boolean[26];
         input = input.toLowerCase();

         for (int i = 0; i < input.length(); i++)
          {
            char currentChar = input.charAt(i);
            if (currentChar >= 'a' && currentChar <= 'z')
             {
                alphabetCheck[currentChar - 'a'] = true;
             }
          }

         for (boolean isPresent : alphabetCheck) 
          {
            if (!isPresent)
             {
                return false;
             }
           }
        return true;
        

           /*1. First, takes a sentence as input and checks if it is a pangram.
             2. creating an array for maintaining boolean values from 'a' to 'z'. 
             3. Then, create this as case-insensitivity. 
             4. and last, it checks if all letters in the alphabet are present to determine      
                 if it's a pangram or not.*/



    }
}