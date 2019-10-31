#include <stdlib.h>


void *alloc_ali(size_t size) {
  char *res = malloc(size + 0);
  return res + 0;
}

void *alloc_una(size_t size) {
  char *res = malloc(size + 1);
  return res + 1;
}
