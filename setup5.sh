(
  echo $(date): 'Prepare directory ~/.local/share/refal-5-lambda'
  mkdir -p ~/.local/share/refal-5-lambda
  cd ~/.local/share/refal-5-lambda
  find ! -name c-plus-plus.conf.sh -delete

  echo $(date): Starting download distributive, wait few minutes...
  DISTRIB=https://github.com/bmstu-iu9/refal-5-lambda/releases/download/2.2.1/bootstrap-refal-5-lambda-2.2.1.tar.gz
  ( curl -L $DISTRIB || wget -q -O - $DISTRIB ) | tar xzf -
  chmod +x bootstrap.sh bin/srefc bin/srmake
  sed -i 's/\r//' *.sh */*.sh bin/srefc bin/srmake
  echo $(date): Downloading is finished

  echo $(date): Compiling sources, wait few minutes...
  ./bootstrap.sh
  echo $(date): Compilation finished

  CONFIG=~/.bashrc
  if [ $(uname) == Darwin ]; then
    CONFIG=~/.bash_profile
  fi
  if ! grep -qE 'PATH=.*/.local/share/refal-5-lambda/bin' $CONFIG; then
    echo 'export PATH=$PATH:~/.local/share/refal-5-lambda/bin' >> $CONFIG
    echo $(date): Updated file $CONFIG, check if you need
  fi

  echo $(date): Installation finished
)
