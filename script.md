<script>
document.write("<pre>\n");
for (i = 1; i != 51; ++i) {
  for (j = 1; j != 21; ++j) {
    document.write(("    " + i * j).slice(-5));
  }
  document.write("\n");
}
document.write("</pre>");
</script>
