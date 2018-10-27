function reverseString(str) {
  String s=" ";
  int i;
  for(i=0;i<str.length();i++)
  {
    char ch=str.charAt(i);
    s=s+ch;
  }
  s=s.substring(1,s.length());
  return s;
}

reverseString("hello");
