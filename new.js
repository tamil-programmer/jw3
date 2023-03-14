document.getElementById("3a").addEventListener("click",f3a);
document.getElementById("3b").addEventListener("click",f3b);
document.getElementById("3c").addEventListener("click",f3c);
document.getElementById("4a").addEventListener("click",f4a);
document.getElementById("4b").addEventListener("click",f4b);
document.getElementById("4c").addEventListener("click",f4c);
document.getElementById("5a").addEventListener("click",f5a);
document.getElementById("5b").addEventListener("click",f5b);
document.getElementById("5c").addEventListener("click",f5c);
document.getElementById("6a").addEventListener("click",f6a);
document.getElementById("6b").addEventListener("click",f6b);
document.getElementById("6c").addEventListener("click",f6c);
document.getElementById("7a").addEventListener("click",f7a);
document.getElementById("7b").addEventListener("click",f7b);
document.getElementById("7c").addEventListener("click",f7c);
document.getElementById("8a").addEventListener("click",f8a);
document.getElementById("8b").addEventListener("click",f8b);
document.getElementById("8c").addEventListener("click",f8c);
// document.getElementById("").addEventListener("click",f);
// document.getElementById("").addEventListener("click",f);
// document.getElementById("").addEventListener("click",f);



function f3a(params) {
    let copyText = `import java.lang.*;
    import java.util.Scanner;
    
    public class pra3a{
        public static void main(String j[]){
            String st;
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter a Sring : ");
            st = sc.nextLine();
            count(st);
            }
        public static void count(String x){
    
            char ch[] = x.toCharArray();
            int l=0,s=0,n=0,a=0;
            for(int i=0;i<x.length();i++){
                if(Character.isLetter(ch[i])){
                        l++;
                    }
                else if(Character.isDigit(ch[i])){
                    n++;
                    }
                else if(Character.isSpaceChar(ch[i])){
                    s++;
                    }
                else{
                    a++;
                }
    }
    System.out.println("Letter :" + l);
    System.out.println("Numbers :" + n);
    System.out.println("Space :" + s);
    System.out.println("Others :" + a);
        }
    }`;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)
}

function f3b(params) {
    let copyText = `import java.lang.*;
    import java.util.Scanner;
    
    public class pra3b{
        public static long calc(){
            long x =0L;
            char c[] = {'0','1','2','3','4','5','6','7','8','9'};
            long sum = 0L;
            for(int i=c.length-1;i>=0;i--){
                x=c[i]-'0'; //ascii code for '0' is 48
                sum = sum+x;
            }
            return sum;
            }
            public static void main(String s[]){
                long r = calc();
                System.out.println("integer is " + r);
                }
            }`;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)
}

function f3c(params) {
    let copyText = `import java.util.Scanner;
    public class pra3c
    {
    public static void main(String s1[])
    {
    int n[] =new int[]{13,22,27,11,4};
    int s = n[0];
    int g = n[1];
    int i;
    for(i=0;i<n.length;i++)
    {
    System.out.println(n[i]);
    }
    for(i=1;i<n.length;i++)
    {
    if(n[i]>g)
    {
    g=n[i];
    }
    else if(n[i]<s)
    {
    s=n[i];
    }
    }
    System.out.println("largest number in array is: "+g);
    System.out.println("smallest number in array is: "+s); 
    }
    }
    `;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)






dvxdv

}


function f4a(params) {
    let copyText = `import java.util.Scanner;
    public class pra4a
    {
    
    int n,temp,i,j;
    public void desc(int num[]){
    
        for(i=0;i<num.length;i++){
            for(j=i+1;j<num.length;j++){
                if(num[i]<num[j]){
                    temp=num[i];
                    num[i]=num[j];
                    num[j]=temp;		
                }
            }
        }
    System.out.println("Desceding Order:");
        for (i=0;i<num.length;i++)
            {
                System.out.println(num[i] + " ");
            }
        }
    
    
    public void asec(int num[]){
    
        for(i=0;i<num.length;i++){
            for(j=i+1;j<num.length;j++){
                if(num[i]>num[j]){
                    temp=num[i];
                    num[i]=num[j];
                    num[j]=temp;		
                }
            }
        }
    System.out.println("Accessening Order:");
        for (i=0;i<num.length;i++)
            {
                System.out.println(num[i] + " ");
            }
        }
    
    
    
    public static void main(String s[])
    {
    
     pra4a s1 = new pra4a();
    int ar[]={13,22,27,11,4};
    s1.asec(ar);
    s1.desc(ar);
    
    }
    }
    `;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)
}

function f4b(params) {
    let copyText = `import java.util.Scanner;
    public class pra4b
    {
    
        public pra4b(){
            System.out.println("Hello");
        }
    
        public void finalize(){
        System.out.println("Destroyed");
        }
    
    
    public static void main(String s[])
    {
    
    pra4b s1 = new pra4b();
    s1 = null;
    System.gc();
    
    }
    }
    `;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)
}

function f4c(params) {
    let copyText = `abstract class Calc{

        public abstract int sqr(int n1);
        public abstract int cube(int n1);
        public void show(){
        System.out.println("hello");
        }
        }
        
        public class pra4c extends Calc{
        
        public int sqr(int n1){
            return n1*n1;
        }
        
        public int cube(int n1){
            return n1*n1*n1;
        }
        
        public static void main(String s[]){
        
            pra4c st = new pra4c();
            System.out.println(st.sqr(3));
            System.out.println(st.cube(4));
            st.show();
        }
        
        
        }
        
    `;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)






dvxdv

}


function f5a(params) {
    let copyText = `class Demo{

        float pi=3.14;
        void show(){
            System.out.println("Area of Circle");
        }
    
    }
    
    class pra5a extends Demo{
        float r=2.0;
        void area(){
            System.out.println("pi*r*r");
    }
    public static void main(String s[]){
    pra5a s1 = new pra5a();
    s1.show();
    s1.area();
    
    }
        }
    
    `;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)
}

function f5b(params) {
    let copyText = `class A{
        void show(){
        System.out.println("Base class");
        }
        
        }
        
        class B extends A{
        void show(){
        System.out.println("Derived class");
        }
        
        }
        
        class pra5b extends B{
        
        public static void main(String s[]){
        
        pra5b s1 = new pra5b();
        s1.show();
        
        }
        
        }
    `;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)
}

function f5c(params) {
    let copyText = `e

    `;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)






dvxdv

}




function f6a(params) {
    let copyText = `eeee
    `;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)
}

function f6b(params) {
    let copyText = `class pra6b {
        public static void main(String s[]) {
            int a[][] = { { 1, 2 }, { 3, 4 } };
            int b[][] = { { 5, 6 }, { 7, 8 } };
            int c[][] = new int[2][2];
            int i, j;
            System.out.println("Matrix A");
            for (i = 0; i < 2; i++) {j
                for (j = 0; j < 2; j++) {
                    System.out.print(a[i][j] + " ");
                }
                System.out.println();
            }
            System.out.println("MAtrix B");
            for (i = 0; i < 2; i++) {
                for (j = 0; j < 2; j++) {
                    System.out.print(b[i][j] + " ");
                }
                System.out.println();
            }
    
            System.out.println("MAtrix A+B");
            for (i = 0; i < 2; i++) {
                for (j = 0; j < 2; j++) {
                    c[i][j] = a[i][j] + b[i][j];
                    System.out.print(c[i][j] + " ");
                }
                System.out.println();
            }
        }
    }
    `;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)
}

function f6c(params) {
    let copyText = `class pra6c {
        public static void main(String s[]) {
            int a[][] = { { 1, 2 }, { 3, 4 } };
            int b[][] = { { 5, 6 }, { 7, 8 } };
            int d[][] = new int[2][2];
            int i, j, k;
            System.out.println("Matrix A");
            for (i = 0; i < 2; i++) {
                for (j = 0; j < 2; j++) {
                    System.out.print(a[i][j] + " ");
                }
                System.out.println();
            }
            System.out.println("MAtrix B");
            for (i = 0; i < 2; i++) {
                for (j = 0; j < 2; j++) {
                    System.out.print(b[i][j] + " ");
                }
                System.out.println();
            }
    
            System.out.println("MAtrix A+B");
            for (i = 0; i < 2; i++) {
                for (j = 0; j < 2; j++) {
                    for (k = 0; k < 2; k++)
                        d[i][j] = d[i][j] + a[i][k] * b[k][j];
                    System.out.print(d[i][j] + " ");
                }
                System.out.println();
            }
        }
    }
    `;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)






dvxdv

}



function f7a(params) {
    let copyText = `import java.util.Vector; 
    public class pra7a{
        public static void main(String s[]){
            Vector<String> v= new Vector<String>();
            v.add("red");
            v.add("green");
            v.add("blue");
            System.out.println(v);
            v.add(2,"yellow");
            System.out.println(v);
            System.out.println("element at 3r	d position"+v.get(3));
            System.out.println("first element "+v.firstElement());
            System.out.println("last element "+v.lastElement());
            System.out.println("is vector Empty?"+v.isEmpty());
        }
    }
    `;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)
}

function f7b(params) {
    let copyText = `import java.lang.*;
    public class pra7b extends Thread{
        public static void main(String s[])
        throws Exception
        {
        System.out.println(Thread.currentThread().getName());
        for(int i=0;i<10;i++){
        new Thread(""+i){
        public void run(){
        System.out.println("Thread:"+getName()+"running");
        }
    
        }.start();
        }
        }
    }`;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)
}

function f7c(params) {
    let copyText = `import java.io.*;
    class A extends Thread{
        public void run(){
            System.out.println("Start A");
                for(int i=1;i<=5;i++){
                System.out.println("Thread A is"+i);			
                }
    System.out.println("Exit A");
        }
        }
    
    class B extends Thread{
        public void run(){
            System.out.println("Start B");
                for(int j=1;j<=5;j++){
                System.out.println("Thread B is"+j);			
                }
    System.out.println("Exit B");
        }
        }
    
    class C extends Thread{
        public void run(){
            System.out.println("Start C");
                for(int k=1;k<=5;k++){
                System.out.println("Thread C is"+k);			
                }
    System.out.println("Exit C");
        }
        }
    
    class D extends Thread{
        public void run(){
            System.out.println("Start D");
                for(int l=1;l<=5;l++){
                System.out.println("Thread D is"+l);			
                }
    System.out.println("Exit D");
        }
        }
    
    class pra7c {
        public static void main(String s[]){
            new A().start();
            new B().start();
            new C().start();
            new D().start();
        }
    }`;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)






dvxdv

}



function f8a(params) {
    let copyText = `import java.io.*;
    public class pra8a{
        public static void main(String s[]) throws IOException{
        InputStream input = new FileInputStream("Tamil.txt");
        DataInputStream inst = new DataInputStream(input);
        int count = input.available();
    byte[] a = new byte[count];
    inst.read(a);
    for(byte b:a){
    char k = (char) b;
    System.out.print(k);
    }
    }
    
    
    }`;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)
}

function f8b(params) {
    let copyText = `import java.io.*;

    public class pra8b{
    
        public static void main(String s[]){
        FileInputStream instream = null;
        FileOutputStream outstream = null;
    
    try{
            File inF = new File("Tamil.txt");
            File outF  = new File("yaanai.txt");
            instream = new FileInputStream(inF);
            outstream = new FileOutputStream(outF);
            byte[] buffer = new byte[1024];
            int length;
            while((length=instream.read(buffer))>0){
                outstream.write(buffer,0,length);
    }
    instream.close();
    outstream.close();
    System.out.println("Done!");
        }
    catch(Exception e){
    e.printStackTrace();
    }
        }
    
    
    }`;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)
}

function f8c(params) {
    let copyText = `import java.io.*;
    import java.util.Scanner;
    
    class pra8c{
        public static void main(String args[]) throws IOException{
    
    String s1,s2,s3;
    Scanner st = new Scanner(System.in);
    System.out.print("Enter Name  :");
    s1 = st.nextLine();
    System.out.print("Enter phone  :");
    s2 = st.nextLine();
    System.out.print("Enter Address  :");
    s3 = st.nextLine();
    OutputStream fos = new FileOutputStream("test.txt");
    byte b1[] = s1.getBytes();
    fos.write(b1);
    byte b2[] = s2.getBytes();
    fos.write(b2);
    byte b3[] = s3.getBytes();
    fos.write(b3);
    fos.close();
    System.out.println("File created ");
    }
        }

    `;

   
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText);
    // console.log(copyText)






dvxdv

}
