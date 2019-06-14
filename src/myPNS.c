int myPNS(int l[], int m, int n) {
  int i = 1, j = 3, k; l[0] = 2;
  while (j <= n && i < m) {
    k = 0;
    while (k < i)
      if (j%l[k])
        ++k;
      else
        break;
    if (k==i)
      l[i++] = j;
    ++j;
  }
  if (i < m)
    l[i] = -1;
  if (n < 2)
    return 1;
  else
    return 0;
}