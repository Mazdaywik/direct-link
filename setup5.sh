(
  echo $(date): 'Prepare directory ~/.local/share/refal-5-lambda'
  rm -rf ~/.local/share/refal-5-lambda
  mkdir -p ~/.local/share/refal-5-lambda
  pushd ~/.local/share/refal-5-lambda

  echo $(date): Starting download distributive, wait few minutes...
  wget -q -O - https://github.com/bmstu-iu9/refal-5-lambda/releases/download/2.2.1/bootstrap-refal-5-lambda-2.2.1.tar.gz | tar xzf -
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

  popd
  echo $(date): Installation finished
)
