/*
  vim: ft=c
*/

#if !defined(MATR_TYPE) || !defined(ALLOC)
#  error "MATR_TYPE or ALLOC is undefined"
#endif

void glue(glue(test, ALLOC), MATR_TYPE) (size_t x, size_t y, size_t z) {
  MATR_TYPE *ma = ALLOC(x*y*sizeof(MATR_TYPE));
  MATR_TYPE *mb = ALLOC(y*z*sizeof(MATR_TYPE));
  MATR_TYPE *mc = ALLOC(x*z*sizeof(MATR_TYPE));

  size_t i, j, k;
  int next = 0;

  clock_t start = clock();

  MATR_TYPE res = 0;
  double time;


  /* init ma */
  for (i = 0; i < x; ++i) {
    for (j = 0; j < y; ++j) {
      at(ma, i, j, x) = ++next % 5 - 2;
    }
  }

  /* init mb */
  for (j = 0; j < y; ++j) {
    for (k = 0; k < z; ++k) {
      at(mb, j, k, y) = ++next % 5 - 2;
    }
  }

  /* multiplication */
  for (i = 0; i < x; ++i) {
    for (k = 0; k < z; ++k) {
      at(mc, i, k, x) = 0;

      for (j = 0; j < y; ++j) {
        at(mc, i, k, x) += at(ma, i, j, x) * at(mb, j, k, y);
      }
    }
  }

  /* checksum */
  for (i = 0; i < x; ++i) {
    for (k = 0; k < z; ++k) {
      res += at(mc, i, k, x);
    }
  }

  time = (clock() - start) / (double) CLOCKS_PER_SEC;
  printf(
    "test %s+%s, checksum %.1f, ma %p, mb %p, mc %p,   time %f\n",
    str(MATR_TYPE), str(ALLOC), (double) res, ma, mb, mc, time
  );

  /* ignore memory leaks */
}
