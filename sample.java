class MenghitungParenthesis{ 
  
    static long dua(int n, int m){ 
        long r=1; 
      
        if(m>(n-m)) 
            m=n-m; 
    
        for (int i=0; i<m; ++i){ 
            r *= (n-i); 
            r /= (i+1); 
        } 
      
        return r; 
    } 
    
    static long satu(int n){ 
        // Calculate value of 2nCn 
        long c = dua(2*n, n); 
      
        // return 2nCn/(n+1) 
        return c/(n+1); 
    } 
    public static void main(String[] args) { 
        int n=10;

        for(int i=1; i<=n; i++){ 
            System.out.print("jumlah kombinasi ke "+i+" adalah "+satu(i)+"\n"); 
        } 
    } 
}