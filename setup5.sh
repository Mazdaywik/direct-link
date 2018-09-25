(
  mkdir -p ~/.local/share/refal-5-lambda
  cd ~/.local/share/refal-5-lambda
  wget -q -O - https://github.com/bmstu-iu9/refal-5-lambda/releases/download/2.2.1/bootstrap-refal-5-lambda-2.2.1.tar.gz | tar xzvf -
  chmod +x bootstrap.sh bin/srefc bin/srmake
  sed -i 's/\r//' *.sh */*.sh bin/srefc bin/srmake
  ./bootstrap.sh
  echo 'export PATH=$PATH:~/.local/share/refal-5-lambda/bin' >> ~/.bashrc
)
