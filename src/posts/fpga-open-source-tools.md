---
layout: layouts/post.njk
title: "FPGA Development with Open Source Tools"
description: "Learn how to design and synthesize FPGA projects using Yosys, nextpnr, and other open source tools"
date: 2025-10-22
tags: ["fpga", "yosys", "nextpnr", "tutorial"]
---

# FPGA Development with Open Source Tools

The open source FPGA toolchain has matured significantly, making it possible to develop complete FPGA projects without proprietary tools. This guide introduces the key tools and workflows.

## The Open Source FPGA Toolchain

### Key Components

1. **Yosys** - Synthesis tool that converts HDL to netlists
2. **nextpnr** - Place and route tool
3. **Project IceStorm** - Bitstream tools for Lattice iCE40 FPGAs
4. **Project Trellis** - Bitstream tools for Lattice ECP5 FPGAs

### Supported FPGAs

- Lattice iCE40 (fully supported)
- Lattice ECP5 (fully supported)
- Xilinx 7-Series (partial support via Project X-Ray)
- Gowin FPGAs (growing support)

## Installation

### On Ubuntu/Debian:

```bash
# Install dependencies
sudo apt-get install build-essential clang bison flex \
    libreadline-dev gawk tcl-dev libffi-dev git \
    graphviz xdot pkg-config python3 libboost-all-dev \
    cmake libeigen3-dev

# Install Yosys
git clone https://github.com/YosysHQ/yosys.git
cd yosys
make -j$(nproc)
sudo make install

# Install nextpnr
git clone https://github.com/YosysHQ/nextpnr.git
cd nextpnr
cmake -DARCH=ice40 -DCMAKE_INSTALL_PREFIX=/usr/local .
make -j$(nproc)
sudo make install
```

## Your First FPGA Project

### Simple LED Blinker in Verilog

```verilog
module blinker (
    input wire clk,
    output reg led
);
    reg [23:0] counter = 0;
    
    always @(posedge clk) begin
        counter <= counter + 1;
        if (counter == 0)
            led <= ~led;
    end
endmodule
```

### Synthesis and Place & Route

```bash
# Synthesize
yosys -p "synth_ice40 -top blinker -json blinker.json" blinker.v

# Place and route
nextpnr-ice40 --hx8k --package ct256 --json blinker.json \
    --pcf blinker.pcf --asc blinker.asc

# Generate bitstream
icepack blinker.asc blinker.bin

# Program FPGA
iceprog blinker.bin
```

## Advantages of Open Source Tools

- **Free**: No licensing costs
- **Scriptable**: Easy to integrate into CI/CD
- **Transparent**: Understand exactly what's happening
- **Cross-platform**: Works on Linux, macOS, Windows
- **Community-driven**: Active development and support

## Simulation with Open Source Tools

Use Icarus Verilog or Verilator for simulation:

```bash
# Icarus Verilog
iverilog -o blinker_tb blinker.v blinker_tb.v
vvp blinker_tb

# Verilator (faster, more accurate)
verilator --cc --exe --build blinker.v sim_main.cpp
./obj_dir/Vblinker
```

## Next Steps

- Try more complex designs
- Explore timing analysis
- Implement a RISC-V soft processor
- Contribute to the open source FPGA ecosystem

## Resources

- [YosysHQ](https://github.com/YosysHQ)
- [FPGA Design Elements](http://fpgacpu.ca/fpga/)
- [Open Source FPGA Foundation](https://osfpga.org/)

Happy FPGA hacking!

