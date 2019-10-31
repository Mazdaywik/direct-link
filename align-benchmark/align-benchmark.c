#include <stddef.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>


#define glue(x, y) glue_aux(x, y)
#define glue_aux(x, y) x ## _ ## y

#define str(x) str_aux(x)
#define str_aux(x) #x

#define at(ptr, i, j, size) ((ptr)[(i) + (j)*(size)])


void *alloc_ali(size_t size);
void *alloc_una(size_t size);

#define ALLOC alloc_ali

#define MATR_TYPE double
#include "align-benchmark.inc"
#undef MATR_TYPE

#define MATR_TYPE float
#include "align-benchmark.inc"
#undef MATR_TYPE

#define MATR_TYPE int
#include "align-benchmark.inc"
#undef MATR_TYPE

#define MATR_TYPE short
#include "align-benchmark.inc"
#undef MATR_TYPE

#define MATR_TYPE char
#include "align-benchmark.inc"
#undef MATR_TYPE

#undef ALLOC


#define ALLOC alloc_una

#define MATR_TYPE double
#include "align-benchmark.inc"
#undef MATR_TYPE

#define MATR_TYPE float
#include "align-benchmark.inc"
#undef MATR_TYPE

#define MATR_TYPE int
#include "align-benchmark.inc"
#undef MATR_TYPE

#define MATR_TYPE short
#include "align-benchmark.inc"
#undef MATR_TYPE

#define MATR_TYPE char
#include "align-benchmark.inc"
#undef MATR_TYPE

#undef ALLOC


int main() {
#define test(alloc, type) test_ ## alloc ## _ ## type(1501, 1502, 1503)
  test(alloc_ali, double);
  test(alloc_una, double);
  test(alloc_ali, float);
  test(alloc_una, float);
  test(alloc_ali, int);
  test(alloc_una, int);
  test(alloc_ali, short);
  test(alloc_una, short);
  test(alloc_ali, char);
  test(alloc_una, char);
#undef test

  return 0;
}
