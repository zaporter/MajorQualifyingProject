<h1 >
<h1 align="center">
  <br>
  <a href="https://github.com/zaporter/Explorant"><img src="https://raw.githubusercontent.com/zaporter/Explorant/master/frontend/public/logo_zoomed.png" alt="Explorant" width="200"></a>
  <br>
  Explorant
  <br>
</h1>


<h4 align="center">A trace-based code exploration tool for understanding new codebases.</h4>

<h5 align="center">This project was completed as part of my <a href="https://www.wpi.edu/academics/undergraduate/major-qualifying-project">MQP </a> at the  <a href="https://cake.wpi.edu/">WPI Cake Lab</a> in collaboration with <a href="https://www.wpi.edu/people/faculty/rjwalls">Professor Robert J Walls</a> and <a href="https://www.wpi.edu/people/faculty/gpollice">Professor Gary Pollice</a>.</h5>
<h5 align="center"><a href="https://raw.githubusercontent.com/zaporter/MQP-Documents/master/Final_Report/build/default/default.pdf">📄 Report</a></h5>
<h1></h1>


<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#install">Install</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>



## Key-Features
- Reproducibility
- Ability to share completed graphs
- Ability to add in-code annotations to serve as documentation
- Ability to open up a gdb shell on any event during the program's last execution

## How-to-Use

To use this program, first record an execution of a program and then explore it.
```
gcc -g3 examples/simple/simple.c -o examples/simple/a.out
./explorant.sh record -e examples/simple/a.out -s examples/simple/recording
./explorant.sh explore examples/simple/recording
```
This will pop open Explorant:

<img src="https://github.com/zaporter/MQP-Documents/blob/master/Final_Report/src/images/design-whole.png" alt="Explorant Whole" width="600">


## Install

This project is not yet bundled with any major package manager. For now, you must install from source.

Ubuntu:
Install dependencies:
```
sudo apt-get install ccache cmake make g++-multilib gdb \
  pkg-config coreutils python3-pexpect manpages-dev git \
  ninja-build capnproto libcapnp-dev zlib1g-dev
```
Efficient recording requires use of the perf counters. You must enable them temporarily by:
```
sudo sysctl kernel.perf_event_paranoid=1
```
Or permenantly by:
```
echo 'kernel.perf_event_paranoid=1' | sudo tee '/etc/sysctl.d/51-enable-perf-events.conf'
```
Install docker: [instructions](https://docs.docker.com/engine/install/ubuntu/)
  
Install the rust toolchain: [instructions](https://www.rust-lang.org/tools/install)
  
Download and build Explorant:
```
git clone https://github.com/zaporter/Explorant
cd Explorant
./docker_perms.sh
./explorant.sh --help
```





## Credits

- [Robert J Walls](https://www.wpi.edu/people/faculty/rjwalls) For his passion, knowledge, and devotion to this project
- [Gary F Pollice](https://www.wpi.edu/people/faculty/gpollice) For his insights, advice, and general assistance
- [rr](https://github.com/rr-debugger/rr) For making this project possible with their incredible tool
- [synoptic](https://github.com/ModelInference/synoptic) For graph simplification
- [gimli](https://docs.rs/gimli/latest/gimli/) For reading DWARF files
- [Sourceware](https://sourceware.org/gdb/onlinedocs/gdb/Remote-Protocol.html) For their excellent documentation of the GDB remote serial protocol
- [DallE](https://openai.com/dall-e-2/) For the logo
- [Markdownify](https://github.com/amitmerchant1990/electron-markdownify) For their beautiful readme


## License

MIT
